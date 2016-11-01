import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=' +key+ '&subcommittee=true&parent_committee_id='+ params.committee_id;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
    console.log(model);
  },
});
