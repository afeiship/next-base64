(function() {
  var nx = require('next-js-core2');
  var NxBase64 = require('../src/next-base64');

  describe('nx.Base64-encode', function() {
    test('encode - commons', function() {
      const encode_str = NxBase64.encode('afei');
      expect(encode_str).toBe('YWZlaQ==');
    });

    test('encode-ZH_CN', function() {
      const encode_str = NxBase64.encode('中文');
      expect(encode_str).toBe('5Lit5paH');
    });
  });

  describe('nx.Base64-decode', function() {
    test('decode-common', function() {
      const decode_str = NxBase64.decode('YWZlaQ==');
      expect(decode_str).toBe('afei');
    });

    test('decode-ZH_CN', function() {
      const encode_str = NxBase64.decode('5Lit5paH');
      expect(encode_str).toBe('中文');
    });
  });
})();
