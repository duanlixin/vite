<template>
  <h2 class="title">随机数组</h2>
  <div class="content">
    <div class="code">数组值</div>
    <div class="code">{{ array }}</div>
    <button class="btn" @click="random">随机输出数组</button>
  </div>
</template>

<script>
export default {
  name: "Randow",
  data() {
    return {
      array: [1, 2, 3, 4]
    };
  },

  methods: {
    random() {
      return this.array.sort(() => 0.5 - Math.random());
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
</style>
