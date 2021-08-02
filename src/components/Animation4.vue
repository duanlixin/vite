<template>
    <h2 class="title">
        动画4-从小变大然后消失
    </h2>
    <div class="content">
        <div class="animation-wrapper">
            <div class="box disapear">
                变大消失
            </div>
        </div>
        <button class="btn" @click="bigger">
            开始动画
        </button>
    </div>
</template>

<script>
import gsap from 'gsap';

export default {
    name: 'Animation4',
    data(){
        return{
        };
    },
    methods:{
        bigger(){
            const tl = gsap.timeline();
            tl.to('.disapear', {duration:1, scale:2, opacity:0});
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