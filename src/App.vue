<template>
<div id="app">
  <div class="item" @click="go">返回首页</div>
  <div class="item" @click="go('random')">随机数组</div>
  <router-view />
</div>

</template>

<script>

export default {
  name: "App",

  methods: {
    go(name) {
      this.$router.push({ name })
    },
  },
};
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
