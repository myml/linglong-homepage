// SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.
//
// SPDX-License-Identifier: LGPL-3.0-or-later

import DefaultTheme from "vitepress/theme";
import MyLayout from "./MyLayout.vue";

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖默认 Layout
  Layout: MyLayout,
};
