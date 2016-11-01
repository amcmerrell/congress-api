import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    findSubcommittees(params) {
      console.log(params);
      this.sendAction('findSubcommittees', params);
    }
  }
});
