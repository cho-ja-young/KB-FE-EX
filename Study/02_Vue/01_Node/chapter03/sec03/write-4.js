fs = require('fs');

fs.readFile('./example.txt', 'utf8', (err, data) => {
  // 1)
  if (err) {
    console.log(err);
  }

  fs.writeFile('./text 2.txt', data, (err) => {
    // 2)
    if (err) {
      console.log(err);
    }
    console.log('text-2.txt is saved!'); // 비동기 3)
  });
});
