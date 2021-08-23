
const sidebarConfig =  require("./sidebarConfig");

module.exports = {
  title: 'VuePress_Insect',
  description: 'VuePress_Insect',
  themeConfig: {
      // theme:"@vuepress/theme-default",
      // logo: '/logo.png',
      // nav: navConfig,
      sidebar: sidebarConfig,
      sidebarDepth: 2,
      displayAllHeaders: true,
      activeHeaderLinks: false,
  },
  base: "/",
  head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  host: "0.0.0.0",
  port: 80,
  // temp: "/path/to/@vuepress/core/.temp",
  dest: ".vuepress/dist",
  markdown:{
      lineNumbers: true,
      // markdown-it-anchor 的选项
      anchor:{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
      // markdown-it-toc 的选项
      toc: { includeLevel: [2,3] },
      /*extendMarkdown: md => {
          // 使用更多的 markdown-it 插件!
          md.use(require('markdown-it-xxx'))
      }*/
  }
};
