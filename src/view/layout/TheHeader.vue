<template>
  <header class="header white-bg flex flex-cross-center flex-between">
    <div class="flex flex-cross-center">
      <div class="sidebar-toggle-box">
        <el-tooltip effect="dark" content="切换导航" placement="right">
          <i class="fas fa-bars" @click="toggleMenu()"></i>
        </el-tooltip>
      </div>
      <!--logo start-->
      <a href="#" class="logo">管理平台</a>
      <!--logo end-->
    </div>
    <div class="top-nav">
      <!--search & user info start-->
      <div class="nav pull-right top-menu">
        <el-dropdown>
          <el-button>
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>
              <span @click="logout">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!--search & user info end-->
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Action, Mutation } from 'vuex-class'

@Component({
  name: 'TheHeader'
})
export default class TheHeader extends Vue {
  @Action('changeSideBarState') changeStateAction: Function
  @Mutation('LOGOUT') logoutMutation: Function

  toggleMenu () {
    this.changeStateAction()
  }

  logout () {
    this.logoutMutation()
    this.$router.replace('/login')
  }

  showUserInfo () {
  }

  handleWindowResize () {
    // var wSize = $(window).width()
    // $('#app-container')[wSize <= 768 ? 'addClass' : 'removeClass']('sidebar-closed')
  }

  mounted () {
    const {handleWindowResize} = this
    window.addEventListener('resize', handleWindowResize)
    window.addEventListener('load', handleWindowResize)
  }

  beforeDestroy () {
    const {handleWindowResize} = this
    window.removeEventListener('load', handleWindowResize)
    window.removeEventListener('resize', handleWindowResize)
  }
}

</script>
