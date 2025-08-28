<script setup>
// SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.
//
// SPDX-License-Identifier: LGPL-3.0-or-later

import { useRoute } from "vitepress";
import { computed } from "vue";
import versions from "../versions";

const route = useRoute();

const tips = computed(() => {
  let lang = "zhHash";
  let version = versions.default;
  let path = route.path;
  if (path.startsWith("/en/")) {
    path = path.slice(3);
    lang = "en";
  }
  if (path.startsWith("/guide/")) {
    const v = path.split("/")[2];
    if (v[0] > "0" && v[0] < "9") {
      version = v;
    }
  }
  return {
    zhHash: `此文档适用于 ${version} , 请使用 ll-cli --version 检查您的玲珑程序版本。`,
    en: `This document is applicable to version ${version}, Please use the command ll-cli --version to check your linyaps program version.`,
  }[lang];
});
</script>

<template>
  <div class="tip custom-block">
    <p class="custom-block-title">TIP</p>
    <p>{{ tips }}</p>
  </div>
  <br />
</template>
