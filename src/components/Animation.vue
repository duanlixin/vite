<template>
  <h2 class="title">
    动画1-向上，向下，向左，向右飞出
  </h2>
  <div class="content">
    <div class="animation-wrapper">
      <div class="box top">
        向上飞
      </div>
      <div class="box middle">
        <div class="box left">
          向左飞
        </div>
        <div class="box right">
          向右飞
        </div>
      </div>
      <div class="box bottom">
        向下飞
      </div>
    </div>
    <button
      class="btn"
      @click="fly"
    >
      开始动画
    </button>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: "Animation",
  data() {
    return {
    };
  },

  methods: {
    fly() {
      const tl = gsap.timeline();

      tl.to('.top', { y: -200, duration: 1 }, 0);
      tl.to('.left', { x: -300, duration: 1 }, 0);
      tl.to('.right', { x: 300, duration: 1 }, 0);
      tl.to('.bottom', { y: 300, duration: 1 }, 0);
    },
  },
};
</script>

<style scoped>
.title {
  margin-top: 50px;
  margin-left: 20px;
}
.content {
  margin-top: 30px;
  margin-left: 20px;
}
.code {
  margin: 20px;
}
.animation-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 500px;

  overflow: hidden;
  border: 2px solid red;
}

.box {
  width: 100px;
  height: 100px;

  border: 2px solid green;
}
.middle {
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
}
.left-to-right {
  position: absolute;
  height: 200px;
  width: 500px;
  box-sizing: border-box;
  left: -500px;
}
.fly-top {
  position: absolute;
  box-sizing: border-box;
  top: 500px;
}
.hide-to-show {
  opacity: 0;
}
.zoom-small-fly {
  /* position: absolute; */
}
</style>
