(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var base64 = global.base64 || require('base-64');
  var supportEncode = 'btoa' in window;
  var supportDecode = 'atob' in window;

  var NxBase64 = nx.declare('nx.Base64', {
    statics: {
      init: function() {
        this.encode();
        this.decode();
      },
      encode: function() {
        this.encode = supportEncode
          ? function(inValue) {
              return global.btoa(inValue);
            }
          : function(inValue) {
              return base64.encode(inValue);
            };
      },
      decode: function() {
        this.decode = supportDecode
          ? function(inValue) {
              return global.atob(inValue);
            }
          : function(inValue) {
              return base64.decode(inValue);
            };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxBase64;
  }
})();
