const myArray = [true, 3.14, "HELLO", { name: "홍길동" }];

console.log('myArray', myArray);
console.log('myArray.length', myArray.length);
// javascript는 type 지정이 안됨. 하고 싶다면 typescript 사용
// 결국 javascript로 바뀜.

// 2번 방에 있는 데이터 읽어 와서 콘솔에 출력
console.log('myArray[2]', myArray[2]);
console.log("myArray['2']", myArray['2']);

console.log('typeof myArray', typeof myArray);
// javascript는 배열을 구현한 것.

myArray[4] = '홍길동';
console.log('myArray', myArray);
console.log('myArray.length', myArray.length);

// 5번 방에 넣지 않고 6번 방에 넣었을 경우 2자리가 들어가나 1자리는 empty=undefined
myArray[6] = '신사임당';
console.log('myArray', myArray);
console.log('myArray.length', myArray.length);
console.log('myArray[5]', myArray[5]);
// console.log('myArray.5', myArray.5); 숫자 속성은 . 접근 불가. []로만 가능

// 배열에 item 추가시 push method 활용
const myArray2 = [];
console.log('myArray.length', myArray2.length); // 0
// push로 데이터 값을 추가할 수 있음

myArray2.push('안녕');
myArray2.push('3.14');
myArray2.push('true');
myArray2.push('false');
myArray2.push( {age: 12} );

console.log('myArray2', myArray2);
console.log('myArray.length', myArray2.length);

console.log('마지막 요소 제거');
const pop = myArray2.pop(); // 무조건 마지막 요소 제거 출력, 파괴 메소드
// 호출 때마다 뒤에서부터 1개씩 제거함
console.log('pop', pop); // 제거된 값을 뱉어냄
console.log('myArray2', myArray2);
console.log('myArray.length', myArray2.length);

console.log('1번 방부터 1개 아이템 제거');
myArray2.splice(1, 1); // 1번방에서부터 1번 하나만 없애고 싶다.
console.log('myArray2', myArray2);
console.log('myArray.length', myArray2.length); // 안녕, true, false, 3.14 제거