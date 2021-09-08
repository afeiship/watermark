import sharp, { OverlayOptions } from 'sharp';
import NxFsOpen from '@jswork/next-fs-open';
import resize from './resize';

interface Options extends OverlayOptions {
  /**
   * 需要打水印的图片
   */
  src: string;
  /**
   * 水印图片
   */
  cover: string;
  /**
   * 水印的位置
   */
  gravity?: sharp.Gravity;
}

export default async (inOptions: Options): Promise<Buffer> => {
  const { src, cover, ...options } = inOptions;
  const srcBuf = await NxFsOpen.from(src);
  const coverBuf = await NxFsOpen.from(cover);
  const resized = await resize(srcBuf, coverBuf);
  const resizedCover = await resized.toBuffer();

  return sharp(srcBuf)
    .composite([{ input: resizedCover, ...options }])
    .toBuffer();
};
