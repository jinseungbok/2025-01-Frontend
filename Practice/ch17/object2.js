// object2.js
const person2 = {
    name: '김달순',
    age: 23,
    language: ['한국어', '영어', '프랑스어'],
    education: {
        school: '한국대',
        major: ['컴퓨터공학', '전자공학'],
        graduated: true
    }
};
// 배열 안에 객체, 객체 안에 배열 등등 활용 가능

// '전자공학' 읽어와서 출력
console.log(person2.education.major[1]);