import{_ as r,o as t,c,a as s,d as e,e as n,b as d,r as o}from"./app.1d41eb5c.js";const i={},l=e("h1",{id:"_5-centos\u642D\u5EFArancher",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-centos\u642D\u5EFArancher","aria-hidden":"true"},"#"),n(" 5.Centos\u642D\u5EFARancher")],-1),h=e("h2",{id:"_5-1-\u7AE0\u8282\u5927\u7EB2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-1-\u7AE0\u8282\u5927\u7EB2","aria-hidden":"true"},"#"),n(" 5.1.\u7AE0\u8282\u5927\u7EB2")],-1),p=d(`<pre><code>\u4E0B\u8F7Drancher
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
</code></pre>`,5);function _(m,u){const a=o("Markmap");return t(),c("div",null,[l,h,s(a,{localtion:"/markmap/environment/centos/chapter/centos7-outline5-chapter5.html"}),p])}var x=r(i,[["render",_],["__file","centos7-chapter-5.Centos\u642D\u5EFARancher.html.vue"]]);export{x as default};
