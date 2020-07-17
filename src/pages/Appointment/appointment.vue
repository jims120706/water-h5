<template>
  <div class="appointment-page">
    <div class="header">预约送水</div>
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
        v-model="formData.phone"
        name="phone"
        label="手机号码"
        placeholder="请输入姓名"
      />
      <van-button type="primary" block class="submit-btn">提交</van-button>
    </van-form>
  </div>
</template>

<script>
import {
  Form as VanForm,
  Field as VanField,
  Button as VanButton,
} from "vant";
export default {
  components: {
    VanForm,
    VanField,
    VanButton,
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
    };
  },
  methods: {
    onFormSubmit(data) {
      console.log("提交表单", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.appointment-page {
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