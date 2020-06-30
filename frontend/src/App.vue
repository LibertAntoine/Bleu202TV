<template>
  <div id="app">
      <opener ref="opener"/>
      <sidebar ref="sidebar" />
      <scene ref="scene" />
      <div id="audioMute"> 
        <i v-show="!totalMute" id="mute" class="bell icon big" @click="() => {totalMute = true;}"></i>
        <i v-show="totalMute"  id="demute" class="bell slash icon big" @click="() => {totalMute = false}"></i>
      </div>
  </div>
</template>

<script>
import opener from '@/components/opener/opener'
import sidebar from '@/components/sideMenu/sidebar'
import scene from '@/components/mainScene/scene'


export default {
  name: 'App',
  components: {
    opener,
    sidebar,
    scene
  },
  data() {
    return {
      totalMute : false
    }
  },
}
</script>

<style lang="scss" >

body {
  line-height: 0px !important;
  height: 100%;
  overflow: hidden;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 0px !important;
  height : 100%;
  overflow: hidden;
  position:relative;
}

#audioMute {
  position: fixed;
  left : 0%;
  padding : 10px;
  cursor : pointer;
  color: #23a1d3;
}


</style>
