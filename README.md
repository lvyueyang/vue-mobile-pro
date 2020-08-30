# vue-mobile-pro
## 安装
```
npm install
```
### 启动
```
npm run serve
```
### 打包
```
npm run build
```
## 项目介绍  
本项目使用vue-cli构建，vue版本为2.6.11，内置`vant`组件库，使用px2vw进行移动端屏幕适配  

## 目录介绍  
```
├─api  // 用于存放后端接口
├─assets    // 存放静态资源
├─components  // 组件
│  └─global  // 全局组件
├─filters   // 过滤器
│  └─global     // 全局过滤器 
├─router    // 路由
├─style     // 全局样式
├─utils     // 工具函数
└─views     // 页面
    └─home  
```

## 如何添加一个页面  
1. 在 views 目录下新建一个页面文件夹，在文件夹中创建一个`.vue`文件  
2. 在 routers 中注册这个页面即可  


## 相关文档  
[vant](https://youzan.github.io/vant/#/zh-CN/home)   
[vue](https://cn.vuejs.org/v2/guide/)  
[vue-router](https://router.vuejs.org/zh/guide/)  
[lodash](https://www.html.cn/doc/lodash/)  
[axios](https://www.kancloud.cn/yunye/axios/234845)  
[vue-cli3](https://cli.vuejs.org/zh/guide/)  
