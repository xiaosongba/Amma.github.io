module.exports = {
  title: 'Amma',
  description: '前端知识积累',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    // ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/docs/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '博文',
        items: [
          { text: 'Android', link: '/pages/test/test.md' },
          { text: 'Androidqq', link: '/pages/test/ff.md' },
          
        ] 
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://www.github.com/codeteenager' },
  ],
  sidebar:{
    '/pages/':[
      '',
      'ff',
      'test'
    ]
  }
  // sidebar: [
  //   {
  //     title:"前端",
  //     children:[
  //      { title:"01",path:"/pages/test/test"}
  //     ]
  //   }

  // ],
    // sidebar: 'auto', // 侧边栏配置
    // sidebarDepth: 2, // 侧边栏显示2级
  }
};