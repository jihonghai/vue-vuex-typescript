<template>
  <section class="login-wrapper flex flex-main-center flex-column">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="loginForm.userName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="userPwd">
        <el-input type="password" v-model="loginForm.userPwd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { LoginRequest } from '@/types'
import { Form } from 'element-ui'

@Component({
  name: 'login',
  components: {
  }
})
export default class Login extends Vue {
  // data
  msg: string = 'Welcome to Your Vue.js App DashBoard'

  loginForm = {
    userName: '',
    userPwd: ''
  }

  rules: any = {
    userName: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    userPwd: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      }
    ]
  }

  $refs: {
    loginForm: Form
  }

  @Getter('isLoggedIn') isLoggedIn: boolean

  @Action('login') loginAction: Function = () => { }

  // computed
  get loginMsg () {
    return this.msg + this.isLoggedIn
  }

  @Watch('loginMsg')
  onChildChanged (val: string, oldVal: string): void {
    console.log(val)
    console.log(oldVal)
  }

  submitForm (): void {
    this.$refs.loginForm.validate((valid: boolean): boolean => {
      if (valid) {
        const { userName, userPwd } = this.loginForm
        const params: LoginRequest = {
          userName,
          userPwd
        }
        this.loginAction(params)
        // this.$router.replace('/')

        return true
      } else {
        return false
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login-wrapper{

}
</style>
