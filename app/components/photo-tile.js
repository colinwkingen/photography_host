import Ember from 'ember';

export default Ember.Component.extend({
  isPhotoShowing: false
  actions: {
    photoShow: function() {
      this.set('isPhotoShowing', true);
    },
    photoShow: function() {
      this.set('isPhotoShowing', false);
    },
    delete(photo) {
      if (confirm'Do you really want to remove this photo?')) {
        this.sendAction('destroyPhoto', photo ]);
      }
    }
  }
});
