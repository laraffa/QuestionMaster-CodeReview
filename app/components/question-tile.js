import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),
  updateQuestionForm: false,
actions:{
  addToFav(favorite) {
		this.get('favoriteQuestion').add(favorite);
	},
  // addToFavorites(item) {
  //      this.get('favoriteQuestion').add(item);
  //    },
  //
  //    save(params) {
  //     this.sendAction('save', params);
  //   },

  update(question, params) {
      this.sendAction('update', question, params);
    },
}
});
