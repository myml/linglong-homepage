// SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.
//
// SPDX-License-Identifier: LGPL-3.0-or-later

import versions from "./versions";
export function getNav(lang: string) {
  const prefix = lang === "en" ? "/en" : "";
  const items = versions.list.map((ver) => {
    if (ver === versions.default) {
      return { text: ver, link: prefix + `/guide/start/whatis.html` };
    }
    return { text: ver, link: prefix + `/guide/${ver}/start/whatis.html` };
  });
  return items;
}
