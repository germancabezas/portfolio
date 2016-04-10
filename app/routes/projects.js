import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return ['SBC', 'PDN', 'Goldstar', 'Purei'];
    }
});
