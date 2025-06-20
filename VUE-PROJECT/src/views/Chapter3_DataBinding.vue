<script setup>
import { ref } from "vue";
// 반응형에 import { ref } from "vue"; 추가하면 가능
// ref = 단일 value 반응 .value 반드시 필요
// reactive 객체 자체 반응 .value 없이 가능
const fruits = "apple avocado";
const fruitsArr = ["banana", "blueberry "];

const visible = ref({ fruit: true });
const hidden = { fruit: false };

const changeVisible = () => {
  //console.log("ddd", visible.fruit);
  visible.value.fruit = !visible.value.fruit;
};

// 데이터가 많은데 문자열
const rect = "background-color: red; width: 200px; height: 100px;";
const rectObj = {
  backgroundColor: "red",
  width: "200px",
  height: "100px",
  marginTop: "10px",
};
rectObj.backgroundColor = "hotpink";

let loading = true;
</script>

<template>
  <h1>Chapter3_DataBinding</h1>
  <div :class="fruits">사과 / 아보카도</div>
  <div :class="fruitsArr">바나나 / 블루베리</div>
  <hr />
  <div :class="visible" @click="changeVisible">사과 {{ visible.fruit }}</div>
  <div :class="hidden">오이</div>
  <div :style="rect">rect</div>
  <div v-bind:style="rectObj">rectObj</div>

  <div v-if="loading">로딩 중!!</div>
  <!-- v-if 태그 자체를 없앰 -->
</template>

<style scoped>
.fruit {
  color: crimson;
}
</style>
