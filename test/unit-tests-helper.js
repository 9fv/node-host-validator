/**
 * This file is part of node-host-validator
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const _ = require('lodash');


(function (global) {
  function itLoop(arr = [], fns = []) {
    return () => {
      arr.forEach((item) => {
        for (let i = 0; i < fns.length; i += 1) {
          const fn = fns[i](item);
          const {label, test} = fn;
          let func;
          if ((_.isObject(test) === true)) {
            func = () => {
              return () => {
                return test;
              }
            }
          } else {
            func = () => {
              return test.call();
            };
          }
          it(label, func.call());
        }
      });
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {itLoop: itLoop};
  } else if (typeof define === 'function' && define.amd) {
    define('itLoop', [], function () {
      return {itLoop: itLoop()};
    });
  } else {
    global.itLoop = itLoop;
  }

})(this);

