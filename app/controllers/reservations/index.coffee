`import Ember from 'ember'`

ReservationsIndexController = Ember.Controller.extend
        occurrences: Ember.A()
        actions:
                calendarAddOccurrence: (occurrence) ->
                        @get('occurrences').pushObject(Ember.Object.create
                                title: occurrence.get('title')
                                startsAt: occurrence.get('startsAt')
                                endsAt: occurrence.get('endsAt'))
                calendarUpdateOccurrence: (occurrence, properties) ->
                        occurrence.setProperties(properties)
                calendarRemoveOccurrence: (occurrence) ->
                        @get('occurrences').removeObject(occurrence)

`export default ReservationsIndexController`
