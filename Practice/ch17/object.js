const person1 = {
  name: "김철수",
  age: 25,
  married: false,
  // key : value
};

console.log(typeof person1);
// typeof는 상수가 가리키는 타입이 무엇인지 알려주는 것(객체)
// java에서는 new로 처리
console.log(person1.age);

console.log(person1.name);
// 객체에서 접근할 때 "."을 사용
console.log((person1.age = 30));
person1.age = 30;

console.log("person1.age", person1.age);
console.log("person1['age'])", person1["age"]);
// javascript는 "." "[]" 둘다 접근 가능
// java는 "[]" 만 가능

person1.job = "programmer";
person1["bloodtype"] = "O";
console.log(person1);
// javascript는 중간에 내용 추가 가능
// person1(주소값)이 상수, name, age, married, job은 변수
// const가 아닌 let으로 변경하였을 경우 변경 가능
