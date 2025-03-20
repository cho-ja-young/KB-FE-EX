function displayA() {
  console.log('A');
}

function displayB() {
  setTimeout(() => {
    // 2초 후에 B 출력
    //
    console.log('B');
  }, 2000);
}

function displayC() {
  console.log('C');
}

displayA();
displayB();
displayC();
