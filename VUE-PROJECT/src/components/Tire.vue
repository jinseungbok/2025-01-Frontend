<script setup>
// props = 외부에서 들어오는 data
const props = defineProps({
  color: String, // 타입 지정
});
// color라는 속성으로 데이터를 받을 수 있다.
// {{ }} template(HTML) 안에서 상수 혹은 변수에 담겨 있는 값(value)을 표시할 때 사용
</script>

<template>
  <!-- 객체에 style을 주고 싶으면 :을 붙여야 함 -->
  <!-- :style = vue 문법
  중괄호 2개 겹쳐져 있는 것은 콧수염(Mustache 템플릿)
  Mustache 템플릿은 값을 태그에 찍을 때 사용
  -->
  <!-- <div :style="{ color: props.color }">{{ props.color || "BLACK" }} TIRE</div> -->
  <div :style="{ color: props.color }">{{ props.color }} Black Tire</div>
  <div style="background-color: blue; color: #fff">
    {{ props.color }} Black Tire
  </div>
</template>

<style scoped></style>
