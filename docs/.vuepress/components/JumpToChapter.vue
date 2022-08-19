<template>
    <div>
      <div class="transform-read-mode-btn" @click="jumpToChapter" aria-label="章节阅读" data-balloon-pos="left">
        <FontIcon icon="list"/>
      </div>  
    </div>

</template>

<script>

export default {
  data() {
    return {
      Title1Json: {},
    };
  },
  mounted: function(){
    console.log('当前在Original中');
    this.$nextTick(()=>{
      const hash = window.location.hash
      console.log(hash+'--')
      this.goAnchor(hash)
    })

    //获取一级标题json对象
    const Title1Json = {}
    document.querySelectorAll('#toc .toc-list .level1').forEach(function(item,index){
      var title = item.innerHTML
      const title1Index = title.substr(0,title.indexOf('.')+1)
      Title1Json[title1Index]=title.replace(title1Index,'')
    })
    this.Title1Json = Title1Json
    console.log(Title1Json)
  },
  methods: {
    jumpToChapter() {
      const fullPageName = this.getFullPageName()
      const href = window.location.href
      const chapterHrefPrefix = href.replace(fullPageName,'')
      const pageName = this.getPageName()
      const activeTitle = document.querySelector('#toc .active a')
      var activeTitle1Text = activeTitle.innerText.trim()
      if(activeTitle1Text == '博客内容介绍') {
        activeTitle1Text = '0.' + activeTitle1Text
      }
      var hash = window.location.hash.replace('-o','-c')
      //判断hash格式,如果是二级或者二级以上标题,需要进行特殊处理
      const reg = '^#' + pageName + '_[1-9]-[0-9]?-c$'
      if(hash.match(reg)){
        //获取该二级或者二级以上标题对应的一级标题
        console.log('是二级包括二级以上的标题')
        console.log(hash.match(reg))
        const title1Index = hash.match(reg)[0].replace('#' + pageName +'_','').substr(0,1) + '.';
        console.log(title1Index)
        const title1Text = this.Title1Json[title1Index]
        console.log(title1Text)
        activeTitle1Text = title1Index + title1Text
        console.log(activeTitle1Text+'===')
      }
      /**
       * 如果是下面情况,不用处理,直接使用
       * 1.是一级标题
       * 2.是第0章一级标题 博客内容介绍
       * 3.是第0章第1节二级标题 博客内容概述
       * 4.是第0章第2节二级标题 博客内容大纲
       */
      const chapterHref = chapterHrefPrefix + 'shardings/' + pageName + '-chapter-' + activeTitle1Text + '.html' + hash
      console.log(chapterHref)
      window.location.href = chapterHref
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
    goAnchor (selector) {
      document.querySelector(selector).scrollIntoView({
        behavior:"smooth"
      })
    }
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