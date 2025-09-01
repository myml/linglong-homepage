// SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.
//
// SPDX-License-Identifier: LGPL-3.0-or-later

import sidebarShare from "./sidebar/share.json";
import versions from "./versions";

let sidebarAll = {};

for (let version of versions.list) {
  const sidebar = await import(`./sidebar/${version}.json`).then(
    (m) => m.default as { zh: object; en: object }
  );
  if (version == versions.default) {
    sidebarAll["/guide"] = sidebar.zh;
    sidebarAll["/en/guide"] = sidebar.en;
  } else {
    sidebarAll["/guide/" + version] = sidebar.zh;
    sidebarAll["/en/guide/" + version] = sidebar.en;
  }
}

Object.keys(sidebarAll).forEach((path) => {
  if (path.includes("en")) {
    sidebarAll[path].push(...sidebarShare.en);
  } else {
    sidebarAll[path].push(...sidebarShare.zh);
  }
});

export const sidebar = sidebarAll;
