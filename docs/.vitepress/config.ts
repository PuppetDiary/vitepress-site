import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '个人随笔系统',
  description: '记录生活中的音乐、电影、书籍、运动和旅游',
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '音乐', link: '/music/' },
      { text: '电影', link: '/movies/' },
      { text: '书籍', link: '/books/' },
      { text: '运动', link: '/sports/' },
      { text: '旅游', link: '/travel/' },
      { text: '日志', link: '/logs/' }
    ],

    sidebar: {
      '/music/': [
        {
          text: '音乐',
          items: [
            { text: '流行音乐', link: '/music/pop/' },
            { text: '爵士乐', link: '/music/jazz/' },
            { text: '古典音乐', link: '/music/classical/' }
          ]
        }
      ],
      '/movies/': [
        {
          text: '电影',
          items: [
            { text: '剧情片', link: '/movies/drama/' },
            { text: '纪录片', link: '/movies/documentary/' },
            { text: '动画片', link: '/movies/animation/' }
          ]
        }
      ],
      '/books/': [
        {
          text: '书籍',
          items: [
            { text: '小说', link: '/books/fiction/' },
            { text: '非虚构', link: '/books/non-fiction/' },
            { text: '技术书籍', link: '/books/technical/' }
          ]
        }
      ],
      '/sports/': [
        {
          text: '运动',
          items: [
            { text: '跑步', link: '/sports/running/' },
            { text: '健身', link: '/sports/fitness/' },
            { text: '户外运动', link: '/sports/outdoor/' }
          ]
        }
      ],
      '/travel/': [
        {
          text: '旅游',
          items: [
            { text: '国内旅游', link: '/travel/domestic/' },
            { text: '国际旅游', link: '/travel/international/' }
          ]
        }
      ],
      '/logs/': [
        {
          text: '日志系统',
          items: [
            { text: '系统概览', link: '/logs/' },
            { text: '模块状态', link: '/logs/modules/' },
            { text: '详细日志', link: '/logs/details/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/project_personal-notes' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present'
    }
  }
})
