const arr = [ 10, 20, 30, 40, 50];
console.log('length', arr.length);
arr.forEach(function(item, idx) {
    console.log(`item: ${item}, idx: ${idx}`);
});

// forEach 이용하여 Arr 모든 값들을 더한 결과값 출력
// [1] for 문
let sum = 0;
for(let i=0; i<arr.length; i++) {
    const item = arr[i];
    sum += item;
}
console.log('sum: ', sum);

// [2-1] forEach 문
let sum2 = 0;
arr.forEach(item => sum2 += item);
console.log('sum2: ', sum2);

// [2-2] forEach 문
let sum3 = 0;
arr.forEach((item) => {
    sum3 += item;
})
console.log("sum3: ", sum3);

//array.forEach(Element => {
//    for(let i=0; i<this.length; i++) {
//        console.log(`item: ${item}`);
//    }    
// });


// 유사 배열(잘 안씀)
const myArr = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    4: 50,
    length: 5,
    forEach: function(cb) {
        for(let i=0; i<this.length; i++) {
            cb(this[i], i);
        }
    }
};
console.log('my-length', myArr.length);
myArr.forEach(function(item, idx) {
    console.log(`item: ${item}, idx: ${idx}`);
});