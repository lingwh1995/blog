<template>

</template>

<script>

export default {
  data() {
    return {
    };
  },
  mounted: function(){
    this.$nextTick(()=>{
      const currentSidebarTextTemp = document.querySelector('.page-title h1').innerText
      const currentSidebarText = currentSidebarTextTemp.substr(currentSidebarTextTemp.indexOf('>')+1,currentSidebarTextTemp.lastIndexOf('-'))
      //console.log(currentSidebarText)
      var currentSidebarTextIndex ;
      const sidebarLinks = document.querySelector('.sidebar-links').children
      for(var i=0; i<sidebarLinks.length; i++) {
        const sidebarText = sidebarLinks[i].querySelector('.title').innerText
        if(currentSidebarText == sidebarText) {
          currentSidebarTextIndex = i;
          break;
        }
      }
      //console.log(currentSidebarTextIndex)
      for(var i=0; i<sidebarLinks.length; i++) {
        //console.log(sidebarLinks[i])
        if(i != currentSidebarTextIndex) {
          console.log(i)
          sidebarLinks[i].style.display="none"
        }else{
          sidebarLinks[i].style.display="block"
        }
      }
    })
  },
  methods: {
  },
}
</script>