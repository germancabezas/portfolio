import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
      addProject: function(){
        var self = this;
        var newProject = this.store.createRecord('project', {
          title: this.get('projectTitle'),
          description: this.get('projectDescription'),
        });
        // newProject.save();

        self.transitionToRoute('projects');
      }
  }
});
