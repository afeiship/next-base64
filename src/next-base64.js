(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxBase64 = nx.declare('nx.Base64', {
    statics: {
      encode: function (inValue) {
        return global.btoa(inValue);
      },
      decode: function (inValue) {
        return global.atob(inValue);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxBase64;
  }

}());
