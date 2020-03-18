module.exports = {
  title: 'Think Free',
  description: 'Welcome to your think-free site',
  base: '/',
  themeConfig: {
    website: {
      domain: 'www.tennetcn.com',
      beian: '鄂ICP备15015935号-1'
    },
    editLinks: true,
    sidebarDepth: 2,
    lastUpdated: '最后更新时间',
    nav: [
      { text: '首页', link: '/' },
      { text: 'ThinkFree', link: '/thinkfree/' }
    ],
    sidebar: {
      '/thinkfree/': getThinkFreeSidebar()
    }
  }
}

function getThinkFreeSidebar(){
  return [
    {
      title: '更新日志',
      path: 'changelog'
    },
    {
      title: 'FreeBase',
      collapsable: true,
      children: [
        'freebase/corestarter',
        'freebase/datastarter'
      ]
    }
  ]
}