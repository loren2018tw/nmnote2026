import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
// @ts-ignore
import obsidian from "markdown-it-obsidian";
import footnote from "markdown-it-footnote";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/nmnote2026/",
  ignoreDeadLinks: true,

  title: "Loren's 網管筆記",
  description: "如果你知道往那走，世界會為你讓出路～～",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "VirtualBox", link: "/10-VirtualBox/05-vm_vs_container" },
      { text: "Librenms", link: "/20-librenms/10-librenms_introduce" },
    ],

    sidebar: generateSidebar([
      {
        documentRootPath: "/docs",
        scanStartPath: "10-VirtualBox",
        resolvePath: "/10-VirtualBox/",
        removePrefixAfterOrdering: true,
        prefixSeparator: "-",
        useTitleFromFileHeading: true,
      },
      {
        documentRootPath: "/docs",
        scanStartPath: "WSL2",
        resolvePath: "/WSL2/",
        removePrefixAfterOrdering: true,
        prefixSeparator: "-",
        useTitleFromFileHeading: true,
      },
      {
        documentRootPath: "/docs",
        scanStartPath: "20-librenms",
        resolvePath: "/20-librenms/",
        removePrefixAfterOrdering: true,
        prefixSeparator: "-",
        collapsed: true, // 預設折疊選單
        useTitleFromFileHeading: true, // 使用文章內的 H1 作為側邊欄標題
      },
    ]),

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
    lastUpdated: {
      text: "最後更新時間",
    },
  },

  markdown: {
    config: (md) => {
      // 啟用 Obsidian 語法支援
      md.use(
        obsidian({
          // 這是關鍵：告訴插件圖片存放在哪裡
          // 如果你的圖片跟 md 檔在同一個資料夾，保持預設即可
        }),
      );
      md.use(footnote);
    },
  },
});
