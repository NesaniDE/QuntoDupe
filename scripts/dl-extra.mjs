import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
const urls = [
  'https://qonto.com/blog/images/asset/33294/image/2d7204a11918d85d9a2583e5339e53fe.svg',
  'https://qonto.com/blog/images/asset/9896/image/c515c472255feed8717daf325d93b61b.jpg',
  'https://qonto.com/blog/images/asset/26236/image/c55db35c92e7f18fc4be53a083e29e72.jpg',
  'https://qonto.com/blog/images/asset/26191/image/1c8b84e99659e262e305a0efc8e6860b.jpg',
  'https://qonto.com/blog/images/asset/9511/image/70709654dc2bcedc932113a1c0fa9690.jpg',
  'https://qonto.com/blog/images/asset/12132/image/f2ca3e75a6a035d6ca63571f45c09895.jpg',
  'https://qonto.com/blog/images/asset/26195/image/7a432da10667436f3f6ab9eedb3091b7.jpg',
  'https://qonto.com/blog/images/asset/9508/image/a5b4cb23ad68d85372e0965f9a305e70.jpg',
  'https://qonto.com/blog/images/asset/10061/image/73f2e59a2c783a5e6ccb39083993b70c.jpg',
  'https://qonto.com/blog/images/asset/26255/image/9b5fb8d3a257b83cba862938e0899237.svg',
];
function slug(u) {
  const m = u.match(/asset\/(\d+)\/image\/(?:lg_avif-)?([a-f0-9]+)\.([a-z0-9]+)/);
  return `about-${m[1]}-${m[2].slice(-10)}.${m[3]}`;
}
for (const u of urls) {
  const out = 'public/images/' + slug(u);
  if (fs.existsSync(out)) continue;
  const res = await fetch(u);
  if (!res.ok) { console.log('err', u); continue; }
  await pipeline(res.body, fs.createWriteStream(out));
  console.log('saved', out);
}
