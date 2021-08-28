# watermark
> Watermark use nodejs.

## installation
```shell
npm install @jswork/watermark
```

## usage
```js
import watermark from '@jswork/watermark';

watermark({
  src: 'https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg',
  cover: './__tests__/beta_s.png',
  gravity: 'northwest'
}).then((res) => {
  // res: buffer
});
```