export function generateVersions() {
    const versions = ['', '1.8.x', '1.7.x', '1.6.x', '1.5.x']; // 保留空用来判断默认路由
    return {
      defaultVersion: '1.9.x',  // 默认显示版本号
      versions: versions
    };
}
