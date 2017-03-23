import Ember from 'ember';

export default Ember.Route.extend({
  // Load data for the current page
  model() {
    return this.store.findAll('project'); // Makes fetch request for us
  }
});
