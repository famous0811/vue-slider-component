<template>
  <div class="wrap"></div>
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
  width: 100%;
  height: 30px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  transition: all 0.5s;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  &:hover {
    background: $white;
  }
}
.select__options {
  position: absolute;
  left: 0;
  top: 45px;
  max-height: 500px;
  background-color: white;
  display: none;
  overflow-y: scroll;
  width: 180px;
  &.show {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.select_item {
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
  & > * {
    cursor: pointer;
  }
}
.select_item_checked {
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1px solid black;
  margin: 0 10px;
  position: relative;

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
