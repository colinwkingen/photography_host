import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return this.store.findAll('photo');
  },

  actions: {
    destroyPhoto(photo) {
      photo.destroyRecord();
      this.transitionTo('index');
    }
  }
});
