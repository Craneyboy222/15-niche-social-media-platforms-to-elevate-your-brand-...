/* Image utilities */

import sharp from 'sharp';

export async function resizeImage(buffer: Buffer, width: number, height: number): Promise<Buffer> {
  return await sharp(buffer)
    .resize(width, height)
    .toBuffer();
}

export async function convertToJPEG(buffer: Buffer): Promise<Buffer> {
  return await sharp(buffer)
    .jpeg()
    .toBuffer();
}