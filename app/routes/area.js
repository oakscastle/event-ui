var AreaRoute;

AreaRoute = Ember.Route.extend({
    // model: function(params) {
    //     // return this.store.find('area', params.area_id).then(function(area) {
    //     //     return area.contains.each | child | (child.area = Area.find(child.id));
    //     // });
    // },
    afterModel: function(area) {
        //console.log(area.get('image_url'))
        $.get(area.get('image_url')).then(function(data) {
            area.set('contents', [$('<g/>').append(data.documentElement.childNodes).html()]) // parsing twice
            //debugger
        })
    }
});

export default AreaRoute;
