/**
 * This file is part of node-host-validator
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const _ = require('lodash');
const {HostValidatorExpressions} = require('./host-validator-expressions');

/**
 * {HostValidator} class.
 *
 * @class
 * @public
 */
class HostValidator {

  /**
   *
   *
   * @param value {string} - A host: an IPv4 address, an IPv6 address or a hostname.
   * @param type {null|HostType} - An optional host type.
   * @returns {HostValidator} - An instance of {HostValidator}.
   * @constructor
   * @public
   */
  constructor(value, type) {
    if (_.isString(value) === false) {
      throw new TypeError(`Parameter <value> must be of type {string}. Founded: ${value}`);
    }
    this.value = value;
    this.type = type;
  }

  /**
   * Set host type as IPv4.
   *
   * @returns {HostValidator}
   */
  ipv4() {
    this.validator = HostValidatorExpressions.ipv4;
    return this;
  }

  /**
   * Set host type as IPv6.
   *
   * @returns {HostValidator}
   */
  ipv6() {
    this.validator = HostValidatorExpressions.ipv6;
    return this;
  }

  /**
   * Set host type as a hostname (RFC 1123).
   *
   * @returns {HostValidator}
   */
  hostnameRFC1123() {
    this.validator = HostValidatorExpressions.hostnameRFC1123;
    return this;
  }

  /**
   * Set host type as a hostname (RFC 1123).
   *
   * @returns {HostValidator}
   * @alias hostnameRFC1123
   */
  hostname() {
    return this.hostnameRFC1123();
  }

  promise() {
    this.usePromise = true;
    return this;
  }

  /**
   * Validate host for the passed type.
   *
   * @param hostValue {string}
   * @param hostType {string}
   * @returns {boolean}
   */
  static validateHostForType(hostValue, validator) {
    //console.log(validator, typeof validator)
    return validator.test(hostValue);
  }

  /**
   * Validate the host formatting.
   *
   * @returns {boolean}
   */
  validate() {
    if (!this.validator) {
      return this.determinate();
    }
    return HostValidator.validateHostForType(this.value, this.validator);
  }

  /**
   * Determinate type of host if not provided.
   *
   * @returns {boolean}
   */
  determinate() {
    for (let validator of HostValidatorExpressions.validators) {
      if (HostValidator.validateHostForType(this.value, HostValidatorExpressions.get(validator)) === true) {
        return true;
      }
    }
    return false;
  }
}


/**
 * A function factory for {HostValidator} class.
 *
 * @function
 * @public
 */
function hostValidator(hostValue, hostType) {
  return new HostValidator(hostValue, hostType);
}

module.exports = {};
module.exports.HostValidator = HostValidator;
module.exports.hostValidator = hostValidator;
