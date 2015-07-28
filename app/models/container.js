import DS from 'ember-data'

var Container = DS.Model.extend({
    x: DS.attr('number'),
    y: DS.attr('number'),
    width: DS.attr('number'),
    height: DS.attr('number'),
    area: DS.belongsTo('area')
})

export default Container
