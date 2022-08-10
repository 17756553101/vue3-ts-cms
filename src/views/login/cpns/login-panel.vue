<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" :stretch="true">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span
              ><el-icon><Avatar /></el-icon
            ></span>
            <span>账号登陆</span>
          </span>
        </template>
        <loginAccountVue ref="accountRef" />
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span
              ><el-icon><Iphone /></el-icon
            ></span>
            <span>手机登录</span>
          </span>
        </template>
        <keep-alive>
          <loginPhoneVue />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-button" type="primary" @click="onSubmit"
      >确认登录</el-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Avatar, Iphone } from '@element-plus/icons-vue'
import loginAccountVue from './login-account.vue'
import loginPhoneVue from './login-phone.vue'
export default defineComponent({
  name: 'loginPanelVue',
  components: {
    Avatar,
    Iphone,
    loginAccountVue,
    loginPhoneVue
  },
  setup(props) {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccountVue>>()
    const onSubmit = (): void => {
      console.log('success', accountRef.value)
      accountRef.value?.loginAction()
    }

    return { isKeepPassword, onSubmit, accountRef }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  margin-top: -120px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 2%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    .el-checkbox {
      margin-left: 2%;
    }
    .el-link {
      margin-right: 5%;
    }
  }
  .login-button {
    width: 100%;
    justify-content: center;
    margin-top: 3%;
  }
}
</style>
