import sharp, { OverlayOptions } from 'sharp';
import NxFsOpen from '@jswork/next-fs-open';

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
  const { src, cover, gravity, ...options } = inOptions;
  const buf = await NxFsOpen.from(src);
  const input = await NxFsOpen.from(cover);
  return sharp(buf)
    .composite([{ input, gravity, ...options }])
    .toBuffer();
};
