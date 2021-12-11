<template>
  <div>
    <h1>homea</h1>
    <div>
      <section>count: {{ $store.state.count }}</section>
      <section>
        <el-button type="primary" @click="increase">increase</el-button>
        <el-button type="danger" @click="decrease">decrease</el-button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    increase() {
      this.$store.dispatch("increase");
    },
    decrease() {
      this.$store.dispatch("decrease");
    },
  },
};
</script>

<style lang="less" scoped>
h1 {
  color: #333;
}
</style>
