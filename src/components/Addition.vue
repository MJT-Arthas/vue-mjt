<template>
  <div>
    <!-- <h3>当前最新的Count值为：{{ $store.state.count }}</h3> -->
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="add">+1</button>
    <button @click="Async">+1 Async</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("addN", 3);
    },
    Async() {
      this.$store.dispatch("addAsync", 1);
    }
  }
};
</script>
