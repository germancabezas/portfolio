export default Ember.Controller.extend({
  isShowingMenu: false,

  actions: {
   toggleMenu: function() {
     this.toggleProperty('isShowingMenu');
   },
   hideMenu: function() {
     this.set('isShowingMenu', false);
   },
  }
});
