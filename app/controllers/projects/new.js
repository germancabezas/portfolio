import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
      addProject: function(){
        var self = this;
        var rand = Math.floor((Math.random() * 10000) +1);
        var newProject = this.store.createRecord('project', {
          id: rand,
          title: this.get('projectTitle'),
          description: this.get('projectDescription'),
        });
        // newProject.save();

        self.transitionToRoute('projects');
      }
  }
});
