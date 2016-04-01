import Ember from 'ember';

export default Ember.Component.extend({
  isDetailShowing: false,
  actions: {
    detailShow: function() {
      this.set('isDetailShowing', true);
    },
    detailHide: function() {
      this.set('isDetailShowing', false);
    },
    delete(question) {
    if (confirm('Are you sure you want to delete this question?')) {
      this.sendAction('destroyQuestion', question);
      }
    }
  }
});
