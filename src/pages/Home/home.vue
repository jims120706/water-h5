<template>
  <div class="home-page">
    <div class="header">微信绑定</div>
    <van-form @submit="onFormSubmit" class="form">
      <van-field
        class="form-item"
        label-class="form-label"
        v-model="formData.username"
        name="username"
        label="姓名"
        placeholder="请输入姓名"
      />
      <van-field
        class="form-item"
        label-class="form-label"
        v-model="formData.area"
        name="area"
        label="区域"
        placeholder="请选择区域"
        readonly
        clickable
        @click="showAreaPicker = true"
      />
      <van-field
        class="form-item"
        label-class="form-label"
        v-model="formData.phone"
        name="phone"
        label="手机号码"
        placeholder="请输入姓名"
      />
      <van-field
        class="form-item"
        label-class="form-label"
        v-model="formData.buildingNum"
        name="buildingNum"
        label="宿舍楼宇或宿舍栋号"
        placeholder="请输入栋号"
      />
      <van-field
        class="form-item"
        label-class="form-label"
        v-model="formData.dormitoryNum"
        name="dormitoryNum"
        label="宿舍号"
        placeholder="请输入宿舍号"
      />
      <van-field
        class="form-item"
        label-class="form-label"
        v-model="formData.graduationYear"
        name="graduationYear"
        label="毕业年份"
        placeholder="请选择毕业年份"
        readonly
        clickable
        @click="showYearPicker = true"
      />
      <van-button type="primary" block class="submit-btn">提交</van-button>
    </van-form>
    <van-popup v-model="showAreaPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="areaList"
        @cancel="showPicker = false"
        @confirm="onConfirmArea"
      />
    </van-popup>
    <van-popup v-model="showYearPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="yearList"
        @cancel="showPicker = false"
        @confirm="onConfirmYear"
      />
    </van-popup>
  </div>
</template>

<script>
import {
  Form as VanForm,
  Field as VanField,
  Button as VanButton,
  Picker as VanPicker,
  Popup as VanPopup
} from "vant";
export default {
  components: {
    VanForm,
    VanField,
    VanButton,
    VanPopup,
    VanPicker
  },
  data() {
    return {
      formData: {
        username: "",
        area: "",
        phone: "",
        buildingNum: "",
        dormitoryNum: "",
        graduationYear: ""
      },
      areaList: ["区域1", "区域2", "区域3"],
      yearList: ["2019", "2020"],
      showYearPicker: false,
      showAreaPicker: false
    };
  },
  methods: {
    onConfirmArea(area) {
      this.showAreaPicker = false;
      this.formData.area = area;
      console.log("选中的地址", area);
    },
    onConfirmYear(year) {
      this.showYearPicker = false;
      this.formData.graduationYear = year;
      console.log("选中的年份", year);
    },
    onFormSubmit(data) {
      console.log("提交表单", data);
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
  > .form {
    width: 100%;
    > .form-item {
      width: 100%;
      .form-label {
        > span {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
    > .submit-btn {
      margin-top: 20px;
      box-sizing: border-box;
    }
  }
}
</style>