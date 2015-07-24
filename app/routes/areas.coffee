`import Ember from 'ember'`

AreasRoute = Ember.Route.extend
        model: (params) ->
        	this.store.find('area', params.area_id).then (area) ->
                        area.contains.each |child|
                                child.area = Area.find(child.id)
                                

`export default AreasRoute`
