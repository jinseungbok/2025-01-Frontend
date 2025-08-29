function sum(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

const calc = function(cb, n1, n2) {
    const result = cb(n1, n2);
    console.log('결과: ', result);
}

calc(sum, 10, 20); // 콘솔에 30 출력
calc(sub, 20, 12); // 콘솔에 8 출력

// const sum = sum(`${n1} + ${n2}`);
// console.log("결과: " + sum + "");
// function () => console.log(`${n1} + ${n2} = ${n1 + n2}`);