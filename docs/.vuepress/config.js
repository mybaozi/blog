module.exports = {
  title: 'Baolog',
  description: 'Just playing around',
  themeConfig: { //导航栏
    logo:'',
    nav: [
      { text: '技术', link: '/view/' },
      { text: 'MDN', link: 'https://developer.mozilla.org/zh-CN/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '知识点',   // 必要的
        // path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: '数据类型',
            path: '/view/technology/variable-type'
          },
          {
            title: '作用域和作用域链',
            path: '/view/technology/scope'
          },
          {
            title: 'this',
            path: '/view/technology/this'
          },
          {
            title: 'call、apply、bind',
            path: '/view/technology/function',
          },
          {
            title: '闭包',
            path: '/view/technology/closure'
          },
          {
            title: '原型和原型链',
            path: '/view/technology/prototype'
          },
          {
            title: '事件循环',
            path: '/view/technology/task'
          },
          {
            title: 'Promise',
            path: '/view/technology/promise'
          }
        ]
      },
      {
        title: 'Vue原理相关',
        children: [
          {
            title: '响应式原理',
            path: '/view/vue/response-principle'
          }
        ]
      },
      {
        title: '开发问题',
        children: [

        ]
      }
    ]
  }
}