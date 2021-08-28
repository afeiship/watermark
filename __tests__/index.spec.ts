import weiboUpload from '@afeiship/weibo-picupload';
import fn from '../src';

jest.setTimeout(50 * 1000);

describe('api.basic', () => {
  test('normail single value case', (done) => {
    fn({
      src: 'https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg',
      cover: './__tests__/beta_s.png',
      gravity: 'northwest'
    }).then((res) => {
      weiboUpload([res]).then((res2) => {
        console.log(res2);
        done();
      });
    });
  });
});
