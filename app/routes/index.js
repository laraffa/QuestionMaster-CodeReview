import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      answers: this.store.findAll('answer'),
      questions: this.store.findAll('question')
    });
  },
  actions: {
    destroyAnswer(answer) {
     answer.destroyRecord();
     this.transitionTo('index');
   },
    save3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    update(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('index');
    },
    save3(params) {
   var newAnswer = this.store.createRecord('answer', params);
   newAnswer.save();
   this.transitionTo('index');
 },
  }
});
