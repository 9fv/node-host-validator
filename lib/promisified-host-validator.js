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
   *
   * @param value
   * @param type
   * @constructor
   * @public
   */
  constructor(value, type) {
    super(value, type);
  }

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
