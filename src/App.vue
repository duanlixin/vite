<template>
<div id="app">
  <div class="item" @click="this.$router.push('/')">返回首页</div>
  <div class="item" @click="this.$router.push({ name: 'random' })">随机数组</div>
  <router-view />
</div>

</template>

<script setup>

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
body {
  margin: 10px;
  padding: 0;
  width: 100%;
  height: 100%;
  color: #fff;

  background-image: url('./assets/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.item {
  padding-bottom: 10px;
  cursor: pointer;
}
</style>
