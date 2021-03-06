import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  thumb: attr('string'),
  title: attr('string'),
  description: attr('string'),
  recent: attr('boolean'),
  images: attr({
    image: attr('string'),
  }),
  tags: attr({
    tag: attr('string'),
  }),
});
