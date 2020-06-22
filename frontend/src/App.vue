<template>
  <div id="app">

    <acceuil ref="acceuil"/>
    <sideMenu ref="sideMenu" />
    <TV ref="TV"/>
  </div>
</template>

<script>
import acceuil from './components/acceuil'
import sideMenu from './components/sidebar'
import cookie from '@/services/cookies'

import TV from './components/TV'

export default {
  name: 'App',
  components: {
    sideMenu,
    TV,
    acceuil
  },
  data() {
    return {
      connected : false,
      pseudo : ""
    }
  },
  mounted() {
    window.addEventListener('click', () => {       
      if(this.$refs.sideMenu.open == true) {
        this.$refs.sideMenu.toggle()
      } })
  },
  beforeDestroy: function () {
  },
  methods: {
    connection(pseudo) {
      this.connected = true
      this.$refs.TV.zap(1);
      this.pseudo = pseudo;
    },
    logOut() {
       cookie.deleteCookie("token");
       this.connected = false;
       this.pseudo = ""; 
       this.$refs.TV.zap(0);
       this.$refs.acceuil.open = true;
    }
  }
}
</script>

<style lang="scss" >

body {
  line-height: 0px !important;
  height: 100%;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 0px !important;
  height : 100%;
  overflow: hidden;
}
</style>
