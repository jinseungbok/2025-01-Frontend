<script setup>
const message = "There";
const messageObj = { name: "Kim", age: 20 };
console.log(messageObj);
console.log(messageObj.toString());
// console.log(messageObj) = { name: "Kim", age: 20 };
// console.log(messageObj.toString()) = [object Object];
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
</template>

<style scoped></style>
