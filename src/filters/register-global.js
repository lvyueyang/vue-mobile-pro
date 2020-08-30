import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// 注册全局组件
const requireComponent = require.context(
    // 其组件目录的相对路径
    './global',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /\w+\.(js)$/
)
requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)

    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
        camelCase(
            // 剥去文件名开头的 `./` 和结尾的扩展名
            fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
    )
    // 全局注册组件
    Vue.filter(componentName, componentConfig.default || componentConfig)
})
