import { sidebar } from "vuepress-theme-hope";

export default sidebar([
        {
        text: "windows搭建开发环境",
        link: "/blogs/environment/windows/windows.md",
        icon: "creative",
        // 仅在 `/blogs/environment/windows/` 激活
        activeMatch: "^/blogs/environment/windows/$"
      },
      {
        text: "centos搭建开发环境",
        link: "/blogs/environment/centos/centos7.md",
        icon: "creative",
        // 仅在 `/blogs/environment/windows/` 激活
        activeMatch: "^/blogs/environment/centos/$",
      },
      {
        text: "springcloud-eureka",
        link: "/blogs/backend/springcloud/springcloud-eureka.md",
        icon: "question",
        // 会在 `/blogs/backend/springcloud/` 开头的路径激活
        // 所以当你前往 `/blogs/backend/springcloud/springcloud-eureka.html` 时也会激活
        activeMatch: "^/blogs/backend/springcloud/$",
      },
      {
        // 必要的，分组的标题文字
        text: "分组 1",
        // 可选的, 分组标题对应的图标
        icon: "tip",
        // 可选的, 分组标题对应的链接
        link: "/foo/",
        // 可选的，会添加到每个 item 链接地址之前
        prefix: "/foo/",
        // 可选的, 设置分组是否可以折叠，默认值是 false,
        collapsable: true,
        // 必要的，分组的子项目
        children: [
          "README.md" /* /foo/index.html */,
          /* ... */
          "geo.md" /* /foo/geo.html */,
        ],
      },
      {
        text: "分组 2",
        prefix: "/ray/",
        children: [
          /* ... */
          "bar.md" /* /ray/bar.html */,
          "baz.md" /* /ray/baz.html */,
        ],
      },
]);
