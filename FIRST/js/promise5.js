// promise4.js
function fnA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("A");
      resolve("B");
    }, 3000);
  });
}

function fnB(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(item);
      resolve("C");
    }, 2000);
  });
}

function fnC(item) {
  setTimeout(() => {
    console.log(item);
  }, 2000);
}

fnA()
  .then((item) => fnB(item))
  .then((item) => fnC(item));

// then, catch를 사용하지 않고 async, await 활용하여 코딩 가능
// await를 사용하려면 async 함수에서만 사용할 수 있다.

// fnA().then( item => fnB(item))
//      .then( item => fnC(item));
// 위 아래 둘다 가능

async function start() {
  const item = await fnA();
  const item2 = await fnB(item);
  fnC(item2);
}
start();
