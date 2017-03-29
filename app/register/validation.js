import {
  validateFormat, validatePresence, validateLength
} from 'ember-changeset-validations/validators';

export default {
  username: [
    validatePresence(true)
  ],

  firstName: [
    validatePresence(true)
  ],

  lastName: [
    validatePresence(true)
  ],

  email: [
    validatePresence(true),
    validateFormat({ type: 'email' }),
  ],

  password: [
    validatePresence(true),
    validateLength({ min: 6 }),
  ]
}
