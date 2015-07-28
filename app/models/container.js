import DS from 'ember-data'

var Container = DS.Model.extend({
    size: DS.attr(),
    position: DS.attr(),
    size: DS.attr(),
    area: DS.belongsTo('area')
})

export default Container
