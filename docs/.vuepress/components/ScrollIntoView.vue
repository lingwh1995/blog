<template>
    <div>
      <div class="transform-read-mode-btn" @click="transformReadMode">
        <FontIcon icon="list" style="font-size:2rem"/>
      </div>  
    </div>

</template>

<script>

export default {
  props:['localtion'],
  data() {
    return {
      msg: "我是一个引入到MD中的Vue组件",
      Title1Json: {},
    };
  },
  mounted: function(){
    const href = window.location.href
    //下面两个条件都满足说明当前是在某个shardings页面中，否则在文章合集页面中
    if(href.indexOf('/shardings/') != -1 && href.indexOf('-chapter-') != -1) {
      this.$nextTick(()=>{
        const hash = window.location.hash
        this.goAnchor(hash)
        //获取一级标题json对象
        const Title1Json = {}
        document.querySelectorAll('#toc .toc-list .level1').forEach(function(item,index){
          var title = item.innerHTML
          const key = title.substr(0,title.indexOf('.')+1)
          Title1Json[key]=item.innerHTML
        })
        this.Title1Json = Title1Json
      })
    }else{
      console.log('当前不在shardings中');
    }

  },
  methods: {
    transformReadMode() {
      const fullPageName = this.getFullPageName()
      const href = window.location.href
      //下面两个条件都满足说明当前是在某个shardings页面中，否则在文章合集页面中
      if(href.indexOf('/shardings/') != -1 && href.indexOf('-chapter-') != -1) {
      }else {
        const chapterHrefPrefix = href.replace(fullPageName,'')
        const pageName = this.getPageName()
        const activeTitle = document.querySelector('#toc .active a')
        var activeTitleText = activeTitle.innerText.trim()
        if(activeTitleText == '博客内容介绍') {
          activeTitleText = '0.' + activeTitleText
        }
        var hash = window.location.hash
        //console.log(hash)
        //判断hash格式 ，如果符合一级标题格式则直接使用，不用进行特殊处理
        if(hash.match('^#[1-9][0-9]?\.$')){
          console.log('是一级标题')
        }else {
          //获取该二级或者二级以上标题对应的一级标题
          console.log('是二级包括二级以上的标题')
          const titleJsonKey = hash.match('^#_[1-9][0-9]?')[0].substr(2) + '.';
          const titleText = this.Title1Json[titleJsonKey]
          activeTitleText = titleText
          //获取锚点
          const anchorPointId = hash.match('^#_[1-9]-[1-9][0-9]?')[0].substr(2);
          console.log(anchorPointId)
          hash = '#centos_' + anchorPointId
        }
        //如果不是二级包括二级以上的标题
        const chapterHref = chapterHrefPrefix + 'shardings/' + pageName + '-chapter-' + activeTitleText + '.html' + hash
        console.log(chapterHref)
        window.location.href = chapterHref
      }
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
    position: fixed !important;
    right: 7rem;
    bottom: 4rem;
    z-index: 100;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    background-color: var(--c-bg, #fff);
    color: var(--c-brand, #3eaf7c);
    border: 1px solid red;
    /* box-shadow: 2px 2px 10px 0 var(--card-shadow); */
    vertical-align:middle;
    text-align: center;
    line-height: 3rem;
  }
</style>