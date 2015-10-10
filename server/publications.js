Meteor.publish('cards', function() {

  return Tasks.find();

});