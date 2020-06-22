<template>
<div>
    <modalVideo ref="modal"/>

    <div id="TV-group" class="TVRight" :style="{'height':  windowHeight + 'px', 'width':  windowHeight + 'px'}" >
      <div id="TV">
        <img id="image" alt="Télévision Bleu202TV" src="@/assets/TV2.png">
        <div id="screen" :style="{'background-image':  'url(' + currentGif + ')'}"></div>
        <div id="playBloc" @click="toggle">
           <img id="playButton" alt="Button Lancer le contenu" src="@/assets/PlayButton.png">
        </div>
        <div id="telecommande">
          <channelController ref="Channel1" id="Channel1" class="channelController" CanalNb="1" InitState="Blue" GifName="gif_channel1" 
          InitVideo="424188401" InitModalTitle="Défilé de Gustavio" @click.native="zap(1)"/>
          <channelController ref="Channel2" id="Channel2" class="channelController" CanalNb="2" InitState="Blue" GifName="gif_channel2" 
          InitVideo="396458662" InitModalTitle="Coroméo et Juliettovid" @click.native="zap(2)"/>
          <channelController ref="Channel3" id="Channel3" class="channelController" CanalNb="3" InitState="Blue" GifName="gif_channel3" 
          InitVideo="428175533" InitModalTitle="Roman-Photo" @click.native="zap(3)"/>
          <channelController ref="Channel4" id="Channel4" class="channelController" CanalNb="4" InitState="Blue" GifName="gif_channel4" 
          InitVideo="422248221" InitModalTitle="Zapping TV" @click.native="zap(4)"/>
          <channelController ref="Channel5" id="Channel5" class="channelController" CanalNb="5" InitState="Grey" GifName="gif_channel5" 
          InitModalTitle="Emission de Virus" />
        </div>
        <div ref="snowScreen" id="snowScreen"></div>
      </div>
    </div>
</div>
</template>

<script>
import modalVideo from '@/components/modalVideo'
import channelController from '@/components/channelController'
import $ from "jquery";

export default {
  name: 'TV',
  components: {
    channelController,
    modalVideo
  },
  data() {
    return {
      windowHeight : window.innerHeight,
      TV : null,
      currentChannel : null,
      currentGif : null
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.TV = $('#TV-group');
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    toggle() {
      this.$refs.modal.toggle();
    },
    zap(number) {
      this.$refs.snowScreen.style.opacity = "1.0"
      if(this.currentChannel) {this.currentChannel.CanalState = "Blue"}
      if(number == 0) {
        this.currentChannel = null
      }
      if(number != 0) {
      setTimeout(() => {this.$refs.snowScreen.style.opacity = "0.0" }, 150);
      this.currentChannel = this.$refs["Channel" + number];
      this.currentChannel.CanalState = "Green"
      this.currentGif = this.currentChannel.GifChannel
      this.$refs.modal.id = this.currentChannel.VideoId
      this.$refs.modal.ModalTitle = this.currentChannel.ModalTitle
      }
    },
    onResize() {
      this.windowHeight = window.innerHeight;
      if(this.windowHeight > window.innerWidth && this.TV.hasClass("TVRight")) {
        this.TV.removeClass("TVRight")
        this.TV.addClass( "TVCenter" );
      }
      if(this.windowHeight < window.innerWidth && this.TV.hasClass("TVCenter")) {
        this.TV.removeClass("TVCenter")
        this.TV.addClass("TVRight");
      }
    }
  }
}
</script>

<style lang="scss">

#telecommande {
  position: relative;
  top: -183.3%;
  left: 79%;
  z-index: 4;
  width: 18%;
  height: 23%;

}

.channelController {
  z-index: 5;
  position: relative;
  height: 14%;
  width: 90%;
}

#Channel1 {
  top : 7.8%;
  left: 5.3%;
}

#Channel2 {
  top : 12.8%;
  left: 5.3%;
}

#Channel3 {
  top : 16.8%;
  left: 5.2%;
}

#Channel4 {
  top : 20.5%;
  left: 5.1%;
}

#Channel5 {
  top : 24.4%;
  left: 5.3%;
}



#TV-group {
  overflow: hidden;
  position : absolute;
  width : 300px;
  padding: 40px;
}

.TVRight {
  right : 15%;
}

.TVCenter {
  margin : 0 auto;
}



#image {
  position: relative;
  height: 100%;
  z-index: 2;
}

#TV {

  overflow: hidden;
  height : 100%;
}

#screen {
  overflow: hidden;
  position: relative;
  top : -79.5%;
  left : 3%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height : 61%;
  width : 75%;
  z-index: 0;
}


#snowScreen {
  overflow: hidden;
  position: relative;
  top : -225.5%;
  left : 3%;
  background-image : url("../assets/gif_zap_channel.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height : 61%;
  width : 75%;
  z-index: 1;
}



#playBloc {
  overflow: hidden;
  position: relative;
  top : -140.5%;
  left : 3%;
  background-color : rgba($color: #000000, $alpha: 0.0);
  height : 61%;
  width : 75%;
  z-index: 3;
}

#playBloc:hover #playButton {
  opacity: 60%;
}

#playButton {
  position: relative;
  top : 30%;
  height: 40%;
  opacity: 0%;
  transition: opacity 0.3s;
}
</style>
