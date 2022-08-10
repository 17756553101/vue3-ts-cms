<template>
  <div class="login-account">
    <el-form label-width="20%" :model="formInline">
      <el-form-item label="账号:" prop="name">
        <el-input v-model="formInline.name" />
      </el-form-item>

      <el-form-item label="验证码:" prop="password">
        <div class="get-code">
          <el-input v-model="formInline.password" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onActivated, onDeactivated } from 'vue'
export default defineComponent({
  name: 'LoginPhoneVue',
  setup(props) {
    const formInline = reactive({
      name: '',
      password: ''
    })
    onActivated(() => {
      console.log(123444)
    })
    onDeactivated(() => {
      console.log(321)
    })
    return { formInline }
  }
})
</script>
<style lang="less" scoped>
.get-code {
  display: flex;
  .el-button {
    margin-left: 7%;
  }
}
</style>
