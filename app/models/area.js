import DS from 'ember-data';

export default DS.Model.extend({
    contains: DS.attr(),
    image_url: DS.attr('string')
});
