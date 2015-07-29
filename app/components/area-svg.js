import Ember from 'ember';

var AreaSvgComponent = Ember.Component.extend({
    tagName: 'svg',
    attributeBindings: [ 'x', 'y', 'width', 'height' ]//,
    //x: Ember.computed.alias('x')
})

export default AreaSvgComponent;
