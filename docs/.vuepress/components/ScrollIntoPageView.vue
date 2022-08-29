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
      const hash = window.location.hash
      if(hash.trim() != '') {
        this.goAnchor(decodeURI(hash))
      }
    })

  },
  methods: {
    goAnchor (selector) {
      document.querySelector(selector).scrollIntoView({
        behavior:"smooth"
      })
    }
  },
}
</script>