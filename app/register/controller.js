import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    async saveUser(changeset) {
      changeset.save();

      const user = this.store.createRecord('user', this.model);

      await user.save();

      alert('Account Created');

      this.transitionToRoute('index');
    }
  }
});
