const sum = function (n1, n2) {
  console.log("함수호출!!");
  return n1 + n2;
};
// return 생략 불가능하고 값을 보내줘야 함
console.log("return함수", sum(10, 20)); // return함수 = 30

const copySum = sum;
const result = copySum(10, 20);
console.log("result: ", result);
