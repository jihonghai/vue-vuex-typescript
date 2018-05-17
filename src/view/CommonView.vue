<template>
  <div class="flex flex-1 common-view">
    <the-header></the-header>
    <the-side-bar></the-side-bar>
    <section id="main-content" class="flex-1">
      <breadcrumb></breadcrumb>
      <router-view></router-view>
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheHeader from '@/view/layout/TheHeader.vue'
import TheSideBar from '@/view/layout/TheSideBar.vue'
import Breadcrumb from '@/view/layout/Breadcrumb.vue'

@Component({
  components: {
    TheHeader,
    TheSideBar,
    Breadcrumb
  }
})
export default class CommonView extends Vue {
}

</script>
<style lang="less">
.router-enter-active,
.router-leave-active{
    transition: all .4s cubic-bezier(0, 0, 0, 1);
}

.router-enter,
.router-leave-active{
    opacity: .1;
}

.router-enter{
    transform: translate3D(100%, 0, 0);
}

.router-leave-active{
    transform: translate3D(-100%, 0, 0);
}

.common-view{
  width: 100%;
  height: 100%;
}
</style>
