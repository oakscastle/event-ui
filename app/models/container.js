import DS from 'ember-data'

var Container = DS.Model.extend({
    parent: DS.belongsTo('area', { async: true, inverse: 'containers' }),
    x: DS.attr('number'),
    y: DS.attr('number'),
    width: DS.attr('number'),
    height: DS.attr('number'),
    area: DS.belongsTo('area', { async: true, inverse: 'parents' })
})

export default Container
