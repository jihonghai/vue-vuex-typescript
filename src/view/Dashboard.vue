<template>
  <section class="wrapper">
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({})
export default class Dashboard extends Vue {
  @Getter('isLoggedIn') isLoggedIn: boolean
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
