/**
 * This file is part of node-host-validator
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const {HostValidator} = require('./host-validator');

/**
 * A host validator returning promise.
 *
 * @extends {HostValidator}
 * @class
 */
class PromisifiedHostValidator extends HostValidator {

  /**
   * Create a new instance of {PromisifiedHostValidator}.
   *
   * @param value {string} - A host: an IPv4 address, an IPv6 address or a hostname.
   * @param type {null|HostType} - An optional host type.
   * @returns {PromisifiedHostValidator} - An instance of {PromisifiedHostValidator}.
   * @constructor
   * @public
   */
  constructor(value, type) {
    super(value, type);
  }

  /**
   * Validate the host formatting.
   *
   * @returns {Promise<PromisifiedHostValidator>} The {PromisifiedHostValidator} instance if the host formatting is correct.
   *   On error the promise will be rejected with a {TypeError}.
   */
  validate() {
    if (super.validate() === true) {
      Promise.resolve(this);
    } else {
      Promise.reject(new TypeError(`${this.value} is not a host`));
    }
  }
}

module.exports = {};
module.exports.PromisifiedHostValidator = PromisifiedHostValidator;
