<script setup>
const message = "There";
const messageObj = { name: "Kim", age: 20 };
console.log(messageObj);
console.log(messageObj.toString());
// console.log(messageObj) = { name: "Kim", age: 20 };
// console.log(messageObj.toString()) = [object Object];
const pageId = "history";
let loading = false;
const parent = "fruits";
const child = "item";
const fruitList = ["사과", "바나나", "딸기", "배"];
</script>

<template>
  <h1>Mustache.vue</h1>
  <div>Hello, {{ message }}</div>
  <!-- v-text는 directive라 부름
  v- 시작하는 속성은 전부 directive
  -->
  <div>Hello, <span v-text="message"></span></div>
  <div>Hello, messageObj <span v-text="messageObj"></span></div>
  <div>Hello, messageObj.kim: <span v-text="messageObj.name"></span></div>
  <div v-bind:id="pageId">페이지 아이디 div</div>
  <div :id="pageId">페이지 아이디 div</div>
  <!-- id="pageId" 형식을 훨씬 많이 씀, 많이 생략함 -->
  <!-- bild 묶다, 연결하다 -->

  <input type="text" placeholder="아이디" :readonly="loading" />
  <input type="password" placeholder="비밀번호" :readonly="loading" />
  <button :disabled="loading">로그인</button>

  <ul :class="parent">
    <!-- <li v-for="item in fruitList" :class="child"> -->
    <li key="idx" v-for="(item, idx) in fruitList" :class="child">  
      {{ item }}
    </li>
  </ul>
</template>

<style scoped>
#history {
  color: red;
}
</style>
