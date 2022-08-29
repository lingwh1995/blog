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
      showAllSidebars: true
    };
  },
  mounted: function(){
    this.$nextTick(()=>{
      const currentSidebarTextTemp = document.querySelector('.page-title h1').innerText
      const currentSidebarText = currentSidebarTextTemp.substr(currentSidebarTextTemp.indexOf('>')+1,currentSidebarTextTemp.lastIndexOf('-'))
      const sidebarLinks = document.querySelector('.sidebar-links')
      const sidebarLinkItems = sidebarLinks.children
      for(var i=0; i<sidebarLinkItems.length; i++) {
        const sidebarText = sidebarLinkItems[i].querySelector('.title').innerText
        if(currentSidebarText == sidebarText) {
          const currentSidebar = sidebarLinks.removeChild(sidebarLinks.children[i])
          sidebarLinks.insertBefore(currentSidebar,sidebarLinks.children[0])
          break;
        }
      }
      for(var j=0; j<sidebarLinkItems.length; j++) {
        if(j == 0) {
          sidebarLinkItems[j].style.display="block"
        }else{
          sidebarLinkItems[j].style.display="none"
        }
      }
    })
  },
  methods: {
    toggleShowAllSidebars() {
      const sidebarLinks = document.querySelector('.sidebar-links')
      const sidebarLinkItems = sidebarLinks.children
      if(this.$data.showAllSidebars) {
        for(var i=0; i<sidebarLinkItems.length; i++) {
          sidebarLinkItems[i].style.display="block"
        }
        this.$data.ariaLabelText = "只显示当前博客侧边栏"
      }else{
        for(var j=0; j<sidebarLinkItems.length; j++) {
          if(j == 0) {
            sidebarLinkItems[j].style.display="block"
          }else{
            sidebarLinkItems[j].style.display="none"
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