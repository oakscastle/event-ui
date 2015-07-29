import DS from 'ember-data'

var Area = DS.Model.extend({
    containers: DS.hasMany('containers', { async: true }),
    image_url: DS.attr('string'),
    parents: DS.hasMany('containers', { async: true }),
    attributes: DS.attr(),
    contents: DS.attr('string')
})

export default Area
