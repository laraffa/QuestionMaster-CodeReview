import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('answer.answerUserName', 'answer.answerAbout', function() {
    return this.get('answer.answerUserName') + ', ' + this.get('answer.answerAbout');
  }),

  updateAnswerForm: false,
  actions: {
    update(answer, params) {
      this.sendAction('update', answer, params);
    },
    delete(answer) {
      if(confirm('Are you sure you want to delete this answer?')) {
      this.sendAction('delete', answer);
      }
    }
  }
});
