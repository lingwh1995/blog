import{_ as a,o as r,c as t,a as c,b as e,r as d}from"./app.af9ae738.js";const s={},i=e(`<h1 id="_5-ubuntucentos\u642D\u5EFArancher" tabindex="-1"><a class="header-anchor" href="#_5-ubuntucentos\u642D\u5EFArancher" aria-hidden="true">#</a> 5.UbuntuCentos\u642D\u5EFARancher</h1><h2 id="_5-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_5-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 5.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A

\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\uFF0C\u672C\u7AE0\u8282\u5185\u5BB9\u4E2D\u56FE\u7247\u8F83\u5C11\uFF0C\u4E3B\u8981\u4EE5\u5B9E\u7528\u4E3A\u4E3B\uFF0C\u6240\u6709\u4EE3\u7801
\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002
</code></pre><h2 id="_5-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_5-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> 5.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</h2>`,4),u=e(`<pre><code>\u4E0B\u8F7Drancher
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull rancher/server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8rancher
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -di --name=rancher -p9003:8080 rancher/server:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528rancher\u6269\u5BB9/\u7F29\u5BB9\u6CE8\u610F\u4E8B\u9879
\u5982\u679C\u8981\u4F7F\u7528\u6269\u5BB9\u6216\u8005\u7F29\u5BB9\u529F\u80FD,\u4E0D\u8981\u914D\u7F6Eeureka\u7684\u5982\u4E0B\u4FE1\u606F
eureka:
  instance:
	#\u4F7F\u7528rancher\u6269\u5BB9\u4E0D\u80FD\u914D\u7F6Einstance-id,\u5426\u5219\u4F1A\u51FA\u95EE\u9898
	#instance-id: \${spring.application.name} 
	#\u4F7F\u7528rancher\u6269\u5BB9\u4E0D\u80FD\u914D\u7F6Eiip-address,\u5426\u5219\u4F1A\u51FA\u95EE\u9898
	#ip-address: 192.168.0.4				
</code></pre>`,5);function o(h,l){const n=d("Markmap");return r(),t("div",null,[i,c(n,{localtion:"/enhance/markmap/environment/ubuntu/ubuntu2012/chapter/ubuntu2012-outline5-chapter5.html"}),u])}var _=a(s,[["render",o],["__file","ubuntu2012-chapter-5.UbuntuCentos\u642D\u5EFARancher.html.vue"]]);export{_ as default};
