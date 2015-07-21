`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
    this.route('area', { path: 'area/:area_id' })

`export default Router`
