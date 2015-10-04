import messages from 'ember-validations/messages';
import Ember from 'ember';

const {extend} = Ember.$;

export function initialize(registry) {
  const ENV = registry.resolve('config:environment');
  if (ENV.hasOwnProperty('ember-validations') && ENV['ember-validations'].hasOwnProperty('messages')) {
    messages.defaults = extend({}, messages.defaults, ENV['ember-validations'].messages);
  }
}

export default {
  name: 'ember-validations',
  initialize: initialize
};
