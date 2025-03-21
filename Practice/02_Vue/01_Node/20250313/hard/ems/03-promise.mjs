// import fs from 'node:fs'
// fs.promises.readdir

import fs from 'node:fs/promises'; // 반환형이 Promise

async function getDirectories() {
  try {
    const result = await fs.readdir('./'); // Promise 반환
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getDirectories(); // 호출
