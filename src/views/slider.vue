<template>
  <div class="sliderWrap">
    <div class="slider">
      <div class="sliderMain">
        <div
          v-for="(data, index) in datas"
          :key="index"
          :class="'active' + nowShow"
          class="sliderContents"
        >
          <h4>{{ data.title }}</h4>
          <div>{{ data.content }}</div>
        </div>
        <div class="slidercontroler">
          <label class="movebox" v-for="(data, index) in datas" :key="index">
            <input
              type="radio"
              name="control"
              class="test"
              :checked="data.show"
              @click="controlMove(index)"
            />
          </label>
        </div>
        <button class="sliderbtn left" @click="leftMove">
          <i class="iconify" data-icon="mdi:chevron-left" />
        </button>
        <button class="sliderbtn right" @click="rightMove">
          <i class="iconify" data-icon="mdi:chevron-right" />
        </button>
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
    autoslide: {
      type: Boolean,
      default: false,
    },
    autoTime: {
      type: Number,
      default: 3000,
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
      nowShow: 2,
      dataLength: 0,
    };
  },
  created() {
    if (this.autoslide) {
      setInterval(() => {
        this.rightMove();
      }, this.autoTime);
    }
    this.dataLength = this.datas.length;
  },
  methods: {
    leftMove() {
      this.datas[this.nowShow - 1].show = false;
      if (this.nowShow - 1 > 0) {
        this.nowShow--;
      } else {
        this.nowShow = this.dataLength;
      }
      this.datas[this.nowShow - 1].show = true;
    },
    rightMove() {
      this.datas[this.nowShow - 1].show = false;
      if (this.nowShow < this.dataLength) {
        this.nowShow++;
      } else {
        this.nowShow = 1;
      }
      this.datas[this.nowShow - 1].show = true;
    },
    controlMove(now: number) {
      this.nowShow = now + 1;
    },
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
    left: 80px;
  }
  &.right {
    right: 80px;
  }
  border: none;
  background: none;
  & > * {
    width: 36px;
    height: 36px;
    transition: color 0.5s;
    &:hover {
      color: $white;
    }
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
  transition: transform 0.8s;
  &.active1 {
    transform: translateX(0);
  }
  &.active2 {
    transform: translateX(-100%);
  }
  &.active3 {
    transform: translateX(-200%);
  }
  &.active4 {
    transform: translateX(-300%);
  }
  &.active5 {
    transform: translateX(-400%);
  }
  &.active6 {
    transform: translateX(-500%);
  }

  /* transform:translateX(-100%);
  transform:translateX(-300%);
  transform:translateX(-400%);
  transform:translateX(-500%); */
}
.slidercontroler {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  display: flex;
  .movebox + .test:checked {
    /* display: black; */

    background: $white;
    width: 15px;
    height: 15px;
  }
}
.movebox {
  width: 10px;
  height: 10px;
  background: $black;
  border-radius: 20px;
  margin: 3px 5px 0;
  position: relative;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    background: $white;
    width: 15px;
    height: 15px;
  }
}
.test {
  display: none;
}
</style>
