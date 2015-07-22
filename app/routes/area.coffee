`import Ember from 'ember'`

AreaRoute = Ember.Route.extend
        model: (params) ->
        	this.store.find('area', params.area_id)

`export default AreaRoute`
