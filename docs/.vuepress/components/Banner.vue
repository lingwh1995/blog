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
