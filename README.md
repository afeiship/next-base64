# next-base64
> Base64 for browerjs

## install:
```shell
npm install -S afeiship/next-base64 --registry=https://registry.npm.taobao.org
```

## usage:
```js
import NxBase64 from 'next-base64';

const encode_str = NxBase64.encode('afei');
// YWZlaQ==
const decode_str = NxBase64.decode(encode_str);
// afei
```

## todos:
- [x] Add str b64 solution (base64-js)

## resources:
+ https://github.com/dankogai/js-base64
+ http://www.cnblogs.com/linsx/p/9255870.html
