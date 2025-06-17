// promise.js
// ES5 생성자 함수 호출, 인자로 콜백함수를 보냄
// 콜백함수의 파라미터는 2개.
// 파라미터명은 아무거나 해도 상관 없으나
// 보통 resolve, reject로 함
// resolve - 콜백함수 (함수 주소값)
// reject - 콜백함수 (함수 주소값)
// 함수 주소값을 알면 호출할 수 있다.

const p = new Promise( (resolve, reject) => {
// resolve - 성공시 호출
// reject - 실패시 호출
// resolve('성공', 'ABC'); // '성공'만 출력. then 메소드 콜백함수 호출
// reject('실패'); // catch 메소드 콜백함수 호출
});

p.then( item => {
    console.log('then: ', item);
})
 .catch( item => {
    console.log('catch: ', item);
 });
 // resolve 콜백 파라미터(1개) 들어감