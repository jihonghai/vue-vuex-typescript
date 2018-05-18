<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.meta.title">
        <span v-if="item.redirect === 'noredirect' || index === levelList.length-1" class="no-redirect">{{item.meta.title}}</span>
        <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

@Component({
  name: 'Breadcrumb'
})
export default class Breadcrumb extends Vue {
  levelList: any[] = []

  @Watch('$route')
  changeRoute () {
    this.getBreadcrumb()
  }

  created () {
    this.getBreadcrumb()
  }

  getBreadcrumb () {
    let matched: any[] = this.$route.matched.filter(item => item.name)
    const first = matched[0]
    if (first && first.name !== 'dashboard') {
      const firstMatched = {
        path: '/dashboard',
        meta: { title: '首页' }
      }
      matched = [firstMatched].concat(matched)
    }
    this.levelList = matched
  }
}
</script>
<style lang="less" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
