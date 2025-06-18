<script setup>
import FrontWheel from "@/components/FrontWheel.vue";
import RearWheel from "@/components/RearWheel.vue";
</script>

<template>
  <h1>Hello vue!</h1>
  <h1>Hello vue!</h1>
  <FrontWheel></FrontWheel>
  <RearWheel></RearWheel>
  
  <div class="car">
    <FrontWheel />
    <RearWheel />
  </div>
</template>

<style scoped>
.car {
  display: flex;
  gap: 10px;
}
</style>
