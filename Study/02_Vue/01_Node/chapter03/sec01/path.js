const path = require('path');

// 경로 연결하기
const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);

// 절대 경로
console.log(`파일 절대 경로: ${$__filename}`);

// 경로 추출하기
const dir = path.dirname(__filename);
console.log(`경로만: ${dir}`);

// 경로 분해하기
const parsedPath = path.parse(__dirname);
console.log(parsedPath);
