<template>
  <div id="app">
    <div
      v-for="(item, index) in list"
      :key="index"
    >
      <div
        class="item"
        :class="getCurrentStyle(index)"
        @click="go(index, item.name)"
      >
        {{ item.text }}
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      currentIndex: 0,
      list: [
        { name: 'home', text: '返回首页' },
        { name: 'random', text: '随机数组' },
        { name: 'animation', text: '动画' },
        { name: 'animation2', text: '动画2' },
        { name: 'animation3', text: '动画3' },
        { name: 'animation4', text: '动画4' },
        { name: 'animation5', text: '动画5' },
        { name: 'animation6', text: '动画6' },
        { name: 'animation7', text: '动画7' }, 
        { name: 'swiper', text: '切换图片' },
        { name: 'timer', text: '计时器' },
      ],
    }
  },
  methods: {
    getCurrentStyle(index) {
      return {
        clicked: index === this.currentIndex,
      }
    },
    go(index, name) {
      this.currentIndex = index;
      this.$router.push({ name });
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
.clicked {
  color: orange;
}
</style>
