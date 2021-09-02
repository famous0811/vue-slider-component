<template>
  <div class="sliderWrap">
    <div class="slider">
      <div class="sliderMain">
        <button class="sliderbtn left">left</button>
        <div
          v-for="(data, index) in datas"
          :key="index"
          :class="data.show ? 'active' : ''"
          class="sliderContents"
        >
          <h4>{{ data.title }}</h4>
          <div>{{ data.content }}</div>
        </div>
        <button class="sliderbtn right">right</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  props: {
    //false in true out
    sliderbtnInOut: {
      type: Boolean,
      default: false,
    },
    Infinity: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      datas: [
        { title: "main title1", content: "hello world", src: "", show: false },
        { title: "main title2", content: "hello world", src: "", show: true },
        { title: "main title3", content: "hello world", src: "", show: false },
        { title: "main title4", content: "hello world", src: "", show: false },
        { title: "main title5", content: "hello world", src: "", show: false },
        { title: "main title6", content: "hello world", src: "", show: false },
      ],
      dataLength: 0,
    };
  },
  created() {
    this.dataLength = this.datas.length;
  },
})
export default class Slider extends Vue {}
</script>

<style lang="scss">
.sliderWrap {
  background: $white;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
}
.sliderbtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  &.left {
    left: 20px;
  }
  &.right {
    right: 20px;
  }
}
.sliderMain {
  position: relative;
  overflow: hidden;
  max-width: 3200px; //변경
  height: 100%;
  width: 100%;
  background: $personal;
  display: flex;
  flex-flow: column wrap;
}

.sliderContents {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  /* transform: translateX(-800px); */
  /* ${({ move }) => css`
    transform: translateX(${move});
  `}; */
  /* background: red; */
}
</style>
