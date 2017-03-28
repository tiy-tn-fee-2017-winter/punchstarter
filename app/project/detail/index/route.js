// app/project/detail/index

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Request part of the URL from 'project.detail' route
    const id = this.paramsFor('project.detail').id;

    return this.store.findRecord('project', id);
  }
});
