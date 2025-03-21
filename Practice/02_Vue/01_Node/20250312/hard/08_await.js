async function init() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json(); // 비동기
    console.log(result);
  } catch (error) {
    console.error(err);
  }
}

init();
