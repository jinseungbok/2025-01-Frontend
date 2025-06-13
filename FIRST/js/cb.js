function sum(n1, n2) {
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

sum(10, 20);

const fn1 = sum;
fn1(20, 30);

sum = 10;
console.log(sum);

const div = function(n1, n2) {
    console.log(`${n1} / ${n2} = ${n1 / n2}`);
}
function sum(n1, n2) {
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
}
const calc = function(cb, n1, n2) {
    cb(n1, n2);
}
calc(sum, 10, 20);
calc(div, 10, 2);
calc(function(n1, n2) {
    console.log(n1 * n2);
}, 30, 2);