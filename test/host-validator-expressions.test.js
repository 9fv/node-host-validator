/**
 * This file is part of node-host-validator
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const should = require('should'); // eslint-disable-line no-unused-vars

const {HostValidatorExpressions} = require('../lib/host-validator-expressions');

describe('Base unit testing for [class=HostValidatorExpressions]', () => {
  it('should be a function', () => {
    (HostValidatorExpressions).should.be.a.Function();
  });

});

describe('List of validators', () => {
  it('should be an instance of array', () => {
    (HostValidatorExpressions.validators).should.be.an.Array();
  });

  it('should have a length === 3', () => {
    (HostValidatorExpressions.validators).should.have.length(3);
  });

  describe('for each value of validators list, HostValidatorExpressions', () => {
    for (let i = 0, l = HostValidatorExpressions.validators.length; i < l; i += 1) {
      ((n) => {

        const getterName = HostValidatorExpressions.validators[n];

        it(`should have an attribute named <${getterName}>`, () => {
          Reflect.get(HostValidatorExpressions, getterName).should.be.not.null();
        });

        it(`should have an static getter named <${getterName}>, returning a {RegExp} object`, () => {
          Reflect.get(HostValidatorExpressions, getterName).should.be.instanceOf(RegExp);
        });

      })(i);
    }
  });
});
