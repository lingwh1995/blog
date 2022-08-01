import { defineClientConfig } from "@vuepress/client";
import Presentation from "D:/repository/workspace/VSCode/PERSONAL/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});