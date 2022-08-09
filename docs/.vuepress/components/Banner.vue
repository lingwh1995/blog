<template>
    <div>
    <!-- <h1>{{msg}}</h1> -->
      <iframe
        :src="localtion"
        width="100%"
        height="400rm"
        frameborder="0"
        scrolling="No"
        leftmargin="0"
        topmargin="0"
      />
    </div>

</template>

<script>

export default {
  props:['localtion'],
  data() {
    return {
      msg: "我是一个引入到MD中的Vue组件",
    };
  }
};
</script>

<style>

/**格子背景 */
/* css-selector {
    background-color: #F1F1F5;
    background-image: linear-gradient(90deg, rgba(200, 0, 0, 0.15) 10%, rgba(0, 0, 0, 0) 10%) 
    ,linear-gradient(0deg,rgba(200, 0, 0, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 0.4rem 0.4rem;
} */
</style>
