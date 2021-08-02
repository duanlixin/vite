<template>
    <div class="title">毫秒计时器</div>
    <div class="content">
        <div class="time">时间</div>
        <div class="timer">{{string}}</div>
        <button id="start" name="btn" @click="start">开始计时</button>
        <button id="stop" name="btn" @click="stop">暂停</button>
        <button id="reset" name="btn" @click="reset">重置</button>
    </div>
</template>



<script>


export default {
    name: "Timer",
    data(){
        return{
            m: 0,
            s: 0,
            ms: 0,
            time: 0, //计时器
            string: '00:00:000',
        }
    },
    methods:{
        start(){
            this.time = setInterval(this.timer, 50);
        },

        stop(){
            clearInterval(this.time);
            
        },

        reset(){
            clearInterval(this.time);
            this.m = 0;
            this.s = 0;
            this.ms = 0;
            this.string = '00:00:000'
        },

        timer(){
            this.ms = this.ms + 50;

            if(this.ms >= 1000){
                this.ms = 0;
                this.s ++;
            }

            if(this.s >= 60){
                this.s = 0;
                this.m ++;
            }

            this.string = this.toDub(this.m) + ':' + this.toDub(this.s) + ':' + this.ms;
            if(this.toDub(this.m) == '0' && this.string.s == '2'&& this.string.ms == '599'){
                clearInterval(this.time);
            }
        },
        toDub(n){
            if(n < 10){
                return "0" + n;
            }else{
                return "" + n;
            }
        }

    }

}
</script>

<style>

.title {
  margin-top: 50px;
  margin-left: 20px;
}
.content {
  margin-top: 30px;
  margin-left: 20px;
}

</style>