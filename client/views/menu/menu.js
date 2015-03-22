Template.MainMenu.events({
  'click .logout' : function(e, t){
    Meteor.logout(function(){
      //logged out!
    })
    return false;
  }
})