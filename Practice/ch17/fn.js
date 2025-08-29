// fn,js
// 함수

//es5 문법
// java method 4요소 = return type, method name, parameter, method body({})
// javascript method 3요소 = method name, parameter, ,method body({})
// javascript에서는 함수도 1급 객체. 즉, 함수명에 함수 객체 주소값이 저장됨
// javsscript에서 함수 호출은 함수 주소값 소괄호
function sum(n1, n2) {
  console.log('sum메소드 호출!!');
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
  // return; 키워드는 자동으로 들어감
}

console.log('void함수', sum(10, 20)); // void함수 = undefined

sum(1, 2);

const copySum = sum;
copySum(1,2);

console.log('sum === copySum', sum === copySum);