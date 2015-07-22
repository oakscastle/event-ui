`import Ember from 'ember'`

AreasRoute = Ember.Route.extend
        model: (params) ->
        	this.store.find('area', params.area_id)

`export default AreasRoute`
