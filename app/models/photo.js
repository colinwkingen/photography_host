import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  location: DS.attr(),
  model: DS.attr(),
  camera: DS.attr(),
  settings: DS.attr(),
  image: DS.attr()
});
