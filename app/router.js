import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('index', { path: '/' });
  this.route('about');
  this.route('new-project');

    this.route('project', { path: '/projects' }, function() {
      this.route('detail', { path: '/:id' });
    });
});

export default Router;
