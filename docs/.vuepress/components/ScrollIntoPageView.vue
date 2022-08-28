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
      console.log(hash+'--')
      this.goAnchor(hash)
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