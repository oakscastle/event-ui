import DS from 'ember-data'

var ApplicationAdapter = DS.RESTAdapter.extend({
    //namespace: 'api/v1'
    //host: 'http://private-01911-oaksevents.apiary-mock.com'
    host: 'http://localhost',
    namespace: ".../geo/usa/37601/South%20Roan/1416",
    urlForFindRecord: function(id, type, snapshot) {
        if(type == 'area') {
            return 'http://localhost/.../geo/usa/37601/South%20Roan/1416/floors/0/json'
        } else if(type == 'reservation') {
            console.log('tried to load reservations')
        }
    }
})

export default ApplicationAdapter
