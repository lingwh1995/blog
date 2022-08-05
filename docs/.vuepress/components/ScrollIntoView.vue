<template>
    <div>
    <!-- <h1>{{msg}}</h1> -->
    </div>

</template>

<script>

export default {
  props:['localtion'],
  data() {
    return {
      msg: "我是一个引入到MD中的Vue组件",
    };
  },
  mounted: function(){
    const sidebar = document.querySelector('.sidebar ul')
    sidebar.onclick = function(){
        const activeSidebar = document.querySelector('li')
        //shoop.setAttribute("tittle","a lot of goods")
        console.log(this)
        // const currentToc = document.querySelector('#toc .active');
        // console.log(currentToc)
        //currentToc.scrollIntoView(true)
        //this.click
    }
    

  }
};
</script>
