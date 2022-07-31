<template><div><h2 id="_4-3-docker常用命令" tabindex="-1"><a class="header-anchor" href="#_4-3-docker常用命令" aria-hidden="true">#</a> 4.3.docker常用命令</h2>
<pre><code>docker系统层面相关命令
启动docker
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>将docker加入开机启动
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看容器信息
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker info	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看容器详细信息
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker inspect 容器id	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看docker内存使用情况
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>df -Th /var/lib/docker	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>镜像相关命令
查看启动中的镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看容器中所有的镜像	
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker ps -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>停止启动容器中的镜像	
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker stop 镜像id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>删除镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker rmi 镜像id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>删除容器
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker rm 容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>从主机复制到容器  
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	docker cp host_path containerID:container_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>示例
docker cp docker-registry-frontend:/etc/apache2/sites-enabled/docker-site.conf /software
从容器复制到主机
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker cp containerID:container_path host_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>示例
docker cp ./docker-site.conf f936332ea159:/etc/apache2/sites-enabled/docker-site.conf
</code></pre>
</div></template>
