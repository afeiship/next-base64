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
