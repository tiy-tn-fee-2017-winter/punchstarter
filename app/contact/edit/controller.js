import Ember from 'ember';
import contactValidation from 'punchstarter/validations/contact';

export default Ember.Controller.extend({
  contactValidation,

  actions: {
    async saveContact(changeset) {
      await changeset.save();

      this.transitionToRoute('contact.index');
    },
    // saveContact(changeset) {
    //   changeset.save().then(() => {
    //     this.transitionToRoute('contact.index');
    //   });
    // },
  }
});
