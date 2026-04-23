import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

const urls = [
  // hero + stats icons (section 1)
  'https://qonto.com/blog/images/asset/33676/image/lg_avif-ec8159574be8a51cd9c7b67204fa045a.avif',
  'https://qonto.com/blog/images/asset/33677/image/lg_avif-f30083a4971eac9ed406f5420388ac42.avif',
  'https://qonto.com/blog/images/asset/33678/image/lg_avif-2ef926a82f47b91dad6c688c36fcedb3.avif',
  'https://qonto.com/blog/images/asset/33679/image/lg_avif-8ff0e3941ee77db5ad0ff3fd36962de3.avif',
  'https://qonto.com/blog/images/asset/33680/image/lg_avif-2898d9a7b84ef7f5b3c2e3945c2afc13.avif',
  'https://qonto.com/blog/images/asset/33681/image/lg_avif-81f349c22ef1f7fa5d0f4a347d549b5a.avif',
  // founders + various
  'https://qonto.com/blog/images/asset/33673/image/lg_avif-b8fd9a64f033854853f190be1b677cce.avif',
  'https://qonto.com/blog/images/asset/33675/image/lg_avif-83c1914b666d0fb534aeba75a1e6d3fa.avif',
  'https://qonto.com/blog/images/asset/33621/image/lg_avif-64c59d7e34ef8ad2cd3c277a7d189539.avif',
  'https://qonto.com/blog/images/asset/33623/image/lg_avif-09acf18feebf318342eb66f071588bee.avif',
  'https://qonto.com/blog/images/asset/33672/image/35e22ac359ea12446cd06b37bafadfc7.jpg',
  'https://qonto.com/blog/images/asset/33406/image/lg_avif-c662b4a618e99a207840059d70fb11c8.avif',
  'https://qonto.com/blog/images/asset/33407/image/lg_avif-fbec6d67b9e8108d3ea525bb82781e55.avif',
  'https://qonto.com/blog/images/asset/33365/image/lg_avif-0ec2489834f9f72c6255e09b1c555a2d.avif',
  // timeline DATEV
  'https://qonto.com/blog/images/asset/33544/image/8de73d770b0dad5f8e4906907c73345a.svg',
  // investor logos
  'https://qonto.com/blog/images/asset/8698/image/8fda4672e908029394a4361f246f81df.svg',
  'https://qonto.com/blog/images/asset/8699/image/cc5861e67a5f942c8360028547c36ec9.svg',
  'https://qonto.com/blog/images/asset/8701/image/76b3fd2728636419fca9020f5596d69d.svg',
  'https://qonto.com/blog/images/asset/8702/image/d83eb11cc336e9d7e9b680859e193cae.svg',
  'https://qonto.com/blog/images/asset/8703/image/6083213f4ad7931c29e097de9114e672.svg',
  'https://qonto.com/blog/images/asset/8704/image/94d2d59fe48f8f5e0249d08d254d66b0.svg',
  'https://qonto.com/blog/images/asset/8705/image/784c3c5e919588801012d5d81c80a279.svg',
  'https://qonto.com/blog/images/asset/8722/image/947ea93b3a897bb9b9ac21093bbe8819.svg',
  'https://qonto.com/blog/images/asset/4416/image/e721d2e6e9f4364e2cfb2c77211044b3.svg',
  'https://qonto.com/blog/images/asset/4567/image/cc23878469d051bc2d9adf983c14af33.svg',
  'https://qonto.com/blog/images/asset/27326/image/e457d34c54dd4f66edc5709e1b56548d.svg',
  'https://qonto.com/blog/images/asset/27327/image/dce71827939f3fff2ccf1975fc42b6a9.svg',
  // customer video
  'https://qonto.com/blog/images/cg%20-%20website%20customers%20horizontal.mp4',
];

function slug(u) {
  const m = u.match(/asset\/(\d+)\/image\/(?:lg_avif-)?([a-f0-9]+)\.([a-z0-9]+)/);
  if (m) return `about-${m[1]}-${m[2].slice(-10)}.${m[3]}`;
  const last = u.split('/').pop().split('?')[0];
  return `about-${last}`;
}

for (const u of urls) {
  const out = 'public/images/' + slug(u);
  if (fs.existsSync(out)) { console.log('skip', out); continue; }
  try {
    const res = await fetch(u);
    if (!res.ok) { console.log('err', res.status, u); continue; }
    await pipeline(res.body, fs.createWriteStream(out));
    console.log('saved', out, fs.statSync(out).size);
  } catch (e) { console.log('fail', u, e.message); }
}

// video to /videos
const vurl = 'https://qonto.com/blog/images/cg%20-%20website%20customers%20horizontal.mp4';
const vout = 'public/videos/about-customers.mp4';
if (!fs.existsSync(vout)) {
  const res = await fetch(vurl);
  await pipeline(res.body, fs.createWriteStream(vout));
  console.log('saved', vout, fs.statSync(vout).size);
}
