// async : await 를 포함한 함수, 결과로 promise 객체를 반환한다

async function init() {
  // fetch(주소) : 외부로부터 응답을 가져옴 (비동기)
  // await : 응답이 처리 될 때까지 대기 -> 동기로 변경
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // 아직 데이터를 다 가지고 오지도 않았는데, 다른 코드 실행해버리고 종료되면 안 되기 때문

  // response.ok :  응답 성공 시 true. 실패 시 false
  // undefined(정의 안 됨) -> response 가 존재하지 않음
  console.log(response.ok);

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }

  console.log('프로그램 종료');
}

init(); // 함수 호출
