<template>
<div id="videoModal">
    <sui-modal v-model="open">
      <sui-modal-header id="headerVideo">{{ModalTitle}}
        <i id="closeX" class="x icon" @click="toggle"></i>
      </sui-modal-header>

      <sui-modal-content image id="videoContent">
      <iframe ref="iframe" :src="'https://player.vimeo.com/video/' + this.id + '?color=0f87f2&title=0&byline=0&portrait=0&fun=0&controls=1'"
      width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </sui-modal-content>
    </sui-modal>
</div>
</template>

<script>
import player from '@vimeo/player'

export default {
  name: 'modalVideo',
  components: {
  },
  watch : {
     id : function () {this.InitVideo()}
  },
  data() {
    return {
      open: false,
      id : 304402648,
      ModalTitle : "",
      videoPlayer: null
    }
  },
  mounted() {
  },
  methods: {
    toggle() {
      if(this.open) {
          this.videoPlayer.pause();
      } else {
        this.videoPlayer.play();
        this.videoPlayer.on('ended', () => {this.open = false})
      }
      this.open = !this.open;
    },
    InitVideo() {
        if(this.videoPlayer) delete(this.videoPlayer)
        this.videoPlayer = new player(this.$refs.iframe)
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
  padding-bottom: 45px !important;
  height : 100%;
  background-color: black// #2d2a2a;
  
}

#closeX {
  position: absolute;
  right : 15px;
  opacity: 40%;
  transition: opacity 0.3s;
}

#closeX:hover {
  opacity: 100%;
}

#videoModal {
  position: fixed;
  z-index : 1110;
}


#videoModal .ui.modal {
  width: 100% !important;
  height: 100% !important;
}

</style>