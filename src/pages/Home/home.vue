<template>
  <div class="home-page">
    <div class="header">欢迎来到XXXXX</div>
    <div class="center-box">
      <van-button block type="primary" class="home-button" @click="openPage('bind')">微信绑定</van-button>
      <van-button block type="primary" class="home-button" @click="openPage('appointment')">预约送水</van-button>
    </div>
  </div>
</template>

<script>
import { Button as VanButton } from "vant";
export default {
  components: {
    VanButton
  },
  methods: {
    openPage(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
  > .header {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 24px;
    color: #0bbd0b;
    text-align: center;
    border-bottom: 1px solid #ebedf0;
  }
  > .center-box {
    width: 60%;
    margin: 0 auto;
    > .home-button {
      margin-top: 10px;
    }
  }
}
</style>