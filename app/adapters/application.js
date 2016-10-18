import DS from 'ember-data'

export default DS.RESTAdapter.extend({
  host: "projects.json?jsonp=?",
  ShouldReloadAll(){return true;}
});
