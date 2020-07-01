import Vue from 'vue'
import { ElMessageBoxShortcutMethod } from 'element-ui/types/message-box'
// import { AxiosStatic } from 'axios';
declare module '*.vue' {
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    // $http: AxiosStatic,
    $api: object,
    $alert: ElMessageBoxShortcutMethod
  }
}