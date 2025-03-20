import order from './pizza_order.mjs'; // 모듈 재사용

async function main() {
  // 예외 처리 구문
  try {
    const fn = await order('치즈피자'); // order 가 돌아올 때까지 기다리겠다
  } catch (err) {
    // Promise 결과로 reject() 수행 시 예외 발생
    // -> catch 구문으로 잡아서 처리
    console.log('그런 메뉴는 업습니다.');
  }
}
