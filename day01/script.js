const $screen = document.querySelector("#screen");
const $toggleButton = document.querySelector("#button");
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log("screen:", $screen);
console.log("toggleButten:", $toggleButton);

if ($screen && $toggleButton) {
  // 첫 번째 아규먼트(인자) : 문자열(이벤트 이름)
  // 두 번째 아규먼트(인자) : 함수 주소값 >> 콜백함수
  function clickBtn() {
    alert("하하");
  }
  const cb = clickBtn;
  clickBtn();

  // $toggleButton.addEventListener("click", clickBtn);
  // $toggleButton.addEventListener("click", function () {
  // alert("호호");
  // });
  $toggleButton.addEventListener("click", () => {
    stopWatchOn = !stopWatchOn;
    console.log("stopWatchOn: ", stopWatchOn);
  });
}
