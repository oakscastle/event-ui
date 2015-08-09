import DS from 'ember-data'

var Area = DS.Model.extend({
    containers: DS.hasMany('containers', { async: true }),
    image_url: DS.attr('string'),
    parents: DS.hasMany('containers', { async: true }),
    attributes: DS.attr(),
    contents: function() {
        $.get(this.get('image_url')).then(function(data) {
            return $('<g/>').append(data.documentElement.childNodes).html()
            //area.set('attributes', { viewBox: data.documentElement.attributes.viewBox.value })
        })
    }.property('image_url')
})

export default Area
