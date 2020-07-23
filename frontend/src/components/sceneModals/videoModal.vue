<template>
<div id="videoModal" ref="videoModal">
    <sui-modal v-model="open">
      <sui-modal-header id="headerVideo">{{ ModalTitle }}
        <i id="closeX" class="x icon" @click="toggle"></i>
      </sui-modal-header>

      <sui-modal-content  image id="videoContent">
      <div id="modalContentVideo" ref="modalContentVideo">
      <iframe ref="iframe" :src="'https://player.vimeo.com/video/' + this.id + '?color=0f87f2&title=0&byline=0&portrait=0&fun=0&controls=1'"
      width="100%" height="100%" frameborder="0" allow="autoplay"></iframe>
      <div ref="full" class="full">
        <i v-show="!fullscreen" class="expand icon big" @click="toogleFullscrennVideo"></i>
        <i v-show="fullscreen" class="compress icon big" @click="toogleFullscrennVideo"></i>
      </div>
      <div ref="collaspe" class="collaspe"></div>
      </div>
      </sui-modal-content>
     </sui-modal>
</div>
</template>

<script>
import player from '@vimeo/player'
export default {
  name: 'modalVideo',
props: {
      nbCanal : {type: String, required : true},
      totalMute : {type: Boolean, default : false},
  },
  data() {
    return {
      open: false,
      id : 304402648,
      ModalTitle : "",
      videoPlayer: null,
      fullscreen: false,
      remanance: 0,
    }
  },
  watch: {
    totalMute : function() {this.toggleTotalMute()}
  },
  mounted() {
    this.id = this.$datas[this.nbCanal].videoId;
    this.ModalTitle = this.$datas[this.nbCanal].name;
    this.InitVideo()

    document.addEventListener("fullscreenchange", (e) => {
      if(e.srcElement == this.$refs.modalContentVideo) {
        this.fullscreen = !this.fullscreen
      }
    });
    setInterval(() => {
      if(this.remanance != 0) this.remanance--
      else {
        if(this.$refs.full) {
          this.$refs.full.style.opacity = 0
        }
        this.$refs.collaspe.style.display = "block"
      }
    }, 1000);
    this.$refs.modalContentVideo.addEventListener("mousemove", () => {
      this.$refs.full.style.opacity = 1
      this.remanance = 3
      this.$refs.collaspe.style.display = "none"
    });
  },
  methods: {
    toogleFullscrennVideo() {
        if(this.$fullscreen.getState() == true && this.fullscreen == false) {
          this.$fullscreen.toggle(document.body, {wrap: false})
          setTimeout(() => {
              this.$fullscreen.toggle(this.$refs.modalContentVideo, {wrap: false})}, 100)
        }
        else if(this.$fullscreen.getState() == true && this.fullscreen == true) {
            this.$fullscreen.toggle(this.$refs.modalContentVideo, {wrap: false})
            setTimeout(() => {
              this.$fullscreen.toggle(document.body, {wrap: false})}, 100)
        } else {
          this.$fullscreen.toggle(this.$refs.modalContentVideo, {wrap: false})
        }
    },
    toggle() {
      if(this.open) {
          this.videoPlayer.pause();
          this.$parent.mute = false;
      } else {
        if(this.$fullscreen.getState() == false) this.$fullscreen.toggle(document.body, {wrap: false})
        this.videoPlayer.play();
          if(!this.$parent.$parent.$parent.currentOpenSong.paused) {
              this.$parent.$parent.$parent.currentOpenSong.pause()
              this.$parent.$parent.$parent.currentOpenSong.currentTime = 0
          }

        this.videoPlayer.on('ended', () => {this.open = false})
        this.$parent.mute = true;
      }
      this.open = !this.open;
    },
      fullscreenReturn () {
        console.log('ok')
      },
    InitVideo() {
        if(this.videoPlayer) delete(this.videoPlayer)
        this.videoPlayer = new player(this.$refs.iframe)
    },
    toggleTotalMute() {
      if(this.totalMute) {
        this.videoPlayer.setVolume(0)
      } else {
        this.videoPlayer.setVolume(1)
      }
    }
  }
}
</script>

<style lang="scss">
#headerVideo {
    padding : 10px !important;
    padding-left : 20px !important;
    background-color: #27252d;
    height : 45px;
    color : white;
    font-size: 20px;
    font-weight: normal;
}

#videoContent {
  padding: 0px;
  height : 100%;
  background-color: black// #2d2a2a;
}



#videoModal .ui.dimmer {
    padding : 0px;
}


#videoModal {
  position: fixed;
  z-index : 1110;
}


#videoModal .ui.modal {
    position: fixed !important;
  top: 0%;
  width: 100% !important;
  height: calc(100% - 45px) !important;
  max-height: 100%;
  margin: 0px !important;
}

.full {
  transition : opacity 1s;
  position: relative;
  top : -100%;
  color : white;
  margin : 10px;
  padding : 4px;
  width: 42px;
  border-radius: 5px;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index : 1001

}

#modalContentVideo {
  height : 100%;
  width : 100%;
}

.collaspe {
  position: relative;
  top: -105%;
  height : 100%;
  width : 100%;
}

</style>