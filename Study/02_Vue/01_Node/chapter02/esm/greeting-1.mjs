/* export */ const hi = (name) => {
  console.log(`${name}님, 안녕하세요?`);
};

/* export */ const goodbye = (name) => {
  console.log(`${name}님, 안녕히가세요.`);
};

export { hi, goodbye }; // 객체로 묶어서 export 가능
