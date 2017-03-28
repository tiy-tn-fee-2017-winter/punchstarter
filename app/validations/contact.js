import { validateFormat, validatePresence } from 'ember-changeset-validations/validators';

export default {
  firstName: validatePresence(true),
  lastName: validatePresence(true),
  street: validatePresence(true),

  phone: [
    validatePresence(true),
    validateFormat({ type: 'phone' }),
  ],
};
