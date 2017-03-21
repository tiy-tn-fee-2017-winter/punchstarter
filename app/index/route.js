import Ember from 'ember';
import projects from './data';

export default Ember.Route.extend({
  // Load data for the current page
  model() {
    return projects;
  }
});
