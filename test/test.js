(function() {
  var assert = require('assert');
  var nx = require('next-js-core2');
  var NxBase64 = require('../src/next-base64');

  describe('nx.Base64', function() {
    it('encode', function() {
      const encode_str = NxBase64.encode('afei');
      assert.equal(encode_str, 'YWZlaQ==');
    });

    it('decode', function() {
      const decode_str = NxBase64.decode('YWZlaQ==');
      assert.equal(decode_str, 'afei');
    });
  });
})();
