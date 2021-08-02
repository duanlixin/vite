<template>
    <h2 class="title">
        动画7-缩小向上飞出
    </h2>
    <div class="content">
        <div class="animation-wrapper">
            <div class="box small fly">
                缩小飞出
            </div>
        </div>
        <button class="btn" @click="smallFly">
            开始动画
        </button>
    </div>
</template>

<script>
import gsap from 'gsap';

export default {
    name: 'Animation7',
    data(){
        return{
        };
    },
    methods:{
        smallFly(){
            const tl = gsap.timeline();
            tl.to('.small', {duration:1, scale:0.5});
            tl.to('.fly',{y:-300})
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

</style>