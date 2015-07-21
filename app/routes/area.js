import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
	console.log('t', this.store.find('area', params.area_id))
	return this.store.find('area', params.area_id)
    }
});
