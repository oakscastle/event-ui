import Ember from 'ember';

var AreaSvgComponent = Ember.Component.extend({
    tagName: 'svg',
    attributeBindings: [ 'viewBox', 'x', 'y', 'width', 'height' ],
    viewBox: Ember.computed.alias('area.attributes.viewBox')
})

export default AreaSvgComponent;
