import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  answer: DS.belongsTo('answer', { async: true })
});
