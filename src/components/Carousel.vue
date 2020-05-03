<template>
  <div id="Carousel">
    <div class="swiper">
      <!--图片区域-->
      <ul class="imgBox transi" :style="theStyle">
        <li v-for="(item) in imgArr" :key="item.id">
          <img v-bind:src="item.text" alt="" />
        </li>
      </ul>
      <!--左右按钮-->
      <div class="btn pre" @click="pre">&lt;</div>
      <div class="btn next" @click="next" :style="nextButtonStyle">&gt;</div>
      <!--小圆点-->
      <ul class="item">
        <li
          class="active"
          v-for="item in itemList"
          :key="item.id"
          :style="item.style"
          @click="dot(item.num)"
        ></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#Carousel{
  // height: 2000px;
  background-color: #344a5f;
  position: relative;
  // top: -50px;
  }
.swiper {
  width: 1226px;
  height: 460px;
  border: 1px solid black;
  margin: 0 auto;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
}
.swiper ul {
  width: 9999px;
  overflow: hidden;
  /*清除浮动*/
  /*transition: 1s;*/
}
.swiper li {
  float: left;
  width: 1226px;
  position: relative;
  height: 460px;
}
/*按钮*/
div.btn {
  position: absolute;
  top: 50%;
  left: 0px;
  width: 30px;
  height: 30px;

  margin-top: -15px;
  text-align: center;
  line-height: 27px;
  border-radius: 50%;
  font-size: 26px;
  color: #fff;
  background: #666;
  opacity: 0.5;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
}
div.btn.next {
  left: 692px;
}
/* .transi {
      transition: 500ms;
    } */
/*小圆点*/
ul.item {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  /*清除浮动*/
  overflow: hidden;
  z-index: 1000;
  width: 200px;
}
.item li {
  float: left;
  width: 12px;
  height: 12px;
  border: 1px solid #fff;
  background-color: mediumturquoise;
  border-radius: 50%;
  margin: 0 3px;
}
.item li:hover {
  border: 1px solid gray;
  cursor: pointer;
}
li.active {
  background: gray;
}
li img {
  width: 1226px;
  height: 460px;
}
</style>

<script>
export default {
  name: "Carousel",
  data: function() {
    return {
      imgArr: [
        { text: "/img/轮播图5.jpg" }, //注意此处要放第最后张图
        { text: "/img/轮播图1.jpg" },
        { text: "/img/轮播图2.jpg" },
        { text: "/img/轮播图3.jpg" },
        { text: "/img/轮播图4.jpg" },
        { text: "/img/轮播图5.jpg" },
        { text: "/img/轮播图1.jpg" }, //注意此处要放第一张图
      ],
      imgW: 1226,
      index: -1,
      flag: true,
      theStyle: {
        transform: "",
        backgroundColor: "red",
        transition: "500ms",
      },
      itemStyle: {
        backgroundColor: "",
      },
      nextButtonStyle: {
        left: "1196px",
      },
      itemList: [],
    };
  },
  mounted() {},
  created() {
    this.nextButtonStyle.left = `${this.imgW - 30}px`; //按钮根据图片宽度适配
    // console.log(`${this.imgW - 30}px`);
    for (let i = 0; i < this.imgArr.length - 2; i++) {
      //根据图片数量生成分页器列表
      this.itemList.push({
        num: `${i + 1}`,
        style: { backgroundColor: "" },
      });
    }
    this.itemList[0].style.backgroundColor = "red"; //默认第一张选中

    this.theStyle.transform = "translateX(" + this.imgW * this.index + "px)"; //初始化位置
    setInterval(() => {
      //自动轮播
      if (this.flag) {
        this.theStyle.transition = "500ms";
        this.index -= 1;
        for (let i = 0; i < this.imgArr.length - 2; i++) {
          //重置选中
          this.itemList[i].style.backgroundColor = "";
        }
        if (this.index > -(this.imgArr.length - 1)) {
          this.itemList[-this.index - 1].style.backgroundColor = "red";
        }
        if (this.index == -(this.imgArr.length - 1)) {
          this.itemList[0].style.backgroundColor = "red";
        }
        this.theStyle.transform =
          "translateX(" + this.imgW * this.index + "px)";
        this.flag = !true; //防止过度跳页面
      }
    }, 4000);
    // let swiper = document.getElementsByClassName("swiper");
    //如果不使用箭头函数要 let that = this;
    addEventListener("transitionend", () => {
      //监听动画完成
      for (let i = 0; i < this.imgArr.length - 2; i++) {
        //清除选中
        this.itemList[i].style.backgroundColor = "";
      }
      if (this.index >= 0) {
        //到头跳转
        this.index = -(this.imgArr.length - 2);
        this.itemList[this.imgArr.length - 3].style.backgroundColor = "red";
        this.theStyle.transition = "0ms";
        this.theStyle.transform =
          "translateX(" + this.imgW * this.index + "px)";
      }

      if (this.index <= -(this.imgArr.length - 1)) {
        //到尾跳转
        this.index = -1;
        this.theStyle.transition = "0ms";
        this.theStyle.transform =
          "translateX(" + this.imgW * this.index + "px)";
      }
      this.flag = true; //动画完成后可以继续翻页
      this.itemList[-this.index - 1].style.backgroundColor = "red";
      // console.log(this.index);
    });
  },
  methods: {
    dot(dotIndex) {
      //点击分页器
      // console.log(dotIndex);
      this.index = -dotIndex;
      for (let i = 0; i < this.imgArr.length - 2; i++) {
        this.itemList[i].style.backgroundColor = "";
      }
      this.itemList[-this.index - 1].style.backgroundColor = "red";
      this.theStyle.transform = "translateX(" + this.imgW * this.index + "px)";
    },
    pre() {
      //上一张
      if (this.flag) {
        this.theStyle.transition = "500ms";
        this.index += 1;
        this.theStyle.transform =
          "translateX(" + this.imgW * this.index + "px)";
        for (let i = 0; i < this.imgArr.length - 2; i++) {
          this.itemList[i].style.backgroundColor = "";
        }
        if (this.index < 0) {
          this.itemList[-this.index - 1].style.backgroundColor = "red";
        }
        if (this.index == 0) {
          this.itemList[this.imgArr.length - 3].style.backgroundColor = "red";
        }
        this.flag = !true;
      }
    },
    next() {
      //下一张
      if (this.flag) {
        this.theStyle.transition = "500ms";
        this.index -= 1;
        this.theStyle.transform =
          "translateX(" + this.imgW * this.index + "px)";
        for (let i = 0; i < this.imgArr.length - 2; i++) {
          this.itemList[i].style.backgroundColor = "";
        }
        if (this.index > -(this.imgArr.length - 1)) {
          this.itemList[-this.index - 1].style.backgroundColor = "red";
        }
        if (this.index == -(this.imgArr.length - 1)) {
          this.itemList[0].style.backgroundColor = "red";
        }
        this.flag = !true;
      }
    },
  },
};
</script>
