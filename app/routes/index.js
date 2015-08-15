var IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('area')
    }
});

export default IndexRoute
