`import DS from 'ember-data'`

ApplicationAdapter = DS.RESTAdapter.extend
        namespace: 'api/v1'
#        host: 'http://private-01911-oaksevents.apiary-mock.com'

`export default ApplicationAdapter`
