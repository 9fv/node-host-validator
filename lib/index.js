/**
 * This file is part of node-host-validator
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */


const {HostValidator, hostValidator} = require('./host-validator');
const {HostValidatorExpressions} = require('./host-validator-expressions');

module.exports = {};
module.exports.HostValidator = HostValidator;
module.exports.hostValidator = hostValidator;
module.exports.HostValidatorExpressions = HostValidatorExpressions;

