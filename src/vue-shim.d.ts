declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $Message: any
    $message: any
    $Modal: any
  }
}

declare var process : {
  env: {
      NODE_ENV: string
  }
}
