var AreaRoute = Ember.Route.extend({
    // afterModel: function(area) {
    //     $.get(area.get('image_url')).then(function(data) {
    //         area.set('contents', [$('<g/>').append(data.documentElement.childNodes).html()]) // parsing twice
            
    //         area.set('attributes', { viewBox: data.documentElement.attributes.viewBox.value })
    //         //debugger
    //     })
    // }
});

export default AreaRoute;
