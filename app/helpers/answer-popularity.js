import Ember from 'ember';

export function answerPopularity(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<p class="helper"><span class="glyphicon glyphicon-heart"></span> <em>Trending Topic</em></p>');
  }
}
export default Ember.Helper.helper(answerPopularity);
