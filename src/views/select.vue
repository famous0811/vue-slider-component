<template>
  <div class="wrap">
    <div class="select__template" ref="dropdown">
      <div class="select__template__activator" @click="downSelect">
        {{ selectName }}
        <i class="iconify" data-icon="mdi:chevron-down" />
      </div>
      <transition>
        <div class="select__options" v-if="selectDown">
          <div
            v-for="(item, idx) in selectValue"
            :key="idx"
            class="select__options__item"
            @click="select(item)"
          >
            <input
              type="checkbox"
              :checked="
                selectedOptions.findIndex((_option) => _option === item) !== -1
              "
              class="select__options__item__checkbox"
            />
            <div class="select__options__item__check">
              <i
                class="app-dropdown__dropdown__item__check__icon iconify"
                data-icon="mdi:done"
              ></i>
            </div>
            {{ item }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, prop } from "vue-class-component";

class Props {
  selectName = prop<string>({
    default: "선택해주세요!",
  });
  selectValue = prop<string[]>({
    default: ["test1", "test2", "test3", "test4", "test5"],
  });
}
export default class Select extends Vue.with(Props) {
  selectedOptions: string[] = [];
  selectedOption = false;
  selectDown = false;
  downSelect() {
    this.selectDown = !this.selectDown;
  }
  select(option: string) {
    const idx = this.selectedOptions.findIndex((_option) => _option === option);
    if (idx !== -1) {
      this.selectedOptions.splice(idx, 1);
    } else {
      this.selectedOptions.push(option);
    }
    // console.log(this.selectedOptions);
  }
  created() {
    window.addEventListener("click", (e: MouseEvent) => {
      if (
        this.$refs.dropdown &&
        !(this.$refs.dropdown as any).contains(e.target)
      ) {
        this.selectDown = false;
      }
    });
  }
}
</script>
<style lang="scss">
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f7fa;
  width: 100%;
  & > .select__template {
    max-width: 80%;
  }
  height: 100vh;
}
.select__template {
  position: relative;
  width: 100%;
  &__activator {
    width: 100%;
    padding: 15px 20px;
    border-radius: 8px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.5s;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
    &:hover {
      background: $white;
    }
    & > .iconify {
      font-size: 24px;
    }
  }
}

.select__options {
  position: absolute;
  left: 0;
  top: 50px;
  max-height: 500px;
  background-color: white;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  overflow-y: scroll;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__item {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: $white;
    }
    &__checkbox {
      display: none;

      &:checked + .select__options__item__check {
        .iconify {
          transform: translateY(0) scale(1);
        }
      }
    }
    &__check {
      border: 2px solid black;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
      .iconify {
        transform: translateY(10px) scale(0);
      }
    }
  }
}
</style>
