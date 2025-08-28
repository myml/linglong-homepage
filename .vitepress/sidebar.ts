// SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.
//
// SPDX-License-Identifier: LGPL-3.0-or-later

import sidebarShare from "./sidebar.share.json";

const sidebarAll = {
  "/guide": [
    {
      collapsible: true,
      text: "开始",
      items: [
        {
          text: "概述",
          link: "/guide/start/whatis.md",
        },
        {
          text: "安装",
          link: "/guide/start/install.md",
        },
        {
          text: "发布日志",
          link: "/guide/start/release_note.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-cli",
      items: [
        {
          text: "简介",
          link: "/guide/ll-cli/introduction.md",
        },
        {
          text: "列出已安装的应用",
          link: "/guide/ll-cli/list.md",
        },
        {
          text: "从远程仓库查询应用",
          link: "/guide/ll-cli/query.md",
        },
        {
          text: "安装应用",
          link: "/guide/ll-cli/install.md",
        },
        {
          text: "显示应用信息",
          link: "/guide/ll-cli/info.md",
        },
        {
          text: "显示应用导出文件",
          link: "/guide/ll-cli/content.md",
        },
        {
          text: "运行应用",
          link: "/guide/ll-cli/run.md",
        },
        {
          text: "卸载应用",
          link: "/guide/ll-cli/uninstall.md",
        },
        {
          text: "移除未使用的最小系统或运行时",
          link: "/guide/ll-cli/prune.md",
        },
        {
          text: "更新应用",
          link: "/guide/ll-cli/update.md",
        },
        {
          text: "查看运行中的应用",
          link: "/guide/ll-cli/ps.md",
        },
        {
          text: "进入容器内部",
          link: "/guide/ll-cli/exec.md",
        },
        {
          text: "强制退出应用",
          link: "/guide/ll-cli/kill.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-builder",
      items: [
        {
          text: "简介",
          link: "/guide/ll-builder/introduction.md",
        },
        {
          text: "Base和Runtime介绍",
          link: "/guide/ll-builder/runtime.md",
        },
        {
          text: "创建项目",
          link: "/guide/ll-builder/create.md",
        },
        {
          text: "构建应用",
          link: "/guide/ll-builder/build.md",
        },
        {
          text: "简单示例",
          link: "/guide/ll-builder/demo.md",
        },
        {
          text: "打包规范",
          link: "/guide/ll-builder/linyaps_package_spec.md",
        },
        {
          text: "运行应用",
          link: "/guide/ll-builder/run.md",
        },
        {
          text: "转换 appimage",
          link: "/guide/ll-builder/convert.md",
        },
        {
          text: "导出 layer 文件",
          link: "/guide/ll-builder/export.md",
        },
        {
          text: "配置文件",
          link: "/guide/ll-builder/manifests.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-pica",
      items: [
        {
          text: "简介",
          link: "/guide/ll-pica/introduction.md",
        },
        {
          text: "安装",
          link: "/guide/ll-pica/install.md",
        },
        {
          text: "初始化配置",
          link: "/guide/ll-pica/init.md",
        },
        {
          text: "转换应用",
          link: "/guide/ll-pica/convert.md",
        },
        {
          text: "添加依赖",
          link: "/guide/ll-pica/adep.md",
        },
        {
          text: "转换配置文件简介",
          link: "/guide/ll-pica/manifests.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-appimage-convert",
      items: [
        {
          text: "简介",
          link: "/guide/ll-appimage-convert/introduction.md",
        },
        {
          text: "转换应用",
          link: "/guide/ll-appimage-convert/convert-appimage.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-flatpak-convert",
      items: [
        {
          text: "简介",
          link: "/guide/ll-flatpak-convert/introduction.md",
        },
        {
          text: "转换应用",
          link: "/guide/ll-flatpak-convert/convert-flatpak.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "调试应用",
      items: [
        {
          text: "IDE中调试应用",
          link: "/guide/debug/debug.md",
        },
        {
          text: "常见构建问题",
          link: "/guide/debug/ll-builder-faq.md",
        },
        {
          text: "常见运行问题",
          link: "/guide/debug/faq.md",
        },
        {
          text: "常见转换问题",
          link: "/guide/debug/ll-pica-faq.md",
        },
      ],
    },
  ],
  "/en/guide": [
    {
      collapsible: true,
      text: "Getting Started",
      items: [
        {
          text: "summary",
          link: "/en/guide/start/whatis.md",
        },
        {
          text: "Install",
          link: "/en/guide/start/install.md",
        },
        {
          text: "Release Note",
          link: "/en/guide/start/release_note.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-cli",
      items: [
        {
          text: "Introduction",
          link: "/en/guide/ll-cli/introduction.md",
        },
        {
          text: "List Installed Apps",
          link: "/en/guide/ll-cli/list.md",
        },
        {
          text: "Query Apps From Remote",
          link: "/en/guide/ll-cli/query.md",
        },
        {
          text: "Install App",
          link: "/en/guide/ll-cli/install.md",
        },
        {
          text: "Display App Information",
          link: "/en/guide/ll-cli/info.md",
        },
        {
          text: "Display App Exported Files",
          link: "/en/guide/ll-cli/content.md",
        },
        {
          text: "Run App",
          link: "/en/guide/ll-cli/run.md",
        },
        {
          text: "Uninstall App",
          link: "/en/guide/ll-cli/uninstall.md",
        },
        {
          text: "Remove The Unused Base or Runtime",
          link: "/en/guide/ll-cli/prune.md",
        },
        {
          text: "Update App",
          link: "/en/guide/ll-cli/update.md",
        },
        {
          text: "View Running Apps",
          link: "/en/guide/ll-cli/ps.md",
        },
        {
          text: "Attach To Container",
          link: "/en/guide/ll-cli/exec.md",
        },
        {
          text: "Force Quit App",
          link: "/en/guide/ll-cli/kill.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-builder",
      items: [
        {
          text: "Introduction",
          link: "/en/guide/ll-builder/introduction.md",
        },
        {
          text: "Create Project",
          link: "/en/guide/ll-builder/create.md",
        },
        {
          text: "Build App",
          link: "/en/guide/ll-builder/build.md",
        },
        {
          text: "Simple example",
          link: "/en/guide/ll-builder/demo.md",
        },
        {
          text: "Packaging specifications",
          link: "/en/guide/ll-builder/linyaps_package_spec.md",
        },
        {
          text: "Run Compiled App",
          link: "/en/guide/ll-builder/run.md",
        },
        {
          text: "Convert AppImage",
          link: "/en/guide/ll-builder/convert.md",
        },
        {
          text: "Export Layer File",
          link: "/en/guide/ll-builder/export.md",
        },
        {
          text: "Manifests",
          link: "/en/guide/ll-builder/manifests.md",
        },
        {
          text: "App To Store",
          link: "/en/guide/ll-builder/github.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-pica",
      items: [
        {
          text: "Introduction",
          link: "/en/guide/ll-pica/introduction.md",
        },
        {
          text: "Install",
          link: "/en/guide/ll-pica/install.md",
        },
        {
          text: "Initialization configuration",
          link: "/en/guide/ll-pica/init.md",
        },
        {
          text: "Conversion application",
          link: "/en/guide/ll-pica/convert.md",
        },
        {
          text: "Add dependency",
          link: "/en/guide/ll-pica/adep.md",
        },
        {
          text: "Manifests",
          link: "/en/guide/ll-pica/manifests.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-appimage-convert",
      items: [
        {
          text: "Introduction",
          link: "/en/guide/ll-appimage-convert/introduction.md",
        },
        {
          text: "Conversion application",
          link: "/en/guide/ll-appimage-convert/convert-appimage.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-flatpak-convert",
      items: [
        {
          text: "Introduction",
          link: "/en/guide/ll-flatpak-convert/introduction.md",
        },
        {
          text: "Conversion application",
          link: "/en/guide/ll-flatpak-convert/convert-flatpak.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "Debug App",
      items: [
        {
          text: "Debug App In IDE",
          link: "/en/guide/debug/debug.md",
        },
        {
          text: "Build FAQ",
          link: "/en/guide/debug/ll-builder-faq.md",
        },
        {
          text: "Run FAQ",
          link: "/en/guide/debug/faq.md",
        },
        {
          text: "Convert FAQ",
          link: "/en/guide/debug/ll-pica-faq.md",
        },
      ],
    },
  ],
  "/1.8.x/guide": [
    {
      collapsible: true,
      text: "开始",
      items: [
        {
          text: "概述",
          link: "/1.8.x/guide/start/whatis.md",
        },
        {
          text: "安装",
          link: "/1.8.x/guide/start/install.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-cli",
      items: [
        {
          text: "简介",
          link: "/1.8.x/guide/ll-cli/introduction.md",
        },
        {
          text: "列出已安装的应用",
          link: "/1.8.x/guide/ll-cli/list.md",
        },
        {
          text: "从远程仓库查询应用",
          link: "/1.8.x/guide/ll-cli/search.md",
        },
        {
          text: "安装应用",
          link: "/1.8.x/guide/ll-cli/install.md",
        },
        {
          text: "运行应用",
          link: "/1.8.x/guide/ll-cli/run.md",
        },
        {
          text: "卸载应用",
          link: "/1.8.x/guide/ll-cli/uninstall.md",
        },
        {
          text: "更新应用",
          link: "/1.8.x/guide/ll-cli/update.md",
        },
        {
          text: "查看运行中的应用",
          link: "/1.8.x/guide/ll-cli/ps.md",
        },
        {
          text: "进入容器内部",
          link: "/1.8.x/guide/ll-cli/exec.md",
        },
        {
          text: "强制退出应用",
          link: "/1.8.x/guide/ll-cli/kill.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-builder",
      items: [
        {
          text: "简介",
          link: "/1.8.x/guide/ll-builder/introduction.md",
        },
        {
          text: "Base和Runtime介绍",
          link: "/1.8.x/guide/ll-builder/runtime.md",
        },
        {
          text: "创建项目",
          link: "/1.8.x/guide/ll-builder/create.md",
        },
        {
          text: "构建应用",
          link: "/1.8.x/guide/ll-builder/build.md",
        },
        {
          text: "简单示例",
          link: "/1.8.x/guide/start/how_to_use.md",
        },
        {
          text: "打包规范",
          link: "/1.8.x/guide/ll-builder/linyaps_package_spec.md",
        },
        {
          text: "运行应用",
          link: "/1.8.x/guide/ll-builder/run.md",
        },
        {
          text: "转换 appimage",
          link: "/1.8.x/guide/ll-builder/convert.md",
        },
        {
          text: "导出 layer 文件",
          link: "/1.8.x/guide/ll-builder/export.md",
        },
        {
          text: "配置文件",
          link: "/1.8.x/guide/ll-builder/manifests.md",
        },
        {
          text: "上架应用到商店",
          link: "/1.8.x/guide/ll-builder/github.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-pica",
      items: [
        {
          text: "简介",
          link: "/1.8.x/guide/ll-pica/introduction.md",
        },
        {
          text: "安装",
          link: "/1.8.x/guide/ll-pica/install.md",
        },
        {
          text: "初始化配置",
          link: "/1.8.x/guide/ll-pica/init.md",
        },
        {
          text: "转换应用",
          link: "/1.8.x/guide/ll-pica/convert.md",
        },
        {
          text: "添加依赖",
          link: "/1.8.x/guide/ll-pica/adep.md",
        },
        {
          text: "转换配置文件简介",
          link: "/1.8.x/guide/ll-pica/manifests.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-appimage-convert",
      items: [
        {
          text: "简介",
          link: "/1.8.x/guide/ll-appimage-convert/introduction.md",
        },
        {
          text: "转换应用",
          link: "/1.8.x/guide/ll-appimage-convert/convert-appimage.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-flatpak-convert",
      items: [
        {
          text: "简介",
          link: "/1.8.x/guide/ll-flatpak-convert/introduction.md",
        },
        {
          text: "转换应用",
          link: "/1.8.x/guide/ll-flatpak-convert/convert-flatpak.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "调试应用",
      items: [
        {
          text: "IDE中调试应用",
          link: "/1.8.x/guide/debug/debug.md",
        },
        {
          text: "常见构建问题",
          link: "/1.8.x/guide/debug/ll-builder-faq.md",
        },
        {
          text: "常见运行问题",
          link: "/1.8.x/guide/debug/faq.md",
        },
        {
          text: "常见转换问题",
          link: "/1.8.x/guide/debug/ll-pica-faq.md",
        },
      ],
    },
  ],
  "/en/1.8.x/guide": [
    {
      collapsible: true,
      text: "Getting Started",
      items: [
        {
          text: "summary",
          link: "/en/1.8.x/guide/start/whatis.md",
        },
        {
          text: "Install",
          link: "/en/1.8.x/guide/start/install.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-cli",
      items: [
        {
          text: "Introduction",
          link: "/en/1.8.x/guide/ll-cli/introduction.md",
        },
        {
          text: "List Installed Apps",
          link: "/en/1.8.x/guide/ll-cli/list.md",
        },
        {
          text: "Query Apps From Remote",
          link: "/en/1.8.x/guide/ll-cli/query.md",
        },
        {
          text: "Install App",
          link: "/en/1.8.x/guide/ll-cli/install.md",
        },
        {
          text: "Run App",
          link: "/en/1.8.x/guide/ll-cli/run.md",
        },
        {
          text: "Uninstall App",
          link: "/en/1.8.x/guide/ll-cli/uninstall.md",
        },
        {
          text: "Update App",
          link: "/en/1.8.x/guide/ll-cli/update.md",
        },
        {
          text: "View Running Apps",
          link: "/en/1.8.x/guide/ll-cli/ps.md",
        },
        {
          text: "Attach To Container",
          link: "/en/1.8.x/guide/ll-cli/exec.md",
        },
        {
          text: "Force Quit App",
          link: "/en/1.8.x/guide/ll-cli/kill.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-builder",
      items: [
        {
          text: "Introduction",
          link: "/en/1.8.x/guide/ll-builder/introduction.md",
        },
        {
          text: "Create Project",
          link: "/en/1.8.x/guide/ll-builder/create.md",
        },
        {
          text: "Build App",
          link: "/en/1.8.x/guide/ll-builder/build.md",
        },
        {
          text: "Simple example",
          link: "/en/1.8.x/guide/start/how_to_use.md",
        },
        {
          text: "Packaging specifications",
          link: "/en/1.8.x/guide/ll-builder/linyaps_package_spec.md",
        },
        {
          text: "Run Compiled App",
          link: "/en/1.8.x/guide/ll-builder/run.md",
        },
        {
          text: "Convert AppImage",
          link: "/en/1.8.x/guide/ll-builder/convert.md",
        },
        {
          text: "Export Layer File",
          link: "/en/1.8.x/guide/ll-builder/export.md",
        },
        {
          text: "Manifests",
          link: "/en/1.8.x/guide/ll-builder/manifests.md",
        },
        {
          text: "App To Store",
          link: "/en/1.8.x/guide/ll-builder/github.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-pica",
      items: [
        {
          text: "Introduction",
          link: "/en/1.8.x/guide/ll-pica/introduction.md",
        },
        {
          text: "Install",
          link: "/en/1.8.x/guide/ll-pica/install.md",
        },
        {
          text: "Initialization configuration",
          link: "/en/1.8.x/guide/ll-pica/init.md",
        },
        {
          text: "Conversion application",
          link: "/en/1.8.x/guide/ll-pica/convert.md",
        },
        {
          text: "Add dependency",
          link: "/en/1.8.x/guide/ll-pica/adep.md",
        },
        {
          text: "Manifests",
          link: "/en/1.8.x/guide/ll-pica/manifests.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-appimage-convert",
      items: [
        {
          text: "Introduction",
          link: "/en/1.8.x/guide/ll-appimage-convert/introduction.md",
        },
        {
          text: "Conversion application",
          link: "/en/1.8.x/guide/ll-appimage-convert/convert-appimage.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-flatpak-convert",
      items: [
        {
          text: "Introduction",
          link: "/en/1.8.x/guide/ll-flatpak-convert/introduction.md",
        },
        {
          text: "Conversion application",
          link: "/en/1.8.x/guide/ll-flatpak-convert/convert-flatpak.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "Debug App",
      items: [
        {
          text: "Debug App In IDE",
          link: "/en/1.8.x/guide/debug/debug.md",
        },
        {
          text: "Build FAQ",
          link: "/en/1.8.x/guide/debug/ll-builder-faq.md",
        },
        {
          text: "Run FAQ",
          link: "/en/1.8.x/guide/debug/faq.md",
        },
        {
          text: "Convert FAQ",
          link: "/en/1.8.x/guide/debug/ll-pica-faq.md",
        },
      ],
    },
  ],
  "/1.7.x/guide": [
    {
      collapsible: true,
      text: "开始",
      items: [
        {
          text: "概述",
          link: "/1.7.x/guide/start/whatis.md",
        },
        {
          text: "安装",
          link: "/1.7.x/guide/start/install.md",
        },
        {
          text: "简单示例",
          link: "/1.7.x/guide/start/how_to_use.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-cli",
      items: [
        {
          text: "简介",
          link: "/1.7.x/guide/ll-cli/introduction.md",
        },
        {
          text: "列出已安装的应用",
          link: "/1.7.x/guide/ll-cli/list.md",
        },
        {
          text: "从远程仓库查询应用",
          link: "/1.7.x/guide/ll-cli/query.md",
        },
        {
          text: "安装应用",
          link: "/1.7.x/guide/ll-cli/install.md",
        },
        {
          text: "运行应用",
          link: "/1.7.x/guide/ll-cli/run.md",
        },
        {
          text: "卸载应用",
          link: "/1.7.x/guide/ll-cli/uninstall.md",
        },
        {
          text: "更新应用",
          link: "/1.7.x/guide/ll-cli/update.md",
        },
        {
          text: "查看运行中的应用",
          link: "/1.7.x/guide/ll-cli/ps.md",
        },
        {
          text: "进入容器内部",
          link: "/1.7.x/guide/ll-cli/exec.md",
        },
        {
          text: "强制退出应用",
          link: "/1.7.x/guide/ll-cli/kill.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-builder",
      items: [
        {
          text: "简介",
          link: "/1.7.x/guide/ll-builder/introduction.md",
        },
        {
          text: "创建项目",
          link: "/1.7.x/guide/ll-builder/create.md",
        },
        {
          text: "构建应用",
          link: "/1.7.x/guide/ll-builder/build.md",
        },
        {
          text: "运行应用",
          link: "/1.7.x/guide/ll-builder/run.md",
        },
        {
          text: "转换 appimage",
          link: "/1.7.x/guide/ll-builder/convert.md",
        },
        {
          text: "导出 layer 文件",
          link: "/1.7.x/guide/ll-builder/export.md",
        },
        {
          text: "配置文件",
          link: "/1.7.x/guide/ll-builder/manifests.md",
        },
        {
          text: "上架应用到商店",
          link: "/1.7.x/guide/ll-builder/github.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-pica",
      items: [
        {
          text: "简介",
          link: "/1.7.x/guide/ll-pica/introduction.md",
        },
        {
          text: "初始化配置",
          link: "/1.7.x/guide/ll-pica/init.md",
        },
        {
          text: "转换应用",
          link: "/1.7.x/guide/ll-pica/convert.md",
        },
        {
          text: "添加依赖",
          link: "/1.7.x/guide/ll-pica/adep.md",
        },
        {
          text: "转换配置文件简介",
          link: "/1.7.x/guide/ll-pica/manifests.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-appimage-convert",
      items: [
        {
          text: "简介",
          link: "/1.7.x/guide/ll-appimage-convert/introduction.md",
        },
        {
          text: "转换应用",
          link: "/1.7.x/guide/ll-appimage-convert/convert-appimage.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-flatpak-convert",
      items: [
        {
          text: "简介",
          link: "/1.7.x/guide/ll-flatpak-convert/introduction.md",
        },
        {
          text: "转换应用",
          link: "/1.7.x/guide/ll-flatpak-convert/convert-flatpak.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "调试应用",
      items: [
        {
          text: "IDE中调试应用",
          link: "/1.7.x/guide/debug/debug.md",
        },
        {
          text: "常见构建问题",
          link: "/1.7.x/guide/debug/ll-builder-faq.md",
        },
        {
          text: "常见运行问题",
          link: "/1.7.x/guide/debug/faq.md",
        },
        {
          text: "常见转换问题",
          link: "/1.7.x/guide/debug/ll-pica-faq.md",
        },
      ],
    },
  ],
  "/en/1.7.x/guide": [
    {
      collapsible: true,
      text: "Getting Started",
      items: [
        {
          text: "summary",
          link: "/en/1.7.x/guide/start/whatis.md",
        },
        {
          text: "Install",
          link: "/en/1.7.x/guide/start/install.md",
        },
        {
          text: "Simple example",
          link: "/en/1.7.x/guide/start/how_to_use.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-cli",
      items: [
        {
          text: "Introduction",
          link: "/en/1.7.x/guide/ll-cli/introduction.md",
        },
        {
          text: "List Installed Apps",
          link: "/en/1.7.x/guide/ll-cli/list.md",
        },
        {
          text: "Query Apps From Remote",
          link: "/en/1.7.x/guide/ll-cli/query.md",
        },
        {
          text: "Install App",
          link: "/en/1.7.x/guide/ll-cli/install.md",
        },
        {
          text: "Run App",
          link: "/en/1.7.x/guide/ll-cli/run.md",
        },
        {
          text: "Uninstall App",
          link: "/en/1.7.x/guide/ll-cli/uninstall.md",
        },
        {
          text: "Update App",
          link: "/en/1.7.x/guide/ll-cli/update.md",
        },
        {
          text: "View Running Apps",
          link: "/en/1.7.x/guide/ll-cli/ps.md",
        },
        {
          text: "Attach To Container",
          link: "/en/1.7.x/guide/ll-cli/exec.md",
        },
        {
          text: "Force Quit App",
          link: "/en/1.7.x/guide/ll-cli/kill.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-builder",
      items: [
        {
          text: "Introduction",
          link: "/en/1.7.x/guide/ll-builder/introduction.md",
        },
        {
          text: "Create Project",
          link: "/en/1.7.x/guide/ll-builder/create.md",
        },
        {
          text: "Build App",
          link: "/en/1.7.x/guide/ll-builder/build.md",
        },
        {
          text: "Run Compiled App",
          link: "/en/1.7.x/guide/ll-builder/run.md",
        },
        {
          text: "Convert AppImage",
          link: "/en/1.7.x/guide/ll-builder/convert.md",
        },
        {
          text: "Export Layer File",
          link: "/en/1.7.x/guide/ll-builder/export.md",
        },
        {
          text: "Manifests",
          link: "/en/1.7.x/guide/ll-builder/manifests.md",
        },
        {
          text: "App To Store",
          link: "/en/1.7.x/guide/ll-builder/github.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-pica",
      items: [
        {
          text: "ll-pica Introduction",
          link: "/en/1.7.x/guide/ll-pica/introduction.md",
        },
        {
          text: "Initialization configuration",
          link: "/en/1.7.x/guide/ll-pica/init.md",
        },
        {
          text: "Conversion application",
          link: "/en/1.7.x/guide/ll-pica/convert.md",
        },
        {
          text: "Add dependency",
          link: "/en/1.7.x/guide/ll-pica/adep.md",
        },
        {
          text: "Manifests",
          link: "/en/1.7.x/guide/ll-pica/manifests.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-appimage-convert",
      items: [
        {
          text: "Introduction",
          link: "/en/1.7.x/guide/ll-appimage-convert/introduction.md",
        },
        {
          text: "Conversion application",
          link: "/en/1.7.x/guide/ll-appimage-convert/convert-appimage.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-flatpak-convert",
      items: [
        {
          text: "Introduction",
          link: "/en/1.7.x/guide/ll-flatpak-convert/introduction.md",
        },
        {
          text: "Conversion application",
          link: "/en/1.7.x/guide/ll-flatpak-convert/convert-flatpak.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "Debug App",
      items: [
        {
          text: "Debug App In IDE",
          link: "/en/1.7.x/guide/debug/debug.md",
        },
        {
          text: "Build FAQ",
          link: "/en/1.7.x/guide/debug/ll-builder-faq.md",
        },
        {
          text: "Run FAQ",
          link: "/en/1.7.x/guide/debug/faq.md",
        },
        {
          text: "Convert FAQ",
          link: "/en/1.7.x/guide/debug/ll-pica-faq.md",
        },
      ],
    },
  ],
  "/1.6.x/guide": [
    {
      collapsible: true,
      text: "开始",
      items: [
        {
          text: "概述",
          link: "/1.6.x/guide/start/whatis.md",
        },
        {
          text: "安装",
          link: "/1.6.x/guide/start/install.md",
        },
        {
          text: "简单示例",
          link: "/1.6.x/guide/start/how_to_use.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-cli",
      items: [
        {
          text: "简介",
          link: "/1.6.x/guide/ll-cli/introduction.md",
        },
        {
          text: "列出已安装的应用",
          link: "/1.6.x/guide/ll-cli/list.md",
        },
        {
          text: "从远程仓库查询应用",
          link: "/1.6.x/guide/ll-cli/query.md",
        },
        {
          text: "安装应用",
          link: "/1.6.x/guide/ll-cli/install.md",
        },
        {
          text: "运行应用",
          link: "/1.6.x/guide/ll-cli/run.md",
        },
        {
          text: "卸载应用",
          link: "/1.6.x/guide/ll-cli/uninstall.md",
        },
        {
          text: "更新应用",
          link: "/1.6.x/guide/ll-cli/update.md",
        },
        {
          text: "查看运行中的应用",
          link: "/1.6.x/guide/ll-cli/ps.md",
        },
        {
          text: "进入容器内部",
          link: "/1.6.x/guide/ll-cli/exec.md",
        },
        {
          text: "强制退出应用",
          link: "/1.6.x/guide/ll-cli/kill.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-builder",
      items: [
        {
          text: "简介",
          link: "/1.6.x/guide/ll-builder/introduction.md",
        },
        {
          text: "创建项目",
          link: "/1.6.x/guide/ll-builder/create.md",
        },
        {
          text: "构建应用",
          link: "/1.6.x/guide/ll-builder/build.md",
        },
        {
          text: "运行应用",
          link: "/1.6.x/guide/ll-builder/run.md",
        },
        {
          text: "转换 appimage",
          link: "/1.6.x/guide/ll-builder/convert.md",
        },
        {
          text: "导出 layer 文件",
          link: "/1.6.x/guide/ll-builder/export.md",
        },
        {
          text: "配置文件",
          link: "/1.6.x/guide/ll-builder/manifests.md",
        },
        {
          text: "上架应用到商店",
          link: "/1.6.x/guide/ll-builder/github.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-pica",
      items: [
        {
          text: "简介",
          link: "/1.6.x/guide/ll-pica/introduction.md",
        },
        {
          text: "初始化配置",
          link: "/1.6.x/guide/ll-pica/init.md",
        },
        {
          text: "转换应用",
          link: "/1.6.x/guide/ll-pica/convert.md",
        },
        {
          text: "添加依赖",
          link: "/1.6.x/guide/ll-pica/adep.md",
        },
        {
          text: "转换配置文件简介",
          link: "/1.6.x/guide/ll-pica/manifests.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-appimage-convert",
      items: [
        {
          text: "简介",
          link: "/1.6.x/guide/ll-appimage-convert/introduction.md",
        },
        {
          text: "转换应用",
          link: "/1.6.x/guide/ll-appimage-convert/convert-appimage.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-flatpak-convert",
      items: [
        {
          text: "简介",
          link: "/1.6.x/guide/ll-flatpak-convert/introduction.md",
        },
        {
          text: "转换应用",
          link: "/1.6.x/guide/ll-flatpak-convert/convert-flatpak.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "调试应用",
      items: [
        {
          text: "IDE中调试应用",
          link: "/1.6.x/guide/debug/debug.md",
        },
        {
          text: "常见构建问题",
          link: "/1.6.x/guide/debug/ll-builder-faq.md",
        },
        {
          text: "常见运行问题",
          link: "/1.6.x/guide/debug/faq.md",
        },
        {
          text: "常见转换问题",
          link: "/1.6.x/guide/debug/ll-pica-faq.md",
        },
      ],
    },
  ],
  "/en/1.6.x/guide": [
    {
      collapsible: true,
      text: "Getting Started",
      items: [
        {
          text: "summary",
          link: "/en/1.6.x/guide/start/whatis.md",
        },
        {
          text: "Install",
          link: "/en/1.6.x/guide/start/install.md",
        },
        {
          text: "Simple example",
          link: "/en/1.6.x/guide/start/how_to_use.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-cli",
      items: [
        {
          text: "Introduction",
          link: "/en/1.6.x/guide/ll-cli/introduction.md",
        },
        {
          text: "List Installed Apps",
          link: "/en/1.6.x/guide/ll-cli/list.md",
        },
        {
          text: "Query Apps From Remote",
          link: "/en/1.6.x/guide/ll-cli/query.md",
        },
        {
          text: "Install App",
          link: "/en/1.6.x/guide/ll-cli/install.md",
        },
        {
          text: "Run App",
          link: "/en/1.6.x/guide/ll-cli/run.md",
        },
        {
          text: "Uninstall App",
          link: "/en/1.6.x/guide/ll-cli/uninstall.md",
        },
        {
          text: "Update App",
          link: "/en/1.6.x/guide/ll-cli/update.md",
        },
        {
          text: "View Running Apps",
          link: "/en/1.6.x/guide/ll-cli/ps.md",
        },
        {
          text: "Attach To Container",
          link: "/en/1.6.x/guide/ll-cli/exec.md",
        },
        {
          text: "Force Quit App",
          link: "/en/1.6.x/guide/ll-cli/kill.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-builder",
      items: [
        {
          text: "Introduction",
          link: "/en/1.6.x/guide/ll-builder/introduction.md",
        },
        {
          text: "Create Project",
          link: "/en/1.6.x/guide/ll-builder/create.md",
        },
        {
          text: "Build App",
          link: "/en/1.6.x/guide/ll-builder/build.md",
        },
        {
          text: "Run Compiled App",
          link: "/en/1.6.x/guide/ll-builder/run.md",
        },
        {
          text: "Convert AppImage",
          link: "/en/1.6.x/guide/ll-builder/convert.md",
        },
        {
          text: "Export Layer File",
          link: "/en/1.6.x/guide/ll-builder/export.md",
        },
        {
          text: "Manifests",
          link: "/en/1.6.x/guide/ll-builder/manifests.md",
        },
        {
          text: "App To Store",
          link: "/en/1.6.x/guide/ll-builder/github.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-pica",
      items: [
        {
          text: "ll-pica Introduction",
          link: "/en/1.6.x/guide/ll-pica/introduction.md",
        },
        {
          text: "Initialization configuration",
          link: "/en/1.6.x/guide/ll-pica/init.md",
        },
        {
          text: "Conversion application",
          link: "/en/1.6.x/guide/ll-pica/convert.md",
        },
        {
          text: "Add dependency",
          link: "/en/1.6.x/guide/ll-pica/adep.md",
        },
        {
          text: "Manifests",
          link: "/en/1.6.x/guide/ll-pica/manifests.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-appimage-convert",
      items: [
        {
          text: "Introduction",
          link: "/en/1.6.x/guide/ll-appimage-convert/introduction.md",
        },
        {
          text: "Conversion application",
          link: "/en/1.6.x/guide/ll-appimage-convert/convert-appimage.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-flatpak-convert",
      items: [
        {
          text: "Introduction",
          link: "/en/1.6.x/guide/ll-flatpak-convert/introduction.md",
        },
        {
          text: "Conversion application",
          link: "/en/1.6.x/guide/ll-flatpak-convert/convert-flatpak.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "Debug App",
      items: [
        {
          text: "Debug App In IDE",
          link: "/en/1.6.x/guide/debug/debug.md",
        },
        {
          text: "Build FAQ",
          link: "/en/1.6.x/guide/debug/ll-builder-faq.md",
        },
        {
          text: "Run FAQ",
          link: "/en/1.6.x/guide/debug/faq.md",
        },
        {
          text: "Convert FAQ",
          link: "/en/1.6.x/guide/debug/ll-pica-faq.md",
        },
      ],
    },
  ],
  "/1.5.x/guide": [
    {
      collapsible: true,
      text: "开始",
      items: [
        {
          text: "概述",
          link: "/1.5.x/guide/start/whatis.md",
        },
        {
          text: "安装",
          link: "/1.5.x/guide/start/install.md",
        },
        {
          text: "简单示例",
          link: "/1.5.x/guide/start/how_to_use.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-cli",
      items: [
        {
          text: "简介",
          link: "/1.5.x/guide/ll-cli/introduction.md",
        },
        {
          text: "列出已安装的应用",
          link: "/1.5.x/guide/ll-cli/list.md",
        },
        {
          text: "从远程仓库查询应用",
          link: "/1.5.x/guide/ll-cli/query.md",
        },
        {
          text: "安装应用",
          link: "/1.5.x/guide/ll-cli/install.md",
        },
        {
          text: "运行应用",
          link: "/1.5.x/guide/ll-cli/run.md",
        },
        {
          text: "卸载应用",
          link: "/1.5.x/guide/ll-cli/uninstall.md",
        },
        {
          text: "更新应用",
          link: "/1.5.x/guide/ll-cli/update.md",
        },
        {
          text: "查看运行中的应用",
          link: "/1.5.x/guide/ll-cli/ps.md",
        },
        {
          text: "进入容器内部",
          link: "/1.5.x/guide/ll-cli/exec.md",
        },
        {
          text: "强制退出应用",
          link: "/1.5.x/guide/ll-cli/kill.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-builder",
      items: [
        {
          text: "简介",
          link: "/1.5.x/guide/ll-builder/introduction.md",
        },
        {
          text: "创建项目",
          link: "/1.5.x/guide/ll-builder/create.md",
        },
        {
          text: "构建应用",
          link: "/1.5.x/guide/ll-builder/build.md",
        },
        {
          text: "运行应用",
          link: "/1.5.x/guide/ll-builder/run.md",
        },
        {
          text: "转换 appimage",
          link: "/1.5.x/guide/ll-builder/convert.md",
        },
        {
          text: "导出 layer 文件",
          link: "/1.5.x/guide/ll-builder/export.md",
        },
        {
          text: "配置文件",
          link: "/1.5.x/guide/ll-builder/manifests.md",
        },
        {
          text: "上架应用到商店",
          link: "/1.5.x/guide/ll-builder/github.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-pica",
      items: [
        {
          text: "简介",
          link: "/1.5.x/guide/ll-pica/introduction.md",
        },
        {
          text: "初始化配置",
          link: "/1.5.x/guide/ll-pica/init.md",
        },
        {
          text: "转换应用",
          link: "/1.5.x/guide/ll-pica/convert.md",
        },
        {
          text: "添加依赖",
          link: "/1.5.x/guide/ll-pica/adep.md",
        },
        {
          text: "转换配置文件简介",
          link: "/1.5.x/guide/ll-pica/manifests.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "调试应用",
      items: [
        {
          text: "IDE中调试应用",
          link: "/1.5.x/guide/debug/debug.md",
        },
        {
          text: "常见构建问题",
          link: "/1.5.x/guide/debug/ll-builder-faq.md",
        },
        {
          text: "常见运行问题",
          link: "/1.5.x/guide/debug/faq.md",
        },
        {
          text: "常见转换问题",
          link: "/1.5.x/guide/debug/ll-pica-faq.md",
        },
      ],
    },
  ],
  "/en/1.5.x/guide": [
    {
      collapsible: true,
      text: "Getting Started",
      items: [
        {
          text: "summary",
          link: "/en/1.5.x/guide/start/whatis.md",
        },
        {
          text: "Install",
          link: "/en/1.5.x/guide/start/install.md",
        },
        {
          text: "Simple example",
          link: "/en/1.5.x/guide/start/how_to_use.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-cli",
      items: [
        {
          text: "Introduction",
          link: "/en/1.5.x/guide/ll-cli/introduction.md",
        },
        {
          text: "List Installed Apps",
          link: "/en/1.5.x/guide/ll-cli/list.md",
        },
        {
          text: "Query Apps From Remote",
          link: "/en/1.5.x/guide/ll-cli/query.md",
        },
        {
          text: "Install App",
          link: "/en/1.5.x/guide/ll-cli/install.md",
        },
        {
          text: "Run App",
          link: "/en/1.5.x/guide/ll-cli/run.md",
        },
        {
          text: "Uninstall App",
          link: "/en/1.5.x/guide/ll-cli/uninstall.md",
        },
        {
          text: "Update App",
          link: "/en/1.5.x/guide/ll-cli/update.md",
        },
        {
          text: "View Running Apps",
          link: "/en/1.5.x/guide/ll-cli/ps.md",
        },
        {
          text: "Attach To Container",
          link: "/en/1.5.x/guide/ll-cli/exec.md",
        },
        {
          text: "Force Quit App",
          link: "/en/1.5.x/guide/ll-cli/kill.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-builder",
      items: [
        {
          text: "Introduction",
          link: "/en/1.5.x/guide/ll-builder/introduction.md",
        },
        {
          text: "Create Project",
          link: "/en/1.5.x/guide/ll-builder/create.md",
        },
        {
          text: "Build App",
          link: "/en/1.5.x/guide/ll-builder/build.md",
        },
        {
          text: "Run Compiled App",
          link: "/en/1.5.x/guide/ll-builder/run.md",
        },
        {
          text: "Convert AppImage",
          link: "/en/1.5.x/guide/ll-builder/convert.md",
        },
        {
          text: "Export Layer File",
          link: "/en/1.5.x/guide/ll-builder/export.md",
        },
        {
          text: "Manifests",
          link: "/en/1.5.x/guide/ll-builder/manifests.md",
        },
        {
          text: "App To Store",
          link: "/en/1.5.x/guide/ll-builder/github.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "ll-pica",
      items: [
        {
          text: "ll-pica Introduction",
          link: "/en/1.5.x/guide/ll-pica/introduction.md",
        },
        {
          text: "Initialization configuration",
          link: "/en/1.5.x/guide/ll-pica/init.md",
        },
        {
          text: "Conversion application",
          link: "/en/1.5.x/guide/ll-pica/convert.md",
        },
        {
          text: "Add dependency",
          link: "/en/1.5.x/guide/ll-pica/adep.md",
        },
        {
          text: "Manifests",
          link: "/en/1.5.x/guide/ll-pica/manifests.md",
        },
      ],
    },
    {
      collapsible: true,
      text: "Debug App",
      items: [
        {
          text: "Debug App In IDE",
          link: "/en/1.5.x/guide/debug/debug.md",
        },
        {
          text: "Build FAQ",
          link: "/en/1.5.x/guide/debug/ll-builder-faq.md",
        },
        {
          text: "Run FAQ",
          link: "/en/1.5.x/guide/debug/faq.md",
        },
        {
          text: "Convert FAQ",
          link: "/en/1.5.x/guide/debug/ll-pica-faq.md",
        },
      ],
    },
  ],
};

Object.keys(sidebarAll).forEach((path) => {
  sidebarAll[path].push(...sidebarShare);
});

export const sidebar = sidebarAll;
