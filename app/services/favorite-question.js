
import Ember from 'ember';

export default Ember.Service.extend({
	favorites: [],

	add(favorite) {
		this.get('favorites').pushObject(favorite);
	},
	includes(favorite) {
    return this.get('favorites').includes(favorite);
  },
});




// import Ember from 'ember';
//
// export default Ember.Service.extend({
//   items: [],
//
//   add(item) {
//     this.get('items').pushObject(item);
//   },
//   deleteFromCart(item) {
//     this.get('items').removeObject(item);
// }
// });
