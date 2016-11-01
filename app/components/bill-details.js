import Ember from 'ember';

export default Ember.Component.extend({
  showDetails: false,
  actions: {
    billClicked: function() {
      console.log("hello")
       this.set('showDetails', true);
    }
  }
});
