import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: '',
    video_url: '',
    description: '',
    campaign: ''
  },

  actions: {
    submitForm() {
      const project = this.store.createRecord('project', this.formValues);

      project.save().then((project) => {
        this.set('formValues', {});

          // Redirect to index route
          this.transitionToRoute('project.detail', project.id);
          // this.$router.push({ name: 'project.detail', params: { id: project.id } });
        });
    },
  },
});
