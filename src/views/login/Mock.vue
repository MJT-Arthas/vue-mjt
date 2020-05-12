<template>
  <div>
    <h1>假数据</h1>
    <p v-for="(i,index) in list" :key="index">{{`题目：${i.title}`}}</p>
    <!-- <p v-for="(i,index) in list" :key="index">{{`名字：${i.name},姓氏：${i.cfirst},年龄:${i.natural}`}}</p><br><br> -->
    <!-- <h2 v-for="(j,indexJ) in other" :key="'info2-'+indexJ">{{j.province}}</h2> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
      // other:[]
    };
  },
  created() {
    this.getList();
    // this.getOther()
  },
  methods: {
  //1.
    getList() {
      this.$axios
        .get("http://jsonplaceholder.typicode.com/posts")
        .then(res => {
          console.log(res.data);
          alert("登陆成功")
          this.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  //2.
    // getOther() {
    //   this.$axios
    //     .post("/api/other")
    //     .then(res => {
    //       console.log(res.data);
    //                 alert("登陆成功")
    //       this.other = res.data;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>

<style scoped >
</style>