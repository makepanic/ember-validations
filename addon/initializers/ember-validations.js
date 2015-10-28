import messages from 'ember-validations/messages';
import Ember from 'ember';

const {extend} = Ember.$;

export function initialize(application) {
  const ENVIRONMENT_REGISTRATION_KEY = 'config:environment';
  const ENV = application.resolveRegistration ? application.resolveRegistration(ENVIRONMENT_REGISTRATION_KEY) : application.resolve(ENVIRONMENT_REGISTRATION_KEY);
  if (ENV.hasOwnProperty('ember-validations') && ENV['ember-validations'].hasOwnProperty('messages')) {
    messages.defaults = extend({}, messages.defaults, ENV['ember-validations'].messages);
  }
}

export default {
  name: 'ember-validations',
  initialize: initialize
};
