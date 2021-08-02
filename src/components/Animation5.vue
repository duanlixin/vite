<template>
  <h2 class="title">
    动画5-从下飞到上
  </h2>
  <div class="content">
    <div class="animation-wrapper">
      <div class="box fly">
        向下往上飞
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
  name: "Animation5",
  data() {
    return {
    };
  },

  methods: {
    fly() {
      const tl = gsap.timeline();
      tl.to('.fly', { y: -500, duration: 1 }, 0);
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
  margin-bottom: -800px;

  border: 2px solid green;
}

</style>
