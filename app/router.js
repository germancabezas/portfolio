import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path:'home'});
  this.route('projects', function() {
    this.route('show', { path: '/:project_id' });
  });
  // this.route('projects');
  // this.route('project', { path: '/projects/:project_id'});
  this.route('about');
});

export default Router;
