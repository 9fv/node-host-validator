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

describe('Validate host using specified validator: ', () => {
  it('valid ipv4 should return true', () => {
    (new HostValidator(TEST_HOSTS.ipv4.OK).ipv4().validate()).should.be.true();
  });
  it('valid ipv6 should return true', () => {
    (new HostValidator(TEST_HOSTS.ipv6.OK).ipv6().validate()).should.be.true();
  });
  it('valid hostnameRFC1123 should return true', () => {
    (new HostValidator(TEST_HOSTS.hostname.OK).hostnameRFC1123().validate()).should.be.true();
  });
  it('valid hostname should return true', () => {
    (new HostValidator(TEST_HOSTS.hostname.OK).hostname().validate()).should.be.true();
  });
});

describe('Validate host using specified validator: ', () => {
  it('invalid ipv4 should return false', () => {
    (new HostValidator(TEST_HOSTS.ipv4.KO).ipv4().validate()).should.be.false();
  });
  it('invalid ipv6 should return false', () => {
    (new HostValidator(TEST_HOSTS.ipv6.KO).ipv6().validate()).should.be.false();
  });
  it('invalid hostnameRFC1123 should return false', () => {
    (new HostValidator(TEST_HOSTS.hostname.KO).hostnameRFC1123().validate()).should.be.false();
  });
  it('invalid hostname should return false', () => {
    (new HostValidator(TEST_HOSTS.hostname.KO).hostname().validate()).should.be.false();
  });
});


describe('Determinate host validator from ', () => {
  it('ipv4 should return ipv4', () => {
    (new HostValidator(TEST_HOSTS.ipv4.OK).determinate().validator).should.be.equals('ipv4');
  });
  it('ipv6 should return ipv6', () => {
    (new HostValidator(TEST_HOSTS.ipv6.OK).determinate().validator).should.be.equals('ipv6');
  });
  it('hostnameRFC1123 should return hostnameRFC1123', () => {
    (new HostValidator(TEST_HOSTS.hostname.OK).determinate().validator).should.be.equals('hostnameRFC1123');
  });
  it('ipv4 should return ipv4', () => {
    (new HostValidator(TEST_HOSTS.ipv4.OK).determinate().validator).should.be.equals('ipv4');
  });
  it('undeterminable should throw a {TypeError}', () => {
    (() => { new HostValidator(TEST_HOSTS.none.KO).determinate(); }).should.throw(TypeError);
  });
})

describe('Validate without specified validator', () => {
  it('ipv4 should return ipv4', () => {
    (new HostValidator(TEST_HOSTS.ipv4.OK).validate().validator).should.be.equals('ipv4');
  });
  it('ipv6 should return ipv6', () => {
    (new HostValidator(TEST_HOSTS.ipv6.OK).validate().validator).should.be.equals('ipv6');
  });
  it('hostnameRFC1123 should return hostnameRFC1123', () => {
    (new HostValidator(TEST_HOSTS.hostname.OK).validate().validator).should.be.equals('hostnameRFC1123');
  });
  it('ipv4 should return ipv4', () => {
    (new HostValidator(TEST_HOSTS.ipv4.OK).determinate().validator).should.be.equals('ipv4');
  });
  it('undeterminable should throw a {TypeError}', () => {
    (() => { new HostValidator(TEST_HOSTS.none.KO).validate() }).should.throw(TypeError);
  });
});
