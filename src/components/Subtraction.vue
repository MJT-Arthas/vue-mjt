<template>
  <div>
    <!-- <h3>当前最新的Count值为：{{ count }}</h3> -->
    <h3>{{ showNum }}</h3>

    <button @click="subtraction">-1</button>
    <button @click="subAsync">Async-1</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["showNum"])
  },
  methods: {
    ...mapMutations(["sub"]),
    ...mapActions(["subAsync"]),
    subtraction() {
      this.sub();
    }
  }
};
</script>
