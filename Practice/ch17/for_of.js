// java에는 없는 개념
// 배열에 사용
const myArray = ["A", "B", "C", "D"];

console.log("Array.isArray(myArray)", Array.isArray(myArray));
// 배열이 맞다면 true

for (const item of myArray) {
  console.log(item);
}
// for - of는 collection만 됨 ';(세미클론)' 없음

// 유사 배열
const myArray2 = {
  0: "가",
  1: "나",
  2: "다",
  3: "라",
  length: 4,
};
for(let i=0; i<myArray2.length; i++) {
    console.log('for', myArray2[i]);
}
// for 문을 사용하면 돌릴 수 있다.
const myArray2Iterable = Array.from(myArray2);
// 유사 배열을 진짜 배열로 만듬

// 에러 발생 myArray2 is not iterable 
// iterable = 반복 가능한 객체
// for(const item of myArray2) {
//     console.log(item);
// }
for (const item of myArray2Iterable) {
  console.log(item);
}
// java로 따지면 향상된 for 문