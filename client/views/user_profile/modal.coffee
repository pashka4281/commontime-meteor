Template.profileModal.helpers
  userProfileShown: -> !!Session.get('userProfileShown')

Template.profileModal.events =
  'click .close': -> Session.set('userProfileShown', false); false
