import fs from 'node:fs/promises';

async function read(file) {
  try {
    const data = await fs.readFile(file, 'utf-8');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

read('./example.txt');
