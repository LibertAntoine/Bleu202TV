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
          <h1 id="openH1">Bienvenue dans Lèche Vitrines !</h1>
          <h2 id="openH2">BLEU202 TV vous invite en famille ou entre ami.e.s à partager une aventure virtuellement poilante.</h2>
           <sui-button size="huge" id="button_begin"  @click.native="begin" inverted>
                Je découvre 
                <!-- <i class="angle double right icon"></i> -->
          </sui-button>
          <h3 id="openH3">Entre le 27 et le 31 juillet, decouvrez de nouveaux contenus chaque jour qui viendront s'ajouter à ceux des jours précédents. Puis revenez les explorer jusqu'à la fin de l'été.</h3>
        </div>
        <img id="logoCompagnieOpen" alt="Logo de la compagnie bleu 202" src="@/assets/Logos/CompagnieBleu202.png">
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
        this.toogleFullscrenn();
        this.cartonOpen = false;
        this.$refs.scene.$refs.television.$refs.ambianceManager.toggleAmbiance()
        this.currentOpenSong.play();
    },
    toogleOpenSong(newSong) {
      if(this.currentOpenSong) {
        if(this.currentOpenSong.paused) {
          this.currentOpenSong = newSong
          if(!this.totalMute && this.currentOpenSong) {
            this.currentOpenSong.play()
          }
        }
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

<style lang="scss">

#openH3 {
    font-family: Lato, sans-serif !important;
  font-weight: normal;
  font-style: italic;
  font-size: 18px;
  color : white;
}

#openH1 {
  font-family: Bodoni MT, serif !important;
  font-size: 60px;
  color : white;
}

#openH2 {
  font-family: Lato, sans-serif !important;
  font-weight: normal;
  font-style: italic;
  font-size: 25px;
  color : white;
}

#button_begin {
  margin-top : 25px;
  margin-bottom : 20px;
}

#button_begin:hover {
  color : #2185d0;
}

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
  width : 130px;
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

@media (max-width: 556px) {
  #centerOpenBloc {
  position: relative;
  padding: 10px;
  }

  #openH3 {
    font-size: 16px;

  }

  #openH1 {
    font-size: 40px;

  }

  #openH2 {

    font-size: 25px;

  }

  #logoCompagnieOpen {
  width : 50px;
}

}

@media (max-height: 556px) {
  #centerOpenBloc {
  position: relative;
  padding: 10px;
  }

  #openH3 {
    font-size: 16px;

  }

  #openH1 {
    font-size: 40px;

  }

  #openH2 {

    font-size: 25px;

  }

  #logoCompagnieOpen {
  width : 30px;
}

#button_begin {
  margin-top : 5px;
  margin-bottom : 3px;
}

}


</style>
