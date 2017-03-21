import Ember from 'ember';
const apiUrl = 'https://punchstarter-api.herokuapp.com/ryan/basic/projects';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: '',
    video_url: '',
    description: '',
    campaign: ''
  },

  actions: {
    save() {
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(this.formValues),
      }).then(r => r.json())
        .then(() => {
          // Redirect to index route
          this.transitionToRoute('index');
          // this.$router.push({ name: 'index' });
        });
    },
  },
});
