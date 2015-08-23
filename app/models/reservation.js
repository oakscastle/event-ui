import DS from 'ember-data'

var Reservation = DS.Model.extend({
    title: DS.attr('string'),
    area: DS.belongsTo('area'),
    starts_at: DS.attr('date'),
    ends_at: DS.belongsTo('date')
    //creator: DS.belongsTo('user')
    //owner: DS.belongsTo('user')
})

export default Reservation
