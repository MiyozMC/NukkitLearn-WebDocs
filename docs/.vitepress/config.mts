import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NukkitLearn",
  description: "史上最详细的Nukkit教程",
  base: '/NukkitLearn-WebDocs/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'BiliBili', link: 'https://www.bilibili.com/video/BV1R34y1D7FW' },
      { text: 'Github', link: 'https://github.com/Server-Founder/NukkitLearn' }
    ],

    sidebar: [
      {
        text: '前言',
        items: [
          { text: '前言', link: '/前言/前言' },
          { text: '如何搭建环境', link: '/前言/如何搭建环境' }
        ]
      },
      {
        text: '第一章 基础准备',
        items: [
          { text: '前言', link: '/第一章/1-0_前言' },
          { text: '如何搭建开发环境', link: '/第一章/1-1_什么是插件' },
          { text: '什么是插件', link: '/第一章/1-2_了解PluginBase' },
          { text: '如何编写监听器', link: '/第一章/1-3_如何编写监听器' },
          { text: '如何编写指令', link: '/第一章/1-4_如何编写命令' },
          { text: '如何使用配置文件', link: '/第一章/1-5_如何使用配置文件' },
          { text: '如何编写plugin.yml', link: '/第一章/1-6_如何编写plugin.yml' },
          { text: '练习案例', link: '/第一章/1-7_案例玩家进入信息等效果' }
        ]
      },
      {
        text: '第二章 Nukkit工具与事件',
        items: [
          { text: '前言', link: '/第二章/2-0_前言' },
          { text: '主要事件介绍', link: '/第二章/2-1_主要的事件介绍' },
          { text: '事件相关方法', link: '/第二章/2-2_事件相关方法' },
          { text: '计时器介绍', link: '/第二章/2-3_计时器的介绍' },
          { text: 'Server类与PluginManager类', link: '/第二章/2-4_Server类和PluginManager类' },
          { text: '实体类方法介绍', link: '/第二章/2-5_各种实体类的方法介绍' },
          { text: '工具类介绍', link: '/第二章/2-6_各种工具类的介绍' },
          { text: '发送数据包', link: '/第二章/2-7_如何发送数据包' }
        ]
      },
      {
        text: '第三章 Nukkit UI操作',
        items: [
          { text: '前言', link: '/第三章/3-0_前言' },
          { text: 'Form种类介绍', link: '/第三章/3-1_主要的Form种类及介绍' },
          { text: '使用NukkitX原生Form', link: '/第三章/3-2_使用NukkitX自带的Form创建UI' },
          { text: '使用外部GUI库', link: '/第三章/3-3_使用外部库GUI创建UI' },
          { text: 'Easy4Form库介绍', link: '/第三章/3-4_介绍一个新的外部库-Easy4Form' }
        ]
      },
      {
        text: '章外篇',
        items: [
          { text: '索引-常用工具的网页索引', link: '/章外篇/索引-常用工具的网页索引' },
          { text: '章外篇之二-多语言解决方案', link: '/章外篇/章外篇之二-多语言解决方案' },
          { text: '章外篇之三-使用groovy编写您的项目', link: '/章外篇/章外篇之三-使用groovy编写您的项目' },
          { text: '章外篇之四-使用DSL编写您的静态配置文件', link: '/章外篇/章外篇之四-使用DSL编写您的静态配置文件' },
          { text: '章外篇之一-用指令设置玩家实体大小(简单版)', link: '/章外篇/章外篇之一-用指令设置玩家实体大小(简单版)' }
        ]
      },
      {
        text: '更新日志',
        items: [
          { text: '更新日志', link: '/更新日志/CHANGE_LOG' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'NukkitLearn 教程的编写、排版、格式规范', link: '/其他/NukkitLearn 教程的编写、排版、格式规范' },
          { text: '第不知道多少章 - 示例文档', link: '/其他/第不知道多少章 - 示例文档' },
          { text: '专栏-关于我们常见的那些坑', link: '/其他/专栏-关于我们常见的那些坑' }
        ]
      }
    ],

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Server-Founder/NukkitLearn' }
    ]
  }
})
