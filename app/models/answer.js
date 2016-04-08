import DS from 'ember-data';

export default DS.Model.extend({
  answerUserName: DS.attr(),
  answerAbout: DS:attr(),
  answerContent: DS.attr(),
  date: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
