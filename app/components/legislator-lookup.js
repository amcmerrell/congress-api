import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      debugger;
      var params = {
        zip: this.get('zip')
      };
      console.log(params.zip);
      this.sendAction('zipLookup', params);
    }
  }
});
