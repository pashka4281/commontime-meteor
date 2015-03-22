Template.AuthenticationForms.events({
  'submit #login-form' : function(e, t){
    e.preventDefault();
    var email = t.find('#login-email').value
      , password = t.find('#login-password').value;

    // Trim and validate your fields here.... 

    Meteor.loginWithPassword(email, password, function(err){
      if (err){
        alert("Wrong credentials")     
      }
      else{ // The user has been logged in.
        // alert('logged in!')
      }
    })
    return false;
  },

  'click #show-register-form' : function(e,t){
    Session.set('show-register-form', true);
    return false;
  },

  'click #show-login-form' : function(e,t){
    Session.set('show-register-form', false);
    return false;
  },

  'submit #register-form' : function(e, t) {
    e.preventDefault();
    var email = t.find('#register-form input[type="email"]').value
      , password = t.find('#register-form input[type="password"]').value;

      // Trim and validate the input

    Accounts.createUser({email: email, password : password}, function(err){
        if (err) {
          alert("Error!")
          // Inform the user that account creation failed
        } else {
          alert("Registered!")
          // Success. Account has been created and the user
          // has logged in successfully. 
        }

      });

    return false;
  }
});

Template.AuthenticationForms.helpers({
  showLoginForm: function(param){
    return !Session.get('show-register-form');
  },
  showRegisterForm: function(param){
    return Session.get('show-register-form');
  }
})