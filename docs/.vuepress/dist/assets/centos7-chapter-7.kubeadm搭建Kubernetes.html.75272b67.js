const e=JSON.parse('{"key":"v-053b7631","path":"/blogs/environment/centos/centos7/shardings/centos7-chapter-7.kubeadm%E6%90%AD%E5%BB%BAKubernetes.html","title":"\u5728Centos7\u4E0A\u642D\u5EFA\u5F00\u53D1\u73AF\u5883-7.kubeadm\u642D\u5EFAKubernetes","lang":"zh-CN","frontmatter":{"title":"\u5728Centos7\u4E0A\u642D\u5EFA\u5F00\u53D1\u73AF\u5883-7.kubeadm\u642D\u5EFAKubernetes","description":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u7279\u522B\u8BF4\u660E,\u6240\u6709\u8282\u70B9\u8BBE\u7F6E\u5BF9\u5E94\u4E3B\u673A\u540D,\u6240\u6709\u8282\u70B9\u4FEE\u6539hosts,\u6240\u6709\u8282\u70B9\u5173\u95EDSELinux,\u6240\u6709\u8282\u70B9\u5173\u95ED\u9632\u706B\u5899,\u6240\u6709\u8282\u70B9\u5B89\u88C5docker,\u6240\u6709\u8282\u70B9\u5B89\u88C5k8s\u6240\u9700\u7EC4\u4EF6,\u6240\u6709\u8282\u70B9\u542F\u52A8kubelet\u548Cdocker,\u6240\u6709\u5173\u95EDswap,\u7528kubeadm \u521D\u59CB\u5316\u96C6\u7FA4,\u5176\u4ED6\u8282\u70B9\u8FDE\u63A5\u5230Master\u8282\u70B9,\u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u96C6\u7FA4,\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6,\u5728master\u4E0A\u67E5\u770B\u96C6\u7FA4\u8282\u70B9\\t\\t\\t,\u542F\u52A8\u6545\u969C\u89E3\u51B3,\u57FA\u7840\u547D\u4EE4,\u90E8\u7F72\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5230k8s\u4E2D,\u53EF\u89C6\u5316\u9762\u677Fkuboard,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\uFF0C\u672C\u7AE0\u8282\u5185\u5BB9\u4E2D\u56FE\u7247\u8F83\u5C11\uFF0C\u4E3B\u8981\u4EE5\u5B9E\u7528\u4E3A\u4E3B\uFF0C\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002","headerDepth":4,"isOriginal":true,"category":["\u73AF\u5883\u642D\u5EFA"],"star":false,"tag":["kubeadm\u642D\u5EFAk8s\u96C6\u7FA4","docker","k8s\u7F51\u7EDC\u63D2\u4EF6","k8s\u53EF\u89C6\u5316","etcd\u96C6\u7FA4","kube-apiserver","kube-controller-manager","kube-scheduler","kubectl","nginx","keepalive","\u9AD8\u53EF\u7528"],"date":"2020-02-15T00:00:00.000Z","head":[["meta",{"name":"keywords","content":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u7279\u522B\u8BF4\u660E,\u6240\u6709\u8282\u70B9\u8BBE\u7F6E\u5BF9\u5E94\u4E3B\u673A\u540D,\u6240\u6709\u8282\u70B9\u4FEE\u6539hosts,\u6240\u6709\u8282\u70B9\u5173\u95EDSELinux,\u6240\u6709\u8282\u70B9\u5173\u95ED\u9632\u706B\u5899,\u6240\u6709\u8282\u70B9\u5B89\u88C5docker,\u6240\u6709\u8282\u70B9\u5B89\u88C5k8s\u6240\u9700\u7EC4\u4EF6,\u6240\u6709\u8282\u70B9\u542F\u52A8kubelet\u548Cdocker,\u6240\u6709\u5173\u95EDswap,\u7528kubeadm \u521D\u59CB\u5316\u96C6\u7FA4,\u5176\u4ED6\u8282\u70B9\u8FDE\u63A5\u5230Master\u8282\u70B9,\u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u96C6\u7FA4,\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6,\u5728master\u4E0A\u67E5\u770B\u96C6\u7FA4\u8282\u70B9\\t\\t\\t,\u542F\u52A8\u6545\u969C\u89E3\u51B3,\u57FA\u7840\u547D\u4EE4,\u90E8\u7F72\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5230k8s\u4E2D,\u53EF\u89C6\u5316\u9762\u677Fkuboard,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\uFF0C\u672C\u7AE0\u8282\u5185\u5BB9\u4E2D\u56FE\u7247\u8F83\u5C11\uFF0C\u4E3B\u8981\u4EE5\u5B9E\u7528\u4E3A\u4E3B\uFF0C\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/blogs/environment/centos/centos7/shardings/centos7-chapter-7.kubeadm%E6%90%AD%E5%BB%BAKubernetes.html"}],["meta",{"property":"og:site_name","content":"\u6B64\u751F\u631A\u7231\u4E07\u5B9D\u8DEF"}],["meta",{"property":"og:title","content":"\u5728Centos7\u4E0A\u642D\u5EFA\u5F00\u53D1\u73AF\u5883-7.kubeadm\u642D\u5EFAKubernetes"}],["meta",{"property":"og:description","content":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u7279\u522B\u8BF4\u660E,\u6240\u6709\u8282\u70B9\u8BBE\u7F6E\u5BF9\u5E94\u4E3B\u673A\u540D,\u6240\u6709\u8282\u70B9\u4FEE\u6539hosts,\u6240\u6709\u8282\u70B9\u5173\u95EDSELinux,\u6240\u6709\u8282\u70B9\u5173\u95ED\u9632\u706B\u5899,\u6240\u6709\u8282\u70B9\u5B89\u88C5docker,\u6240\u6709\u8282\u70B9\u5B89\u88C5k8s\u6240\u9700\u7EC4\u4EF6,\u6240\u6709\u8282\u70B9\u542F\u52A8kubelet\u548Cdocker,\u6240\u6709\u5173\u95EDswap,\u7528kubeadm \u521D\u59CB\u5316\u96C6\u7FA4,\u5176\u4ED6\u8282\u70B9\u8FDE\u63A5\u5230Master\u8282\u70B9,\u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u96C6\u7FA4,\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6,\u5728master\u4E0A\u67E5\u770B\u96C6\u7FA4\u8282\u70B9\\t\\t\\t,\u542F\u52A8\u6545\u969C\u89E3\u51B3,\u57FA\u7840\u547D\u4EE4,\u90E8\u7F72\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5230k8s\u4E2D,\u53EF\u89C6\u5316\u9762\u677Fkuboard,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\uFF0C\u672C\u7AE0\u8282\u5185\u5BB9\u4E2D\u56FE\u7247\u8F83\u5C11\uFF0C\u4E3B\u8981\u4EE5\u5B9E\u7528\u4E3A\u4E3B\uFF0C\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"kubeadm\u642D\u5EFAk8s\u96C6\u7FA4"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"k8s\u7F51\u7EDC\u63D2\u4EF6"}],["meta",{"property":"article:tag","content":"k8s\u53EF\u89C6\u5316"}],["meta",{"property":"article:tag","content":"etcd\u96C6\u7FA4"}],["meta",{"property":"article:tag","content":"kube-apiserver"}],["meta",{"property":"article:tag","content":"kube-controller-manager"}],["meta",{"property":"article:tag","content":"kube-scheduler"}],["meta",{"property":"article:tag","content":"kubectl"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:tag","content":"keepalive"}],["meta",{"property":"article:tag","content":"\u9AD8\u53EF\u7528"}],["meta",{"property":"article:published_time","content":"2020-02-15T00:00:00.000Z"}]]},"excerpt":"","headers":[{"level":1,"title":"7.kubeadm\u642D\u5EFAKubernetes","slug":"_7-kubeadm\u642D\u5EFAkubernetes","children":[{"level":2,"title":"7.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0","slug":"_7-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0","children":[]},{"level":2,"title":"7.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2","slug":"_7-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2","children":[]},{"level":2,"title":"7.3.\u7279\u522B\u8BF4\u660E","slug":"_7-3-\u7279\u522B\u8BF4\u660E","children":[]},{"level":2,"title":"7.4.\u6240\u6709\u8282\u70B9\u8BBE\u7F6E\u5BF9\u5E94\u4E3B\u673A\u540D","slug":"_7-4-\u6240\u6709\u8282\u70B9\u8BBE\u7F6E\u5BF9\u5E94\u4E3B\u673A\u540D","children":[]},{"level":2,"title":"7.5.\u6240\u6709\u8282\u70B9\u4FEE\u6539hosts","slug":"_7-5-\u6240\u6709\u8282\u70B9\u4FEE\u6539hosts","children":[]},{"level":2,"title":"7.6.\u6240\u6709\u8282\u70B9\u5173\u95EDSELinux","slug":"_7-6-\u6240\u6709\u8282\u70B9\u5173\u95EDselinux","children":[]},{"level":2,"title":"7.7.\u6240\u6709\u8282\u70B9\u5173\u95ED\u9632\u706B\u5899","slug":"_7-7-\u6240\u6709\u8282\u70B9\u5173\u95ED\u9632\u706B\u5899","children":[]},{"level":2,"title":"7.8.\u6240\u6709\u8282\u70B9\u5B89\u88C5docker","slug":"_7-8-\u6240\u6709\u8282\u70B9\u5B89\u88C5docker","children":[]},{"level":2,"title":"7.9.\u6240\u6709\u8282\u70B9\u5B89\u88C5k8s\u6240\u9700\u7EC4\u4EF6","slug":"_7-9-\u6240\u6709\u8282\u70B9\u5B89\u88C5k8s\u6240\u9700\u7EC4\u4EF6","children":[]},{"level":2,"title":"7.10.\u6240\u6709\u8282\u70B9\u542F\u52A8kubelet\u548Cdocker","slug":"_7-10-\u6240\u6709\u8282\u70B9\u542F\u52A8kubelet\u548Cdocker","children":[]},{"level":2,"title":"7.11.\u6240\u6709\u5173\u95EDswap","slug":"_7-11-\u6240\u6709\u5173\u95EDswap","children":[]},{"level":2,"title":"7.12.\u7528kubeadm \u521D\u59CB\u5316\u96C6\u7FA4","slug":"_7-12-\u7528kubeadm-\u521D\u59CB\u5316\u96C6\u7FA4","children":[]},{"level":2,"title":"7.13.\u5176\u4ED6\u8282\u70B9\u8FDE\u63A5\u5230Master\u8282\u70B9","slug":"_7-13-\u5176\u4ED6\u8282\u70B9\u8FDE\u63A5\u5230master\u8282\u70B9","children":[]},{"level":2,"title":"7.14.\u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u96C6\u7FA4","slug":"_7-14-\u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u96C6\u7FA4","children":[]},{"level":2,"title":"7.15.\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6","slug":"_7-15-\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6","children":[]},{"level":2,"title":"7.16.\u5728master\u4E0A\u67E5\u770B\u96C6\u7FA4\u8282\u70B9","slug":"_7-16-\u5728master\u4E0A\u67E5\u770B\u96C6\u7FA4\u8282\u70B9","children":[]},{"level":2,"title":"7.17.\u542F\u52A8\u6545\u969C\u89E3\u51B3","slug":"_7-17-\u542F\u52A8\u6545\u969C\u89E3\u51B3","children":[]},{"level":2,"title":"7.18.\u57FA\u7840\u547D\u4EE4","slug":"_7-18-\u57FA\u7840\u547D\u4EE4","children":[]},{"level":2,"title":"7.19.\u90E8\u7F72\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5230k8s\u4E2D","slug":"_7-19-\u90E8\u7F72\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5230k8s\u4E2D","children":[]},{"level":2,"title":"7.20.\u53EF\u89C6\u5316\u9762\u677Fkuboard","slug":"_7-20-\u53EF\u89C6\u5316\u9762\u677Fkuboard","children":[]}]}],"git":{},"readingTime":{"minutes":6.88,"words":2065},"copyright":"\u8457\u4F5C\u6743\u5F52lingwh\u6240\u6709\\n\u57FA\u4E8ECopyright 2021 \xA9 open linux lingwh\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://github.com/lingwh1995/blogs/environment/centos/centos7/shardings/centos7-chapter-7.kubeadm%E6%90%AD%E5%BB%BAKubernetes.html","filePathRelative":"blogs/environment/centos/centos7/shardings/centos7-chapter-7.kubeadm\u642D\u5EFAKubernetes.md","localizedDate":"2020\u5E742\u670815\u65E5"}');export{e as data};
