import sharp from 'sharp';

export default async (src, cover): Promise<sharp.Sharp> => {
  const srcBuf = await sharp(src);
  const coverBuf = await sharp(cover);
  const srcMeta = await srcBuf.metadata();
  const coverMeta = await coverBuf.metadata();
  if (srcMeta.width! <= coverMeta.width!) {
    return await sharp(cover).resize(srcMeta.width);
  }
  if (srcMeta.width! > coverMeta.width! * 2) {
    const _width = Math.floor(srcMeta.width! * 0.5);
    return await sharp(cover).resize(_width);
  }
  return coverBuf;
};
