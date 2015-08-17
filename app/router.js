import Ember from 'ember'
import config from './config/environment'

var Router

Router = Ember.Router.extend({
    location: config.locationType
})

Router.map(function() {
    return this.resource('area', { path: 'areas/:area_id' }, function() {
        this.resource('reservations', function() {
            this.route('new')
        })
    })
});

export default Router
