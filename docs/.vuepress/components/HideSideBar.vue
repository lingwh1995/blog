<template>

</template>

<script>

export default {
  data() {
    return {
    };
  },
  mounted: function(){
    const currentSidebarTextTemp = document.querySelector('.page-title h1').innerText
    const currentSidebarText = currentSidebarTextTemp.substr(currentSidebarTextTemp.indexOf('>')+1,currentSidebarTextTemp.lastIndexOf('-'))
    var currentSidebarTextIndex ;
    const sidebarLinks = document.querySelector('.sidebar-links').children
    for(var i=0; i<sidebarLinks.length; i++) {
      const sidebarText = sidebarLinks[i].querySelector('.title').innerText
      if(currentSidebarText == sidebarText) {
        currentSidebarTextIndex = i;
        break;
      }
    }
    for(var i=0; i<sidebarLinks.length; i++) {
      if(i != currentSidebarTextIndex) {
        sidebarLinks[i].style.display="none"
      }
    }
  },
  methods: {
  },
}
</script>