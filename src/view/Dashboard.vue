<template>
  <section class="wrapper" @click="login">
    {{ loginMsg }}
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { LoginRequest } from '@/types'

@Component({})
export default class Dashboard extends Vue {
  @Prop({default: 'id'})
  id: string

  // data
  msg: string = 'Welcome to Your Vue.js App DashBoard'

  @Getter('isLoggedIn') isLoggedIn: boolean

  @Action('login') loginAction: Function

  // computed
  get loginMsg () {
    return this.msg + this.isLoggedIn + `: ${this.id}`
  }

  @Watch('loginMsg')
  onChildChanged (val: string, oldVal: string) {
    console.log(val)
    console.log(oldVal)
  }

  login () {
    const params: LoginRequest = {
      userName: '',
      userPwd: ''
    }
    this.loginAction(params)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
