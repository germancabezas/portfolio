import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return ['project1', 'project2', 'project3'];
  }
});
