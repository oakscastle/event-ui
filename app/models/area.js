import DS from 'ember-data'

var Area = DS.Model.extend({
    children: DS.hasMany('container'),
    image_url: DS.attr('string')
})

export default Area
