Template.chart.rendered = ->
  # Setting options for timeZone selectors (keeping list here in js no prevent polluting html with huge duplicate lists of options)
  # r.circle(250, 250, 2) // marking the center of circles

  getCircleCoords = (angle, R) ->
    # console.log(angle)
    alpha = diffAngleHour * angle
    a = (90 - alpha) * Math.PI / 180
    x = 250 + R * Math.cos(a)
    y = 250 - (R * Math.sin(a))
    [ x, y ]

  # rounds decimals to 2 numbers after dot

  round2 = (num) -> Math.round(num * 100) / 100

  # called each time when knob is moved by user
  knobMoved = (x, y, wayPath, knob, rotateAngle, callback) ->
    totLen = wayPath.getTotalLength()
    svgOffset = $('svg').offset()
    mousePT =
      x: x - (svgOffset.left)
      y: y - (svgOffset.top)
    # performing angle shifting:
    angleMod = (Raphael.angle(mousePT.x, mousePT.y, 250, 250) - rotateAngle) % 360
    angle = (if angleMod < 0 then 360 + angleMod else angleMod) / 360 # in percents (from 0.0 to 1.0) where 1.0 means 360 deg
    dAngle = 1 / 24 / 4 # angle difference between points
    angle = parseInt(angle / dAngle) * dAngle
    knobPos = wayPath.getPointAtLength(angle * totLen % totLen)
    # Using angle, find a point along the path
    knob.attr(cx: knobPos.x, cy: knobPos.y)
    if !!callback
      callback angle
    updateVal()

  # saving all params to url hash
  # w - {..} worker object
  # c - {..} client object
  # w: {st, et, z}
  #    st -- start time
  #    et -- end time
  #    z  -- zone
  #    e  -- email

  storeParamsToUrl = ->
    window.location.hash = JSON.stringify(
      w:
        st: worker.timeFrom
        et: worker.timeTo
        z: workerZoneSelector.find('option:selected').index()
        e: worker.email
      f: timeFormat)
    return

  readParamsFromUrl = ->
    params = if ! !window.location.hash then JSON.parse(window.location.hash.split('#')[1]) else false
    if ! !params
      if ! !params.w
        if ! !params.w.st
          worker.timeFrom = params.w.st
        if ! !params.w.et
          worker.timeTo = params.w.et
        if ! !params.w.e
          worker.email = params.w.e
          $('#myTime img').attr 'src', getGravatar(worker.email)
          $('#myTime input[type="email"]').val worker.email
        if ! !params.w.z
          # worker.rotateAngle = params.w.z;
          workerZoneSelector.find('option').removeProp 'selected'
          workerZoneSelector.find('option').eq(params.w.z).prop 'selected', true
          workerZoneSelector.trigger 'change'
      if ! !params.f
        timeFormat = params.f

  # *****************************
  # *********** END *************
  # *****************************

  drawLabels = (circleData, R, total, timeFormat) ->
    circleData[1].animate { opacity: 0 }, 400, '>'
    i = 0
    while i < total
      alpha = 360 / total * i
      a = (90 - alpha) * Math.PI / 180
      labelX = 250 + (R + 24) * Math.cos(a)
      labelY = 250 - ((R + 24) * Math.sin(a))
      labelTxt = undefined
      if timeFormat == '12'
        if i < 13
          labelTxt = "#{i}:00 AM"
        else
          labelTxt = "#{i - 12}:00 PM"
      else
        labelTxt = "#{i}:00"
      circleData[1].push r.text(labelX, labelY, labelTxt).attr(
        fill: '#8d8d8d'
        'font-size': 9
        'font-family': 'Arial, Helvetica, sans-serif')
      i++

  drawPoints = (R, total, pointRadius, drawText, handle) ->
    color = 'hsb('.concat(Math.round(R) / 200, ', 1, .75)')
    marksSet = r.set()
    labelsSet = r.set()
    if handle
      marksSet.push handle
    value = 0
    while value < total
      alpha = 360 / total * value
      a = (90 - alpha) * Math.PI / 180
      x = 250 + R * Math.cos(a)
      y = 250 - (R * Math.sin(a))
      marksSet.push r.circle(x, y, pointRadius).attr( fill: '#444', stroke: 'none')
      value++
    [ marksSet, labelsSet ]

  updateVal = ->
    worker.arc.attr arc: [ worker.timeFrom, worker.timeTo, R.outer, ]
    #client.arc.attr arc: [ client.timeFrom, client.timeTo, R.inner ]

  rotateCircle = (angle, circleData, animationTime) ->
    storeParamsToUrl()
    if !animationTime
      animationTime = 1300
    circleData[0].animate { transform: [ "R#{angle},#{250},#{250}" ] }, animationTime, 'elastic'
    # CircleData[0] -- marks
    circleData[1].animate { transform: [ "R#{angle},#{250},#{250}", 'r' + -Math.sign(angle) * Math.abs(angle) ] }, animationTime, 'elastic'
    # CircleData[1] -- labels

  $(TIMEZONES).each (i, zoneData) ->
    $('.zoneSelector').append $('<option value=\'' + i + '\' offset=\'' + zoneData[1] + '\'>' + zoneData[0] + '</option>')
  # setting up variables:
  r = Raphael('chart', 500, 500)
  R =
    inner: 140
    outer: 160
  param =
    stroke: '#fff'
    'stroke-width': 8
  hash = document.location.hash
  init = true
  timeFormat = 12
  total = 24
  diffAngleHour = 360 / total
  diffAngleQuater = 360 / total / 4
  # worker and client objects:
  worker =
    timeFrom: 8
    timeTo: 17
    email: ''
    rotateAngle: 0
  workerZoneSelector = $('#myTime select.zoneSelector')

  r.text(250, 10, 'UTC 0:00').attr
    fill: '#fff'
    'font-size': 9
    'font-family': 'Arial, Helvetica, sans-serif'
  # Custom attribute function

  r.customAttributes.arc = (from, to, r) ->
    x1y1 = getCircleCoords(from, r) # arc start point
    x2y2 = getCircleCoords(to, r) # arc end point
    color = if r == R.outer then '#FEED00' else '#00BE32'
    direction = undefined
    if from < to
      direction = +(to - from > 12)
    else
      direction = +(from - 12 < to)
    path = [
      [ 'M', x1y1[0], x1y1[1] ]
      [ 'A', r, r, 0, direction, 1, x2y2[0], x2y2[1] ]
    ]
    { path: path, stroke: color }

  createKnob = (timeAt, R) ->
    knobInitialCoords = getCircleCoords(timeAt, R)
    knob = r.circle(knobInitialCoords[0], knobInitialCoords[1], 10).attr(
      stroke: '#fff'
      fill: 'rgba(226, 226, 226, 0.2)'
      cursor: 'pointer').hover((->
      @animate { fill: '#f00' }, 200, '>'
    ), -> @animate { fill: '#fff' }, 200, '>')
    knob

  readParamsFromUrl() # read params before rendering circles, arcs, knobs etc.

  # *****************************
  # ****** OUTER (MY TIME) ******
  # *****************************
  worker.arc = r.path().attr(param).attr(arc: [ worker.timeFrom, worker.timeTo, R.outer ]).toBack()
  worker.arcData = drawPoints(R.outer, total, 3, true, worker.arc) # drawing "Fat" points
  drawPoints R.outer, total * 4, 1, false # drawing "thin" points
  # creating knobs for worker/my time
  worker.pFrom = createKnob(worker.timeFrom, R.outer)
  worker.pTo = createKnob(worker.timeTo, R.outer)
  worker.arcData[0].push worker.pFrom
  worker.arcData[0].push worker.pTo
  # circular "way" path used to drive knob controls on it, which could be draggable only within it's shape
  # it's being used only as a trajectory, so it should not be visible:
  worker.timePath = r.path(Raphael.transformPath(Raphael._getPath.circle(attrs: {cx: 250, cy: 250, r: R.outer}), 'r90')).hide()
  worker.pFrom.drag (dx, dy, x, y) ->
    knobMoved x, y, worker.timePath, this, worker.rotateAngle, (angle) ->
      worker.timeFrom = round2(24 * ((angle + 0.25) % 1))
      storeParamsToUrl()
  # dx, dy - difference between current coordinates and prev. ones; x, y - mouse cursor position
  worker.pTo.drag (dx, dy, x, y) ->
    knobMoved x, y, worker.timePath, this, worker.rotateAngle, (angle) ->
      worker.timeTo = round2(24 * ((angle + 0.25) % 1))
      storeParamsToUrl()
  
  #_______________ UI CONTROLS EVENT HANDLERS _________________
  # email field: setting gravatar image if email is changed
  $('input[type="email"]').bind 'change', (e) ->
    img = $(this).siblings('img')
    src = if ! !$(this).val() then getGravatar($(this).val()) else img.attr('default-src')
    img.attr 'src', src
    storeParamsToUrl()
  
  $('select[name="am_pm_switch"').bind('change', ->
    timeFormat = $(this).val()
    drawLabels worker.arcData, R.outer, total, $(this).val()
    rotateCircle worker.rotateAngle, worker.arcData, 10

    storeParamsToUrl()
  ).trigger 'change'

  $("select[name='am_pm_switch'] option[value=#{timeFormat}]").attr('selected', true)

# <========================== My Time:
  $('.zoneSelector[name="myTime"]').bind('change', ->
    worker.rotateAngle = -$(this).find('option:selected').attr('offset') * diffAngleHour
    rotateCircle worker.rotateAngle, worker.arcData
  ).trigger 'change'


