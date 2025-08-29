// fn3.js
// Arrow Function(화살표 함수)

const sum = (n1, n2) => {
    console.log('sum메소드 호출!!');
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
    return;
}

// const sum = (n1, n2) => n1 + n2;

const result = sum(10, 30);
// const result = undefined;
console.log('result: ', result);

// 생략 가능한 것: return, 중괄호 {}, 소괄호 ()
// 1. parameter 1개일 때 () 생략 가능
const abs = val => {
    return val < 0 ? -val : val;
}
console.log('abs: ', abs(-10));
console.log('abs: ', abs(11));

// 2. 코드가 1줄일 때 {} 생략 가능
const abs2 = val => console.log('(2) val:', val < 0 ? -val : val);
abs2(-11);
abs2(3);

// 3. 코드가 1줄일 때 ( {}도 없어야 함 )
const abs3 = val => val < 0 ? -val : val;
console.log('abs3: ', abs3(-10));
console.log('abs3: ', abs3(11));