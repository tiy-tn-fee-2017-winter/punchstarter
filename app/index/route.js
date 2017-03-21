import Ember from 'ember';

const apiUrl = 'https://punchstarter-api.herokuapp.com/ryan/basic/projects';

export default Ember.Route.extend({
  // Load data for the current page
  model() {
    return fetch(apiUrl)
      .then(r => r.json());
  }
});
