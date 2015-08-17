var IndexRoute = Ember.Route.extend({
    beforeModel: function() {
        this.transitionTo('area', 'house')
    }
});

export default IndexRoute
