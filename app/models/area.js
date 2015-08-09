import DS from 'ember-data'

var Area = DS.Model.extend({
    containers: DS.hasMany('containers', { async: true }),
    image: DS.attr('string'),
    parents: DS.hasMany('containers', { async: true }),
    attributes: DS.attr(),
    contents: function() {
        var svg, url = this.get('image')
        jQuery.ajax({
            url: url,
            success: function(result) { svg = result },
            async: false
        })
        return $('<g/>').append(svg.documentElement.childNodes).html()
    }.property('image')
})

export default Area
