Router.configure({

  layoutTemplate : 'layout'

});

Router.route('/', function() {

  this.render('index');

});

Router.route('/flashboard', function() {

  this.render('flashboard');

});

Router.route('/decks', function() {

  this.render('decks');

});

Router.onBeforeAction(function() {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.user()) {

    if (Meteor.loggingIn()) {

      Router.go('flashboard');

    }

    this.render('index');

  } else {

    this.next();

  }

});