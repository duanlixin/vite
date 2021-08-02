<template>
    <h2 class="title">
        动画3-从左飞到右
    </h2>
    <div class="content">
        <div class="animation-wrapper">
            <div class="box toRight">
                从左飞到右
            </div>
        </div>
        <button class="btn" @click="toRight">
            开始动画
        </button>
    </div>
</template>

<script>
import gsap from 'gsap';

export default {
    name: 'Animation3',
    data(){
        return{
        };
    },
    methods:{
        toRight(){
            const tl = gsap.timeline();
            tl.to('.toRight', {duration:1, x:50}, 0);
        }
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
  margin-left: 0px;

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