<!--
SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.

SPDX-License-Identifier: LGPL-3.0-or-later 
-->

<script setup>
import DefaultTheme from "vitepress/theme";
import VersionTips from "./versionTips.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-before>
      <VersionTips></VersionTips>
    </template>
  </Layout>
</template>
