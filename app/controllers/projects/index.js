import Ember from 'ember';

export default Ember.Controller.extend({

  isPreviewing: false,

  actions: {
   showPreview: function() {
     this.set('isPreviewing', true);
   },

   hidePreview: function() {
     this.set('isPreviewing', false);
   }
  }
});
