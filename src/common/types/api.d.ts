import Vue from 'vue'
import { Storage } from 'utils/storage'
import EventListener from 'utils/EventListener'
import compose from 'utils/compose'
import log from 'utils/compose'
import debounce from 'utils/debounce'
import throttle from 'utils/throttle'
import str from 'utils/str'
import date from 'utils/date'
import object from 'utils/object'
import timer from 'utils/timer'
import { request } from 'utils/http'
interface Api {
  [index: string]: (params: any) => Promise<{
    data: any
    message: string
    responseCode: string
    status: boolean
  }>
}

interface Utils {
  timer: typeof timer
  object: typeof object
  date: typeof date
  str: typeof str
  compose: typeof compose
  log: typeof log
  debounce: typeof debounce
  throttle: typeof throttle
  EventListener: typeof EventListener
  storage: Storage
  http: typeof request
}

interface Info {
  (parmas: { duration?: number; type: 'success' | 'error'; message: string; closed(): void }): Promise<any>
  success(params: string | { duration?: number; message: string; closed(): void }): Promise<any>
  error(params: string | { duration?: number; message: string; closed(): void }): Promise<any>
}
declare module 'vue-router/types/router' {
  interface VueRouter {
    linkTo(to: RawLocation, opts: { current?: Route; append?: boolean; type?: '_blank' | '_parent' | '_self' | '_top' }): void
  }
}
declare module 'vue/types/vue' {
  interface Vue {
    $api: Api
    $utils: Utils
    $info: Info
  }
}
