// promise2.js

const p = new Promise( (resolve, reject) => {
// resolve - 성공시 호출
// reject - 실패시 호출
// resolve('성공', 'ABC'); // '성공'만 출력. then 메소드 콜백함수 호출
// reject('실패'); // catch 메소드 콜백함수 호출
    resolve('성공');
});

p.then( item => {
    console.log('then: ', item);
    return '두 번째'; // resolve('두 번째');
})
.then( item => {
    console.log('2 then: ', item);
})
//  then:  성공
//  2 then:  두 번째
 .catch( item => {
    console.log('catch: ', item);
 });