/**
 * This file is part of node-host-validator
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const should = require('should'); // eslint-disable-line no-unused-vars
const {itLoop} = require('./unit-tests-helper');
const {HostValidator, hostValidator} = require('../lib/host-validator');
const {HostValidatorExpressions} = require('../lib/host-validator-expressions');
const {TEST_HOSTS} = require('./resources');

describe('Class named {HostValidator}', () => {
  it('should be a function', () => {
    (HostValidator).should.be.a.Function();
  });
});

describe('Factory function named {hostValidator}', () => {
  it('should be a function', () => {
    (hostValidator).should.be.a.Function();
  });
  it('should return an instance of {HostValidator} when calling', () => {
    (hostValidator(TEST_HOSTS.ipv4.OK)).should.be.an.instanceOf(HostValidator);
  });
});


describe('Instantiate a {HostValidator}', () => {
  it('passing a {null} value should throw a {TypeError}', () => {
    (() => {
      new HostValidator(null)
    }).should.throw(TypeError);
  });

  it('passing an {object} value should throw a {TypeError}', () => {
    (() => {
      new HostValidator({})
    }).should.throw(TypeError);
  });
});

describe('Instance type ',
  itLoop(Object.keys(TEST_HOSTS), [
    (item) => {
      return {
        label: `should be {HostValidator} when passing a valid ${item.toLowerCase()}`,
        test: (new HostValidator(TEST_HOSTS[item].OK)).should.be.an.instanceOf(HostValidator),
      }
    },
    (item) => {
      return {
        label: `should be {HostValidator} when passing an invalid ${item.toLowerCase()}`,
        test: (new HostValidator(TEST_HOSTS[item].KO)).should.be.an.instanceOf(HostValidator),
      }
    },
  ]));


Object.keys(TEST_HOSTS).forEach((hostType) => {
  describe(`Instance type after specifying ${hostType} type`,
    itLoop(Object.keys(TEST_HOSTS), [
      (item) => {
        return {
          label: `should be {HostValidator} when passing a valid ${item.toLowerCase()}`,
          test: () => {
            const v = new HostValidator(TEST_HOSTS[item].OK);
            return (() => {
              return v[hostType].apply(v);
            }).should.be.an.instanceOf(HostValidator)
          }
        }
      },
      (item) => {
        return {
          label: `should be {HostValidator} when passing an invalid ${item.toLowerCase()}`,
          test: () => {
            const v = new HostValidator(TEST_HOSTS[item].KO);
            return (v[hostType].apply(v)).should.be.an.instanceOf(HostValidator)
          }
        }
      },
    ]));
});

Object.keys(TEST_HOSTS).forEach((hostType) => {
  describe(`Validation using type ${hostType}`,
    itLoop(Object.keys(TEST_HOSTS), [
      (item) => {
        return {
          label: hostType === item ? `should be {true} when passing a valid ${item}` : `should be {false} when passing a valid ${item}`,
          test: () => {
            const v = new HostValidator(TEST_HOSTS[item].OK);
            const result = v[hostType].apply(v).validate();
            if (hostType === item) {
              return (result).should.be.true();
            } else {
              return (result).should.be.false();
            }
          }
        }
      },
      (item) => {
        return {
          label: hostType === item ? `should be {true} when passing an invalid ${item}` : `should be {false} when passing an invalid ${item}`,
          test: () => {
            const v = new HostValidator(TEST_HOSTS[item].KO);
            const result = v[hostType].apply(v).validate();
            if (hostType === item) {
              return (result).should.be.true();
            } else {
              return (result).should.be.false();
            }
          }
        }
      }
    ]));
});

Object.keys(TEST_HOSTS).forEach((hostType) => {
  describe(`Determinate type of ${hostType}`,
    itLoop(Object.keys(TEST_HOSTS), [
      (item) => {
        return {
          label: hostType === item ? `should be {true} when passing a valid ${item}` : `should be {false} when passing a valid ${item}`,
          test: () => {
            const v = new HostValidator(TEST_HOSTS[item].OK);
            const result = v[hostType].apply(v).determinate();
            //if (hostType === item) {
            return (result.validator).should.be.equals(hostType);
            //} else {
            //return (result).should.be.false();
            //}
          }
        }
      },
    ]))
});
