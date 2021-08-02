<template>
    <h2 class="title">
        动画6-从隐藏到显示
    </h2>
    <div class="content">
        <div class="animation-wrapper">
            <div class="box show">
                隐藏到显示
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
    name: 'Animation6',
    data(){
        return{
        };
    },
    methods:{
        bigger(){
            const tl = gsap.timeline();
            tl.to('.show', {duration:1,opacity:1});
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
  opacity: 0;

  border: 2px solid green;
}

</style>