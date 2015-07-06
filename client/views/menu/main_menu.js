Template.MainMenu.events({
  'click .logout' : function(e, t){
    Meteor.logout(function(){
      //logged out!
    })
    return false;
  },
  'click .show-profile-modal': function(){
    Session.set('userProfileShown', true)
    return false;
  }
})

Template.MainMenu.rendered = function(){
  $('select').material_select();
  $('.modal-trigger').leanModal();
}
