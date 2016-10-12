import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editProject: function(id){
      var self = this;

      var title = this.get('model.title');
      var description = this.get('model.description');

      this.store.findRecord('project', id).then(function(project){
        project.set('title', title);
        project.set('description', description);
        // project.save();
        self.transitionToRoute('projects');
      });
    }
  }
});
