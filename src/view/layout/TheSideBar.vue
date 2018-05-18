<template>
  <el-menu
    class="el-menu-vertical"
    :collapse="isCollapse"
    active-text-color="#27BAFE"
    :router="true"
    :unique-opened="true">
    <!--
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="/404">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="2-4">
        <span slot="title">选项4</span>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    -->
    <template v-for="item in routes" v-if="!item.hidden && item.children">
      <router-link v-if="item.children.length === 1 && !item.children[0].children && !item.alwaysShow" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path + '/' + item.children[0].path" :class="{'submenu-title-noDropdown': !isNest}">
          <span v-if="item.children[0].meta && item.children[0].meta.title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name || item.path" :key="item.name">
        <template slot="title">
          <span v-if="item.meta && item.meta.icon" :class="item.meta.icon" class="iconfont menuicon"></span>
          <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children && child.children.length" :routes="[child]" :key="child.path"></sidebar-item>
          <router-link v-else :to="item.path + '/' + child.path" :key="child.name">
            <el-menu-item :index="item.path + '/' + child.path">
              <svg-icon v-if="child.meta && child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta && child.meta.title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
  name: 'TheSideBar'
})
export default class TheSideBar extends Vue {
  isNest: boolean = false

  @Getter isCollapse: boolean

  get routes () {
    return this.$router['options'].routes
  }
}
</script>
<style lang="less">
.el-menu-vertical{
  padding-top: 60px;
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
