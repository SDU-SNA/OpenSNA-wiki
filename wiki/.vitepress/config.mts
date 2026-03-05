import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'OpenSNA',
  description: 'OpenSNA 项目文档',
  base: '/OpenSNA-wiki/',
  
  lastUpdated: true,
  
  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'GitHub', link: 'https://github.com/SDU-SNA/OpenSNA-wiki' }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '概览', link: '/api/' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SDU-SNA/OpenSNA-wiki' }
    ],
    
    editLink: {
      pattern: 'https://github.com/SDU-SNA/OpenSNA-wiki/edit/main/wiki/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present OpenSNA Team'
    },
    
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            processTerm: (term) => {
              const segmenter = new Intl.Segmenter('zh', { granularity: 'word' })
              if (!segmenter) return term
              return Array.from(segmenter.segment(term))
                .map(({ segment }) => segment)
            }
          }
        }
      }
    },
    
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
