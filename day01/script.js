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
    //  alert("하하");
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
    $toggleButton.innerText = stopWatchOn ? "■" : "▶";
    //$toggleButton.style.backgroundColor = stopWatchOn ? "tomato" : "steelblue";
    $toggleButton.classList.toggle("stop-color");
    // 뒤에 소괄호 ()가 따라오면 Method
    if (stopWatchOn) {
      //첫 번째 인자 : 콜백함수
      //두 번째 인자 : number - ms
      timeInterval = setInterval(() => {
        /*
        1초 > 100
        1분 > 60초 > 6000
        */
        seconds++;
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, "0");
        const ss = String(Math.floor(seconds / 100) % 60).padStart(2, "0");
        // Math.floor 값 내림, Math.round 값 올림, Math.ceil 값 무시하고 올림 => 실수는 모두 제거 처리
        const cs = String(seconds % 100).padStart(2, "0");
        $screen.innerText = `${mm}:${ss}:${cs}`;
        // floor : 내림 처리
      }, 10);
    } else {
      clearInterval(timeInterval);
      seconds = 0;
      $screen.innerText = "00:00:00";
    }
  });
}
