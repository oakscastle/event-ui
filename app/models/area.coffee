`import DS from 'ember-data'`

Area = DS.Model.extend {
    contains: DS.attr()
    image_url: DS.attr('string')  
}

`export default Area`
