<template>
  <div class="login-account">
    <el-form label-width="20%" :rules="rules" :model="formInline" ref="formRef">
      <el-form-item label="账号:" prop="name">
        <el-input v-model="formInline.name" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="formInline.password" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/formInline-config'
export default defineComponent({
  name: 'LoginAccontVue',
  setup(props) {
    const formInline = reactive({
      name: '',
      password: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        // 判断表单验证是否通过
        if (valid) {
          console.log('开始登录')
        }
      })
    }
    return { formInline, rules, loginAction, formRef }
  }
})
</script>
<style></style>
