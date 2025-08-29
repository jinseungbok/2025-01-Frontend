function sum(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

sum(10, 20); // 10 + 20 = 30

const fn1 = sum;
fn1(20, 30); // 20 + 30 = 50

// sum = 10;
// console.log(sum); // 10

const div = function (n1, n2) {
  console.log(`${n1} / ${n2} = ${n1 / n2}`);
};

// sum 함수가 덮어씌워졌기 때문에 재정의
function sum(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

const calc = function (cb, n1, n2) {
  cb(n1, n2);
};

calc(sum, 10, 20); // 10 + 20 = 30
calc(div, 10, 2); // 10 / 2 = 5
calc(
  function (n1, n2) {
    console.log(n1 * n2);
  },
  30,
  2
); // 60

// calc(1, 2, 3);

const findMax = (n1, n2) => console.log(n1 > n2 ? n1 : n2);
// calc 호출하여 calc(fn, 10, 20); 더 큰 수가 콘솔에 출력
// calc((n1, n2) => console.log(n1 > n2 ? n1 : n2), 10, 20); // 20
calc(findMax, 10, 20);
calc(findMax, 70, 20);
