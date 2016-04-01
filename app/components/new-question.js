import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save1() {
          var params = {
            ask: this.get('ask'),
            author: this.get('author'),
            detail: this.get('detail'),
          };
          this.set('addNewQuestion', false);
          this.sendAction('save2', params);
    }
  }
});
