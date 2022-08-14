<template>
    <div>
      <div class="transform-read-mode-btn" @click="jumpToOriginal" aria-label="全文阅读" data-balloon-pos="left">
        <FontIcon icon="repo"/>
        </div>
    </div>

</template>

<script>

export default {
  data() {
    return {
    };
  },
  mounted: function(){
    //debugger
    //document.querySelectorAll('#toc .toc-wrapper ul')[0].querySelectorAll('li')[0].classList.add('active')
    //给左侧toc添加激活效果
    console.log('当前在shardings中');
    this.$nextTick(()=>{
      const hash = window.location.hash
      console.log(hash)
      this.goAnchor(hash)
    })
  },
  methods: {
    jumpToOriginal() {
      const fullPageName = this.getFullPageName()
      console.log(fullPageName)
      const href = window.location.href
      const originalHrefPrefix = href.replace(fullPageName,'').replace('/shardings','')
      console.log(originalHrefPrefix)
      const pageName = this.getPageName()
      const originalPageName = pageName.substr(0,pageName.indexOf('-'))
      console.log(originalPageName)
      const activeTitle = document.querySelector('#toc .active a')
      if(typeof(activeTitle) == undefined) {
        console.log('XXX');
      }
   //   var activeTitleText = activeTitle.innerText.trim()
      const hash = window.location.hash.replace('-c','-o')
      /**
       * 如果是下面情况,不用处理,直接使用
       * 1.是一级标题
       * 2.是第0章一级标题 博客内容介绍
       * 3.是第0章第1节二级标题 博客内容概述
       * 4.是第0章第2节二级标题 博客内容大纲
       */
      const originalHref = originalHrefPrefix + originalPageName + '.html' + hash
      console.log(originalHref)
      window.location.href = originalHref
    },
    //用锚点跳跃的方法
    goAnchor (selector) {
      document.querySelector(selector).scrollIntoView({
        behavior:"smooth"
      })
    },
    /**
     * 取当前页面名称(不带后缀名)
     */
    getPageName(){
      var a = location.href;
      var b = a.split("/");
      var c = b.slice(b.length-1, b.length).toString(String).split(".");
      return c.slice(0, 1)[0];
    },
    /**
     * 取当前页面名称(带后缀名)
     */
    getFullPageName(){
      var strUrl=location.href;
      var arrUrl=strUrl.split("/");
      var strPage=arrUrl[arrUrl.length-1];
      return strPage;
    },
  },
}
</script>
<style scoped>
  .transform-read-mode-btn {
    border-width: 0;
    background-color: transparent;
    cursor: pointer;
    position: fixed ;
    right: 5rem;
    bottom: 3.95rem;
    z-index: 100;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    background-color: var(--c-bg, #fff);
    color: var(--c-brand, #3eaf7c);
    box-shadow: 2px 2px 10px 0 var(--card-shadow);
    text-align: center;
    line-height: 1rem;
  }
  .transform-read-mode-btn:hover {
    opacity: 0.8;
  }
  .transform-read-mode-btn span {
    font-size:2.1rem;
    position: absolute;
    top: 35%;
    left: 15%;
  }
</style>