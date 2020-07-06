<template>
  <div id="app">
      <opener ref="opener"/>
      <sidebar ref="sidebar" />
      <scene ref="scene" />
      <div id="audioMute"> 
        <i v-show="!totalMute" id="mute" class="bell icon big" @click="() => {totalMute = true; this.audioHelp.pause(); this.currentOpenSong.pause()}"></i>
        <i v-show="totalMute"  id="demute" class="bell slash icon big" @click="() => {totalMute = false; this.audioHelp.pause(); this.currentOpenSong.pause()}"></i>
        <i v-show="!expand" id="demute" class="expand icon big" @click="toogleFullscrenn"></i>
        <i v-show="expand" id="demute" class="compress icon big" @click="toogleFullscrenn"></i>
        <i id="demute" class="question circle outline icon big" @click="activeAudioHelp"></i>
      </div>
      <div v-if="cartonOpen" id="cartonOpener">
        <div id="centerOpenBloc">
          <p class="openText">Bienvenue sur Bleu202TV !!!</p>
          <p class="openText">Cette année vous ne lecherez plus les vitrines</p>
          <sui-button color="black" size="huge" id="button_right"  @click.native="begin" basic>
                Commencer !
                <i class="angle double right icon"></i>
          </sui-button>
        </div>
        <img id="logoCompagnieOpen" alt="Logo de la compagnie bleu 202" src="@/assets/CompagnieBleu202.png">
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
      totalMute : false,
      expand : false,
      audioHelp : this.$datas[5].audioHelp,
      cartonOpen : true,
      currentOpenSong : null
    }
  },
  mounted() {
    document.addEventListener("fullscreenchange", () => {
      this.expand = !this.expand
    });

    document.addEventListener("mozfullscreenchange", () => {
      this.expand = !this.expand
    });

    document.addEventListener("msfullscreenchange", () => {
      this.expand = !this.expand
    });
  
  },
  methods: {
    begin() {
        if(this.$logStore.state.connected) this.currentOpenSong = this.$datas[5].openConnect
        else this.currentOpenSong = this.$datas[5].openNoConnect
        this.cartonOpen = false;
        this.$refs.scene.$refs.television.$refs.ambianceManager.toggleAmbiance()
        this.currentOpenSong.play();
    },
    toogleOpenSong(newSong) {
      if(this.currentOpenSong.paused) {
        this.currentOpenSong = newSong
        this.currentOpenSong.play()
      }
    },
    toogleFullscrenn() {
        this.$fullscreen.toggle(document.body, {wrap: false})
    },
    activeAudioHelp() {
      if(!this.totalMute) {
        this.audioHelp.currentTime = 0;
        this.audioHelp.play()
      }
    }
  }
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
  z-index: 1001;
  background: radial-gradient(at 40% 00%, rgba(black, 0.2) 10%, rgba(black, 0.0) 75%);
}

#cartonOpener {
  position : fixed;
  z-index: 2000;
  height : 100%;
  width : 100%;
  background-color: #23a1d3;
}

#logoCompagnieOpen {
  width : 150px;
  position : absolute;
  right : 2%;
  top : 2%;
}

.openText {
  font-size : 50px;
  color : white;
}

#centerOpenBloc {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}


</style>
