import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save1() {
      var params = {
        answer: this.get('answer'),
        name: this.get('name'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
