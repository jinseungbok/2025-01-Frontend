<script setup>
// props = 외부에서 들어오는 data
const props = defineProps({
  color: String, // 타입 지정
});
</script>

<template>
  <!-- 객체에 style을 주고 싶으면 :을 붙여야 함 -->
  <!-- :style = vue 문법
  중괄호 2개 겹쳐져 있는 것은 콧수염(Mustache 템플릿)
  Mustache 템플릿은 값을 태그에 찍을 때 사용
  -->
  <div :style="{ color: props.color }">{{ props.color || "BLACK" }} TIRE</div>
</template>

<style scoped></style>
