import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('index', { path: '/' });
  this.route('about');

  this.route('project', { path: '/projects' }, function() {
    this.route('new');
    this.route('detail', { path: '/:id' }, function() {
      this.route('new-pledge');
    });
  });
  this.route('contact', function() {
    this.route('create');

    this.route('edit', {
      path: '/:contact_id/edit'
    });
  });
  this.route('register');
});

export default Router;
