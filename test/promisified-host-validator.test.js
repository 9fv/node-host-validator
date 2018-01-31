/**
 * This file is part of node-host-validator
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const should = require('should'); // eslint-disable-line no-unused-vars
const {itLoopForPromise} = require('./unit-tests-helper');
const {PromisifiedHostValidator} = require('../lib/promisified-host-validator');
const {TEST_HOSTS} = require('./resources');

describe('Class named <PromisifiedHostValidator>', () => {
  it('should be a function', () => {
    (PromisifiedHostValidator).should.be.a.Function();
  });
});

itLoopForPromise('Instance type ', Object.keys(TEST_HOSTS), [
  (item) => {
    return {
      label: `should be {PromisifiedHostValidator} when passing a valid ${item.toLowerCase()}`,
      test: (new PromisifiedHostValidator(TEST_HOSTS[item].OK)).should.be.an.instanceOf(PromisifiedHostValidator),
    }
  },
  (item) => {
    return {
      label: `should be {PromisifiedHostValidator} when passing an invalid ${item.toLowerCase()}`,
      test: (new PromisifiedHostValidator(TEST_HOSTS[item].KO)).should.be.an.instanceOf(PromisifiedHostValidator),
    }
  },
]);


Object.keys(TEST_HOSTS).forEach((hostType) => {
  itLoopForPromise(`Instance type after specifying ${hostType} type`, Object.keys(TEST_HOSTS), [
    (item) => {
      return {
        label: `should be {PromisifiedHostValidator} when passing a valid ${item.toLowerCase()}`,
        test: () => {
          const hostValidator = new PromisifiedHostValidator(TEST_HOSTS[item].OK);
          return (hostValidator[hostType].apply(hostValidator)).should.be.an.instanceOf(PromisifiedHostValidator)
        }
      }
    },
    (item) => {
      return {
        label: `should be {PromisifiedHostValidator} when passing an invalid ${item.toLowerCase()}`,
        test: () => {
          const hostValidator = new PromisifiedHostValidator(TEST_HOSTS[item].KO);
          return (hostValidator[hostType].apply(hostValidator)).should.be.an.instanceOf(PromisifiedHostValidator)
        }
      }
    },
  ]);
});


Object.keys(TEST_HOSTS).forEach((hostType) => {
  itLoopForPromise(`Validation using type ${hostType}`, Object.keys(TEST_HOSTS), [
    (item) => {
      return {
        label: hostType === item ? `should be {true} when passing a valid ${item}` : `should be {false} when passing a valid ${item}`,
        test: () => {
          const hostValidator = new PromisifiedHostValidator(TEST_HOSTS[item].OK);
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
          const hostValidator = new PromisifiedHostValidator(TEST_HOSTS[item].KO);
          const result = hostValidator[hostType].apply(hostValidator).validate();
          if (hostType === item) {
            return (result).should.be.false();
          } else {
            return (result).should.be.false();
          }
        }
      }
    }
  ]);
});
