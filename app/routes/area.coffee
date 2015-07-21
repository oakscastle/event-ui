`import Ember from 'ember'`

AreaRoute = Ember.Route.extend
        model: (params) ->
        	console.log('t', this.store.find('area', params.area_id))
        	this.store.find('area', params.area_id)

`export default AreaRoute`
