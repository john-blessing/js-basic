<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ state.name }}</p>
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance, onMounted, reactive } from "vue";
const ctx = getCurrentInstance();
defineProps({
  msg: String,
});
const state = reactive({
  name: "tom",
});
onMounted(() => {
  state.name = "jerry";
  ctx.emit("on-callback", "hello world");
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
