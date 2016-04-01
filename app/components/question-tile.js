import Ember from 'ember';

export default Ember.Component.extend({
  isDetailShowing: false,
  actions: {
    detailShow: function() {
      this.set('isDetailShowing', true);
    },
    detailHide: function() {
      this.set('isDetailShowing', false);
    }
  }
});
