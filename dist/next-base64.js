/*!
 * name: next-base64
 * url: https://github.com/afeiship/next-base64
 * version: 1.0.0
 * date: 2019-09-11T01:21:48.385Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var base64 = global.Base64 || require('js-base64').Base64;

  var NxBase64 = nx.declare('nx.Base64', {
    statics: {
      encode: function(inValue) {
        return base64.encode(inValue);
      },
      decode: function(inValue) {
        return base64.decode(inValue);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxBase64;
  }
})();

//# sourceMappingURL=next-base64.js.map
