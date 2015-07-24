import DS from 'ember-data'

ContainedArea = DS.Model.extend({
    size: DS.attr(),
    position: DS.attr(),
    size: DS.attr(),
    area: DS.belongsTo('area')
})

Area = DS.Model.extend({
    children: DS.hasMany('containedArea'),
    image: DS.attr('string')
})

export default Area
