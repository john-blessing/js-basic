<template>
  <div>
    <button @click="() => changeTheme('dark')">黑色</button>
    <div id="box" class="box"></div>
    <HelloWorld msg="12312123212312" @on-callback="onCallback" />
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { reactive } from "vue";
const state = reactive({
  theme: "light",
});
const changeTheme = (type) => {
  var html = document.getElementsByTagName("html")[0];
  html.setAttribute("data-theme", type);
};
function onCallback(data) {
  console.log(data);
}
</script>

<style lang="sass">
.box
  width: 100px
  height: 100px
  background-color: var(--bg-color)
</style>
