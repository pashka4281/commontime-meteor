function getGravatar(email) {
  // MD5 (Message-Digest Algorithm) by WebToolkit
  var MD5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
  return 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + 128;
}


$(function(){
  var timeZones = [["(GMT-12:00) International Date Line West", -12], ["(GMT-11:00) Midway Island, Samoa", -11], ["(GMT-10:00) Hawaii", -10], ["(GMT-09:00) Alaska", -9], ["(GMT-08:00) Pacific Time (US & Canada)", -8], ["(GMT-08:00) Tijuana, Baja California", -8], ["(GMT-07:00) Arizona", -7], ["(GMT-07:00) Chihuahua, La Paz, Mazatlan", -7], ["(GMT-07:00) Mountain Time (US & Canada)", -7], ["(GMT-06:00) Central America", -6], ["(GMT-06:00) Central Time (US & Canada)", -6], ["(GMT-06:00) Guadalajara, Mexico City, Monterrey", -6], ["(GMT-06:00) Saskatchewan", -6], ["(GMT-05:00) Bogota, Lima, Quito, Rio Branco", -5], ["(GMT-05:00) Eastern Time (US & Canada)", -5], ["(GMT-05:00) Indiana (East)", -5], ["(GMT-04:00) Atlantic Time (Canada)", -4], ["(GMT-04:00) Caracas, La Paz", -4], ["(GMT-04:00) Manaus", -4], ["(GMT-04:00) Santiago", -4], ["(GMT-03:30) Newfoundland", -3.5], ["(GMT-03:00) Brasilia", -3], ["(GMT-03:00) Buenos Aires, Georgetown", -3], ["(GMT-03:00) Greenland", -3], ["(GMT-03:00) Montevideo", -3], ["(GMT-02:00) Mid-Atlantic", -2], ["(GMT-01:00) Cape Verde Is.", -1], ["(GMT-01:00) Azores", -1], ["(GMT+00:00) Casablanca, Monrovia, Reykjavik", 0], ["(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London", 0], ["(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna", 1], ["(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague", 1], ["(GMT+01:00) Brussels, Copenhagen, Madrid, Paris", 1], ["(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb", 1], ["(GMT+01:00) West Central Africa", 1], ["(GMT+02:00) Amman", 2], ["(GMT+02:00) Athens, Bucharest, Istanbul", 2], ["(GMT+02:00) Beirut", 2], ["(GMT+02:00) Cairo", 2], ["(GMT+02:00) Harare, Pretoria", 2], ["(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius", 2], ["(GMT+02:00) Jerusalem", 2], ["(GMT+02:00) Minsk", 2], ["(GMT+02:00) Windhoek", 2], ["(GMT+03:00) Kuwait, Riyadh, Baghdad", 3], ["(GMT+03:00) Moscow, St. Petersburg, Volgograd", 3], ["(GMT+03:00) Nairobi", 3], ["(GMT+03:00) Tbilisi", 3], ["(GMT+03:30) Tehran", 3.5], ["(GMT+04:00) Abu Dhabi, Muscat", 4], ["(GMT+04:00) Baku", 4], ["(GMT+04:00) Yerevan", 4], ["(GMT+04:30) Kabul", 4.5], ["(GMT+05:00) Yekaterinburg", 5], ["(GMT+05:00) Islamabad, Karachi, Tashkent", 5], ["(GMT+05:30) Sri Jayawardenapura", 5.5], ["(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi", 5.5], ["(GMT+05:45) Kathmandu", 5.75], ["(GMT+06:00) Almaty, Novosibirsk", 6], ["(GMT+06:00) Astana, Dhaka", 6], ["(GMT+06:30) Yangon (Rangoon)", 6.5], ["(GMT+07:00) Bangkok, Hanoi, Jakarta", 7], ["(GMT+07:00) Krasnoyarsk", 7], ["(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi", 8], ["(GMT+08:00) Kuala Lumpur, Singapore", 8], ["(GMT+08:00) Irkutsk, Ulaan Bataar", 8], ["(GMT+08:00) Perth", 8], ["(GMT+08:00) Taipei", 8], ["(GMT+09:00) Osaka, Sapporo, Tokyo", 9], ["(GMT+09:00) Seoul", 9], ["(GMT+09:00) Yakutsk", 9], ["(GMT+09:30) Adelaide", 9.5], ["(GMT+09:30) Darwin", 9.5], ["(GMT+10:00) Brisbane", 10], ["(GMT+10:00) Canberra, Melbourne, Sydney", 10], ["(GMT+10:00) Hobart", 10], ["(GMT+10:00) Guam, Port Moresby", 10], ["(GMT+10:00) Vladivostok", 10], ["(GMT+11:00) Magadan, Solomon Is., New Caledonia", 11], ["(GMT+12:00) Auckland, Wellington", 12], ["(GMT+12:00) Fiji, Kamchatka, Marshall Is.", 12], ["(GMT+13:00) Nuku'alofa", 13]];

  // Setting options for timeZone selectors (keeping list here in js no prevent polluting html with huge duplicate lists of options)
  $(timeZones).each(function(i, zoneData){
    $('.zoneSelector').append( $("<option value='" + i + "' offset='" + zoneData[1] + "'>" + zoneData[0] + "</option>") );
  })

  // setting up variables:
  var r        = Raphael("chart", 500, 500),
    R          = { inner: 140, outer: 200 },
    param      = { stroke: "#fff", "stroke-width": 8 },
    hash       = document.location.hash,
    init       = true,
    timeFormat = 12,
    total      = 24;

  var diffAngleHour   = 360 / total;
  var diffAngleQuater = 360 / total / 4;

  // worker and client objects:
  var worker = {
    timeFrom: 8
   ,timeTo: 17
   ,email: ""
   ,rotateAngle: 0
  }

  var workerZoneSelector = $('#myTime select.zoneSelector');

  var client = {
    timeFrom: 8
   ,timeTo: 17
   ,email: ""
   ,rotateAngle: 0
  }

  var clientZoneSelector = $('#clientTime select.zoneSelector');

  r.text(250, 10, "UTC 0:00").attr({ fill: '#fff', "font-size": 9, "font-family": "Arial, Helvetica, sans-serif" })

  // r.circle(250, 250, 2) // marking the center of circles


  function getCircleCoords(angle, R){
    // console.log(angle)
    var alpha = diffAngleHour * angle,
      a = (90 - alpha) * Math.PI / 180,
      x = 250 + R * Math.cos(a),
      y = 250 - R * Math.sin(a);
    return [x, y]
  }

  // Custom attribute function
  r.customAttributes.arc = function(from, to, r) {
    x1y1 = getCircleCoords(from, r); // arc start point
    x2y2 = getCircleCoords(to, r); // arc end point

    var color = r == R.outer ?  "#FEED00" : "#00BE32";

    direction = undefined;

    if(from < to) 
      direction = +((to -from) > 12)
    else{
      direction = +(from - 12 < to)
    }
    
    var path = [["M", x1y1[0], x1y1[1]], ["A", r, r, 0, direction, 1, x2y2[0], x2y2[1] ]];
    return { path: path, stroke: color };
  };

  // rounds decimals to 2 numbers after dot
  function round2(num){
    return Math.round(num *100) / 100;
  }

  var createKnob = function(timeAt, R){
    var knobInitialCoords = getCircleCoords(timeAt, R);
    var knob = r.circle(knobInitialCoords[0], knobInitialCoords[1], 10).attr({ stroke: '#fff', fill: "rgba(226, 226, 226, 0.2)", cursor: 'pointer' })
      .hover(
        function(){ this.animate({fill: "#f00"}, 200, ">") },
        function(){ this.animate({fill: "#fff"}, 200, ">")}
      )
    return knob;
  }

  // called each time when knob is moved by user
  function knobMoved(x, y, wayPath, knob, rotateAngle, callback) {
    var totLen    = wayPath.getTotalLength()
    var svgOffset = $('svg').offset(),
    mousePT = {x: x - svgOffset.left, y: y - svgOffset.top }

    // performing angle shifting:
    var angleMod = ( (Raphael.angle( mousePT.x, mousePT.y, 250, 250 ) - rotateAngle) % 360 )
    var angle    = (angleMod < 0 ? 360 + angleMod : angleMod) / 360; // in percents (from 0.0 to 1.0) where 1.0 means 360 deg
    var dAngle = 1 / 24 / 4; // angle difference between points
    angle = parseInt(angle / dAngle) * dAngle;
    var knobPos  = wayPath.getPointAtLength( (angle * totLen) % totLen ); // Using angle, find a point along the path
    
    knob.attr({cx: knobPos.x, cy: knobPos.y});

    if(!!callback)
      callback(angle) 
    updateVal()
  };

  // saving all params to url hash
  // w - {..} worker object
  // c - {..} client object
  // w: {st, et, z}
  //    st -- start time
  //    et -- end time
  //    z  -- zone
  //    e  -- email
  function storeParamsToUrl(){
    window.location.hash = JSON.stringify({ 
      w: { st: worker.timeFrom, et: worker.timeTo, z: workerZoneSelector.find('option:selected').index(), e: worker.email },
      c: { st: client.timeFrom, et: client.timeTo, z: clientZoneSelector.find('option:selected').index(), e: client.email },
      f: timeFormat
    })
  }

  function readParamsFromUrl(){
    params = !!window.location.hash ? JSON.parse(window.location.hash.split("#")[1]) : false
    if(!!params){
      if(!!params.w){
        if(!!params.w.st){ worker.timeFrom = params.w.st }
        if(!!params.w.et){ worker.timeTo   = params.w.et }
        if(!!params.w.e){
          worker.email = params.w.e;
          $('#myTime img').attr( 'src', getGravatar(worker.email) );
          $('#myTime input[type="email"]').val(worker.email);
        }
        if(!!params.w.z){
          // worker.rotateAngle = params.w.z;
          workerZoneSelector.find('option').removeProp('selected');
          workerZoneSelector.find('option').eq(params.w.z).prop('selected', true);
          workerZoneSelector.trigger('change');
        }
      }
      if(!!params.c){
        if(!!params.c.st){ client.timeFrom = params.c.st }
        if(!!params.c.et){ client.timeTo   = params.c.et }
        if(!!params.c.e){
          client.email = params.c.e;
          $('#clientTime img').attr( 'src', getGravatar(client.email) );
          $('#clientTime input[type="email"]').val(client.email);
        }
        if(!!params.c.z){
          // client.rotateAngle = params.c.z;
          clientZoneSelector.find('option').removeProp('selected');
          clientZoneSelector.find('option').eq(params.c.z).prop('selected', true);
          clientZoneSelector.trigger('change');
        }
      }

      if(!!params.f){ timeFormat = params.f; }
    }
  }


  readParamsFromUrl(); // read params before rendering circles, arcs, knobs etc.

  // *****************************
  // ****** OUTER (MY TIME) ******
  // *****************************
  worker.arc = r.path().attr(param).attr({arc: [worker.timeFrom, worker.timeTo, R.outer]}).toBack();
  worker.arcData  = drawPoints(R.outer, total, 3, true, worker.arc); // drawing "Fat" points
                   drawPoints(R.outer, total * 4, 1, false);    // drawing "thin" points
  // creating knobs for worker/my time
  worker.pFrom = createKnob(worker.timeFrom, R.outer);
  worker.pTo   = createKnob(worker.timeTo, R.outer);

  worker.arcData[0].push(worker.pFrom);
  worker.arcData[0].push(worker.pTo);

  // circular "way" path used to drive knob controls on it, which could be draggable only within it's shape
  // it's being used only as a trajectory, so it should not be visible:
  worker.timePath = r.path( Raphael.transformPath( Raphael._getPath.circle({attrs: {cx: 250, cy: 250, r: R.outer,}}), 'r90' ) ).hide()


  worker.pFrom.drag(function(dx, dy, x, y){
    knobMoved(x, y, worker.timePath, this, worker.rotateAngle, function(angle){
      worker.timeFrom = round2( 24 * ((angle + 0.25) % 1 ));
      storeParamsToUrl();
    }) 
  });

  // dx, dy - difference between current coordinates and prev. ones; x, y - mouse cursor position
  worker.pTo.drag(function(dx, dy, x, y){ 
    knobMoved(x, y, worker.timePath, this, worker.rotateAngle, function(angle){
      worker.timeTo = round2( 24 * ((angle + 0.25) % 1 ));
      storeParamsToUrl();
    }) 
  });
  // *****************************
  // *********** END *************
  // *****************************


  
  // *********************************
  // ****** Inner (Client TIME) ******
  // *********************************
  client.arc = r.path().attr(param).attr({arc: [client.timeFrom, client.timeTo, R.inner]});
  client.arcData  = drawPoints(R.inner, total, 3, true, client.arc); // drawing "Fat" points
                   drawPoints(R.inner, total * 4, 1, false);        // drawing "thin" points

  // creating knobs for worker/my time
  client.pFrom = createKnob(client.timeFrom, R.inner);
  client.pTo   = createKnob(client.timeTo, R.inner);

  client.arcData[0].push(client.pFrom);
  client.arcData[0].push(client.pTo);

  // circular "way" path used to drive knob controls on it, which could be draggable only within it's shape
  // it's being used only as a trajectory, so it should not be visible:
  client.timePath = r.path( Raphael.transformPath( Raphael._getPath.circle({attrs: {cx: 250, cy: 250, r: R.inner,}}), 'r90' ) ).hide()


  client.pFrom.drag(function(dx, dy, x, y){ 
    knobMoved(x, y, client.timePath, this, client.rotateAngle, function(angle){
      client.timeFrom = round2( 24 * ((angle + 0.25) % 1 ));
      storeParamsToUrl();
    }) 
  });

  // dx, dy - difference between current coordinates and prev. ones; x, y - mouse cursor position
  client.pTo.drag(function(dx, dy, x, y){ 
    knobMoved(x, y, client.timePath, this, client.rotateAngle, function(angle){
      client.timeTo = round2( 24 * ((angle + 0.25) % 1 ));
      storeParamsToUrl();
    }) 
  });
  // *****************************
  // *********** END *************
  // *****************************

  function drawLabels(circleData, R, total, timeFormat){
    circleData[1].animate({ opacity: 0 }, 400, ">")
    for(var i=0; i<total; i++){
      var alpha = 360 / total * i,
      a = (90 - alpha) * Math.PI / 180,
      labelX = 250 + (R + 24) * Math.cos(a),
      labelY = 250 - (R + 24) * Math.sin(a);
      var labelTxt = undefined;
      if(timeFormat === '12')
        if(i < 13)
          labelTxt = "" + (i) + ":00 AM";
        else
          labelTxt = "" + (i - 12) + ":00 PM";
      else
        labelTxt = "" + (i) + ":00";

      circleData[1].push(r.text(labelX, labelY, labelTxt).attr({ fill: '#8d8d8d', "font-size": 9, "font-family": "Arial, Helvetica, sans-serif" })); 
    }
  }

  function drawPoints(R, total, pointRadius, drawText, handle) {
    var color     = "hsb(".concat(Math.round(R) / 200, ", 1, .75)");
    var marksSet  = r.set();
    var labelsSet = r.set();

    if(handle) marksSet.push(handle);

    for (var value = 0; value < total; value++) {
      var alpha = 360 / total * value,
        a = (90 - alpha) * Math.PI / 180,
        x = 250 + R * Math.cos(a),
        y = 250 - R * Math.sin(a);
      marksSet.push(r.circle(x, y, pointRadius).attr({ fill: "#444", stroke: "none" }));

      if(drawText){
        // labelsSet = drawLabels(R, total)
        labelX = 250 + (R + 20) * Math.cos(a);
        labelY = 250 - (R + 20) * Math.sin(a);
        labelsSet.push(r.text(labelX, labelY, "" + (value) + ":00"));
      }
    }
    
    return [marksSet, labelsSet];
  }

  function updateVal() {
    worker.arc.attr({arc: [worker.timeFrom, worker.timeTo, R.outer]});
    client.arc.attr({arc: [client.timeFrom, client.timeTo, R.inner]});
  }


  function rotateCircle(angle, circleData, animationTime){
    storeParamsToUrl();
    if(!animationTime) animationTime = 1300;
    circleData[0].animate({ transform: ['R'+angle+', '+ 250 +', ' + 250] }, animationTime, "elastic")  // CircleData[0] -- marks
    circleData[1].animate({ transform: ['R'+angle+', '+ 250 +', ' + 250, 'r'+ -Math.sign(angle) *  Math.abs(angle)] }, animationTime, "elastic") // CircleData[0] -- labels
  }

  //_______________ UI CONTROLS EVENT HANDLERS _________________

  // email field: setting gravatar image if email is changed
  $('input[type="email"]').bind('change', function(e){
    var img = $(this).siblings('img');
    var src = !!$(this).val() ? getGravatar($(this).val()) : img.attr('default-src');
    img.attr('src', src );
    if($(e.target).parents('#myTime').length)
      worker.email = $(this).val();
    else
      client.email = $(this).val();
    storeParamsToUrl();
  });

  $('select[name="am_pm_switch"').bind('change', function(){
    timeFormat = $(this).val();
    drawLabels(worker.arcData, R.outer, total, $(this).val());
    rotateCircle(worker.rotateAngle, worker.arcData, 10);
    drawLabels(client.arcData, R.inner, total, $(this).val());
    rotateCircle(client.rotateAngle, client.arcData, 10);
    storeParamsToUrl();
  });

  $('select[name="am_pm_switch"] option[value="' + timeFormat + '"]').attr('selected', true).parent().trigger('change')

  // <========================== My Time:
  $('.zoneSelector[name="myTime"]').bind('change', function(){
    worker.rotateAngle = -($(this).find('option:selected').attr('offset')) * diffAngleHour;
    rotateCircle(worker.rotateAngle, worker.arcData);
  }).trigger('change');

  // <========================== Client Time:
  $('.zoneSelector[name="clientTime"]').bind('change', function(){
    client.rotateAngle = -($(this).find('option:selected').attr('offset')) * diffAngleHour;
    rotateCircle(client.rotateAngle, client.arcData);
  }).trigger('change');

});