<template>
  <section class="error-wrapper body-404">
    <i class="icon-404"></i>
    <h1>404</h1>
    <h2>page not found</h2>
    <p class="page-404">Something went wrong or that page doesn’t exist yet. <router-link to="/">Return Home</router-link></p>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Page404 extends Vue {
}

</script>
