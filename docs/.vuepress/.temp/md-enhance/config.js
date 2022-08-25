import { defineClientConfig } from "@vuepress/client";
import Mermaid from "D:/repository/workspace/VSCode/PERSONAL/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "D:/repository/workspace/VSCode/PERSONAL/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "D:/repository/workspace/VSCode/PERSONAL/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "D:/repository/workspace/VSCode/PERSONAL/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    
  }
});