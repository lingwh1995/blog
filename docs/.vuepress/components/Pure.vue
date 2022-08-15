<!--切换纯净模式按钮-->
<template >
  <div class="nav-item">
    <a class="pure-button"
      href="javascript:void(0)"
      target="_self" 
      rel="noopener noreferrer" 
      aria-label="Github">
        <svg t="1660309811545" 
          class="icon" 
          viewBox="0 0 1024 1024" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          p-id="1872"
          v-bind:width="pureButtonBackgroundWidth"
          v-bind:height="pureButtonBackgroundHeight"
          style="vertical-align:middle;border-radius:0.2rem">
            <path d="M892.708571 0H131.291429A131.267048 131.267048 0 0 0 0 131.267048v761.417142A131.31581 131.31581 0 0 0 131.291429 1024h761.417142A131.31581 131.31581 0 0 0 1024 892.68419V131.267048A131.267048 131.267048 0 0 0 892.708571 0z" 
              v-bind:fill="pureButtonBackground" 
              p-id="1873">
            </path>
        </svg>
    </a>
    <div class="popup">
      <div class="item">
        <div class="title">当前模式</div>
        <div class="content">{{currentMode}}</div>
      </div>
      <div class="item" @click="goNormalMode">
        <div class="title">😄&nbsp;常规模式</div>
        <div class="content">页面色彩丰富</div>
      </div>
      <div class="item" @click="goPureMode">
        <div class="title">🍀&nbsp;纯净模式</div>
        <div class="content">页面色彩简单</div>  
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是一个引入到MD中的Vue组件",
      pureButtonBackground: "#3eaf7c",
      pureButtonBackgroundWidth:"1.1rem",
      pureButtonBackgroundHeight:"1.1rem",
      currentMode:"常规模式"
    };
  },
  mounted() {
    const origin = window.location.origin
    if(window.location.pathname.startsWith("/pure/")){
      this.pureButtonBackground="#666666"
      this.pureButtonBackgroundWidth="1.1rem"
      this.pureButtonBackgroundHeight="1.1rem"
      this.currentMode="纯净模式"
    }else {
      this.pureButtonBackground="#3eaf7c"
      this.pureButtonBackgroundWidth="1.1rem"
      this.pureButtonBackgroundHeight="1.1rem"
      this.currentMode="常规模式"
    }
  },
  methods: {
    goNormalMode() {
      const origin = window.location.origin
      window.location.href= origin + '/'
    },
    goPureMode() {
      const origin = window.location.origin
      window.location.href= origin + '/pure/'
    }  
  }
};
</script>

<style type="text/css">
    .nav-item .pure-button {
        position: relative;
        top: -0.08rem;
    }
    .nav-item:hover .popup{
      visibility: visible;
    }
    .popup {
      position: absolute;
      top: 0.6rem;
      right: -1.6rem;
      overflow-y: auto;
      box-sizing: border-box;
      min-width: 100px;
      width: 11rem;
      height: 14.8rem;
      margin: 0;
      padding: 0.75rem 1.5rem;
      border: 1px solid var(--grey14);
      border-radius: 0.25rem;
      background: var(--bg-color);
      box-shadow: 2px 2px 10px var(--card-shadow);
      text-align: left;
      white-space: nowrap;
      visibility: hidden;
      transition: all 0.18s ease-out;
      transform: scale(0.8);
    }
    .popup .item:first-child {
      height: 30%;
      border-bottom: 0.1rem solid #D3D3D3;
      cursor: default;
    }
    .popup .item:nth-child(2) {
      height: 35%;
      border-bottom: 0.1rem solid #D3D3D3;
      cursor: pointer;
    }
    .popup .item:nth-child(3) {
      cursor: pointer;
    }
    .popup .title {
      color: #9D9D9D;
      font-size: 1rem;
      font-weight: 600;
    }
    .popup .content {
      color: var(--theme-color);
      font-size: 1rem;
      font-weight: 600;
    }
    /*
    .popup .item:first-child .content:hover {
      font-size: 1.6rem;
      font-weight: 900;
      transition: all 0.18s ease-out;
      transform: scale(1.1);
    }*/
    .popup .item:not(:first-child) .content:hover {
      font-size: 1.2rem;
      font-weight: 900;
      transition: all 0.18s ease-out;
      transform: scale(1.1);
    }
</style>