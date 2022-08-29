<template>
  <div>
    <div class="toggle-show-all-sidebars-btn" @click="toggleShowAllSidebars" v-bind:aria-label="ariaLabelText" data-balloon-pos="left">
      <FontIcon icon="a-archivecatalogue-fill"/>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      ariaLabelText: '显示所有博客侧边栏',
      currentSidebarTextIndex: 0,
      showAllSidebars: true
    };
  },
  mounted: function(){
    this.$nextTick(()=>{
      const currentSidebarTextTemp = document.querySelector('.page-title h1').innerText
      const currentSidebarText = currentSidebarTextTemp.substr(currentSidebarTextTemp.indexOf('>')+1,currentSidebarTextTemp.lastIndexOf('-'))
      const sidebarLinks = document.querySelector('.sidebar-links').children
      for(var i=0; i<sidebarLinks.length; i++) {
        const sidebarText = sidebarLinks[i].querySelector('.title').innerText
        if(currentSidebarText == sidebarText) {
          this.$data.currentSidebarTextIndex = i;
          break;
        }
      }
      for(var j=0; j<sidebarLinks.length; j++) {
        if(j != this.$data.currentSidebarTextIndex) {
          sidebarLinks[j].style.display="none"
        }else{
          sidebarLinks[j].style.display="block"
        }
      }
    })
  },
  methods: {
    toggleShowAllSidebars() {
      const sidebarLinks = document.querySelector('.sidebar-links').children
      console.log(this.$data.showAllSidebars)
      if(this.$data.showAllSidebars) {
        for(var i=0; i<sidebarLinks.length; i++) {
          sidebarLinks[i].style.display="block"
        }
        this.$data.ariaLabelText = "只显示当前博客侧边栏"
      }else{
        for(var j=0; j<sidebarLinks.length; j++) {
          if(j != this.$data.currentSidebarTextIndex) {
            sidebarLinks[j].style.display="none"
          }else{
            sidebarLinks[j].style.display="block"
          }
        }
        this.$data.ariaLabelText = "显示所有博客侧边栏"
      }
      this.$data.showAllSidebars = this.$data.showAllSidebars ? false : true
    }
  },
}
</script>
<style scoped>
  .toggle-show-all-sidebars-btn {
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
  .toggle-show-all-sidebars-btn:hover {
    opacity: 0.8;
  }
  .toggle-show-all-sidebars-btn span {
    font-size:2.1rem;
    position: absolute;
    top: 35%;
    left: 15%;
  }
</style>