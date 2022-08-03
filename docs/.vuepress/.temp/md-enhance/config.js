import { defineClientConfig } from "@vuepress/client";
import Presentation from "D:/repository/workspace/VSCode/PERSONAL/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "D:/repository/workspace/VSCode/PERSONAL/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "D:/repository/workspace/VSCode/PERSONAL/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});