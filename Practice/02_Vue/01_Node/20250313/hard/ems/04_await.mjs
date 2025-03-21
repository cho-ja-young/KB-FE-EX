// import fs from 'node:fs'
// fs.promises.readdir

import fs from 'node:fs/promises'; // 반환형이 Promise

async function readDirAsyn() {
  try {
    const files = await fs.readdir('./'); // Promise 반환
    console.log(files);
  } catch (error) {
    console.log(error);
  }
}

readDirAsyn(); // 호출
