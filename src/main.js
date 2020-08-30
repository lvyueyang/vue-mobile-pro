import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button, Toast} from 'vant'
import utils from '@/utils'
import '@/style/base.less'
import '@/components/register-global'
import WxSdk from '@/utils/wx-sdk'

const wxSdkInit = () => {
  return new Promise((resolve, reject) => {
    const wx = new WxSdk({
      success: res => {
        window.$wx = wx.$wx()
        window.$wxMini = wx.$wxMini()
        resolve(wx)
      },
      fail: e => {
        reject(e)
      }
    })
  })
}

Vue.use(Button)
Vue.use(Toast)

Vue.config.productionTip = false
Vue.prototype.$toast = Toast;

(async () => {
  // 如若需要使用wxsdk
  if (utils.browser.isWxEnv) {
    try {
      await wxSdkInit()
    } catch (e) {
      Toast.fail('WXSDK加载失败')
    }
  }

  new Vue({
    router,
    render: h => h(App),
    mounted() {
      Toast.clear()
    },
  }).$mount('#app')
})()

