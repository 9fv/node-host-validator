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
const {HostValidator} = require('../lib/host-validator');
const {TEST_HOSTS} = require('./resources');

describe('Class named {HostValidator}', () => {
  it('should be a function', () => {
    (HostValidator).should.be.a.Function();
  });
});

describe('Instantiate a {HostValidator}', () => {
  it('passing a {null} value should throw a {TypeError}', () => {
    (() => {new HostValidator(null) }).should.throw(TypeError);
  });

  it('passing an {object} value should throw a {TypeError}', () => {
    (() => {new HostValidator({}) }).should.throw(TypeError);
  });
});

itLoop('Instance type ', Object.keys(TEST_HOSTS), [
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
]);


Object.keys(TEST_HOSTS).forEach((hostType) => {
  itLoop(`Instance type after specifying ${hostType} type`, Object.keys(TEST_HOSTS), [
    (item) => {
      return {
        label: `should be {HostValidator} when passing a valid ${item.toLowerCase()}`,
        test: () => {
          const hostValidator = new HostValidator(TEST_HOSTS[item].OK);
          return (hostValidator[hostType].apply(hostValidator)).should.be.an.instanceOf(HostValidator)
        }
      }
    },
    (item) => {
      return {
        label: `should be {HostValidator} when passing an invalid ${item.toLowerCase()}`,
        test: () => {
          const hostValidator = new HostValidator(TEST_HOSTS[item].KO);
          return (hostValidator[hostType].apply(hostValidator)).should.be.an.instanceOf(HostValidator)
        }
      }
    },
  ]);
});


Object.keys(TEST_HOSTS).forEach((hostType) => {
  itLoop(`Validation using type ${hostType}`, Object.keys(TEST_HOSTS), [
    (item) => {
      return {
        label: hostType === item ? `should be {true} when passing a valid ${item}` : `should be {false} when passing a valid ${item}`,
        test: () => {
          const hostValidator = new HostValidator(TEST_HOSTS[item].OK);
          const result = hostValidator[hostType].apply(hostValidator).validate();
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
          const hostValidator = new HostValidator(TEST_HOSTS[item].KO);
          const result = hostValidator[hostType].apply(hostValidator).validate();
          if (hostType === item) {
            return (result).should.be.true();
          } else {
            return (result).should.be.false();
          }
        }
      }
    }
  ]);
});
