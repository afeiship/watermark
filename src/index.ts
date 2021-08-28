import sharp from 'sharp';
import NxFsOpen from '@jswork/next-fs-open';

interface Options {
  /**
   * 需要打水印的图片
   */
  src: string;
  /**
   * 水印图片
   */
  cover: string;
  /**
   * 生成后的图片路径
   */
  dst?: string;
  /**
   * 水印的位置
   */
  gravity?: sharp.Gravity;
}

export default async (inOptions: Options): Promise<Buffer> => {
  const { src, cover, gravity } = inOptions;
  const buf = await NxFsOpen.from(src);
  return sharp(buf)
    .composite([{ input: cover, gravity }])
    .toBuffer();
};
