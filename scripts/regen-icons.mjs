import sharp from "sharp";
import { writeFile } from "node:fs/promises";

// Source: pasted circular logo (white cube on black circle), 6251×6251
const SRC = "/Users/nedim/Downloads/Nesani_rund-25.png";

async function makePng(size, outPath) {
  const buf = await sharp(SRC)
    .resize(size, size, { fit: "contain", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(outPath, buf);
  console.log(`${outPath.padEnd(28)} ${(buf.length / 1024).toFixed(1)} KB`);
}

await makePng(16, "public/icon-16.png");
await makePng(32, "public/icon-32.png");
await makePng(180, "public/apple-icon.png");
await makePng(192, "public/icon-192.png");
await makePng(512, "public/icon-512.png");
