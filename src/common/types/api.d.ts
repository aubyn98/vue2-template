import Vue from 'vue'
declare module 'vue-router/types/router' {
  interface VueRouter {
    linkTo(to: RawLocation, opts: { current?: Route; append?: boolean; type?: '_blank' | '_parent' | '_self' | '_top' }): void
  }
}
declare module 'vue/types/vue' {
  interface Vue {
    $api: () => {}
  }
}
