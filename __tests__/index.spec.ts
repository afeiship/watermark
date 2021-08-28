import weiboUpload from '@afeiship/weibo-picupload';
import fn from '../src';

jest.setTimeout(50 * 1000);

describe('api.basic', () => {
  test('Create water mark image', (done) => {
    fn({
      src: 'https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg',
      cover: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/dcec27cc6ece0eb5bb217e62e6bec104.svg',
      gravity: 'northwest'
    }).then((res) => {
      weiboUpload([res]).then((res2) => {
        console.log(res2);
        expect(res2.length).toBe(1);
        expect(res2[0].url.includes('https://tva1.sinaimg.cn')).toBe(true);
        done();
      });
    });
  });
});
