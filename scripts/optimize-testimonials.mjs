import { readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const DIR = "public/images/breit";
const files = (await readdir(DIR)).filter(
  (f) => extname(f).toLowerCase() === ".png" && /^portrait-/.test(f),
);

for (const f of files) {
  const src = join(DIR, f);
  const dst = join(DIR, basename(f, ".png") + ".webp");
  const before = (await stat(src)).size;
  await sharp(src).webp({ quality: 82, effort: 6 }).toFile(dst);
  const after = (await stat(dst)).size;
  console.log(
    `${f.padEnd(20)} ${(before / 1024).toFixed(0).padStart(5)} KB → ${(
      after / 1024
    )
      .toFixed(0)
      .padStart(5)} KB  (${((1 - after / before) * 100).toFixed(0)}% smaller)`,
  );
}
