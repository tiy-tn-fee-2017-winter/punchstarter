import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr('number'),
  ships_to: DS.attr(),
  delivery_date: DS.attr(),
  description: DS.attr(),

  project: DS.belongsTo('project'),
});
