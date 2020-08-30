import wx from 'weixin-js-sdk'
import {wxOption} from '@/api'

const CONFIG = {
    debug: false,
    jsApiList: [
        'checkJsApi',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getLocalImgData',
        'openLocation',
        'getLocation',
        'closeWindow',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'scanQRCode',
        'chooseCard',
        'openCard',
        'addCard',
        'chooseWXPay',
        'openAddress',
    ]
}
const {jsApiList} = CONFIG

class WxSdk {
    constructor(options = {}) {
        if (!options.error) {
            options.error = (e) => {
                console.group('微信SDK初始化失败')
                console.log('微信SDK初始化失败')
                console.error(e)
                console.groupEnd()
            }
        }
        if (!options.success) {
            options.success = (e) => {
                console.group('微信SDK初始化成功')
                console.log('微信SDK初始化成功')
                console.error(e)
                console.groupEnd()
            }
        }

        const data = {
            apiList: jsApiList.join(),
            url: window.location.href.split('#')[0].replace('http:\/\/', '')
        }
        wxOption(data).then(res => {
            res = res[0]
            wx.config({
                debug: CONFIG.wxSdk.debug,
                appId: res.appid,
                timestamp: res.timestamp,
                nonceStr: res.noncestr,
                signature: res.signature,
                jsApiList
            })
            wx.ready(() => {
                console.log('微信sdk初始化成功')
                this.wx = wx
                this.wxMini = wx.miniProgram
                options.success(wx)
            })
            wx.error((e) => {
                console.error('微信sdk初始化失败', e)
                options.error(e)
            })
        }).catch(e => {
            console.error('获取wxsdk参数失败', e)
            options.error(e)
        })
    }

    $wx() {
        if (!this.wx) {
            console.warn('wxSDK初始化尚未完成')
            return
        }
        return this.wx
    }

    $wxMini() {
        if (!this.wxMini) {
            console.warn('wxSDK初始化尚未完成')
            return
        }
        return this.wxMini
    }
}

export default WxSdk
