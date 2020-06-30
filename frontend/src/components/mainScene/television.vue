<template>
<div>
      <bruitageManager ref="bruitageManager" :TotalMute="$parent.$parent.totalMute" />
      <ambianceManager ref="ambianceManager" :CurrentCanal="currentChannel" :Mute="mute" :TotalMute="$parent.$parent.totalMute" />
      <modalVideo ref="modalVideo0" nbCanal="0" :totalMute="$parent.$parent.totalMute"/>
      <modalVideo ref="modalVideo1" nbCanal="1" :totalMute="$parent.$parent.totalMute"/>
      <modalVideo ref="modalVideo2" nbCanal="2" :totalMute="$parent.$parent.totalMute"/>
      <modalVideo ref="modalVideo3" nbCanal="3" :totalMute="$parent.$parent.totalMute"/>
      <modalVideo ref="modalVideo4" nbCanal="4" :totalMute="$parent.$parent.totalMute"/>
    <div id="TV-group" class="TVRight" :style="{'height':  windowHeight + 'px', 'width':  windowHeight + 'px'}" >
      <div id="TV">
        <img v-if="!mobile" id="image" alt="Télévision Bleu202TV" src="@/assets/TV.png">
        <img v-else id="image" alt="Télévision Bleu202TV" src="@/assets/TV_mob.png">
        <div v-show="currentChannel == 0 || currentChannel == -1" id="screen" :style="{'background-image':  'url(' + $datas[0].gif + ')'}"></div>
        <div v-show="currentChannel == 1" id="screen" :style="{'background-image':  'url(' + $datas[1].gif  + ')'}"></div>
        <div v-show="currentChannel == 2" id="screen" :style="{'background-image':  'url(' + $datas[2].gif  + ')'}"></div>
        <div v-show="currentChannel == 3" id="screen" :style="{'background-image':  'url(' + $datas[3].gif  + ')'}"></div>
        <div v-show="currentChannel == 4" id="screen" :style="{'background-image':  'url(' + $datas[4].gif  + ')'}"></div>
        <div id="playBloc" @click="toggle">
           <img v-show="$logStore.state.connected && currentChannel >= 0 && currentChannel < 4" id="playButton" alt="Button Lancer le contenu" src="@/assets/PlayButton.png">
        </div>
        <div id="telecommande">
          <channelController ref="Channel1" id="Channel1" class="channelController" CanalNb="0" 
          :CurrentCanal="currentChannel" Active/>
          <channelController ref="Channel2" id="Channel2" class="channelController" CanalNb="1" 
          :CurrentCanal="currentChannel" Active/>
          <channelController ref="Channel3" id="Channel3" class="channelController" CanalNb="2" 
          :CurrentCanal="currentChannel" Active/>
          <channelController ref="Channel4" id="Channel4" class="channelController" CanalNb="3"
          :CurrentCanal="currentChannel" Active/>
          <channelController ref="Channel5" id="Channel5" class="channelController" CanalNb="4" 
          :CurrentCanal="currentChannel"/>
        </div>
        <div v-show="zapper || !$logStore.state.connected" ref="snowScreen" id="snowScreen"></div>

      </div>
    </div>
      <div v-if="mobile" id="menuTelecommande" class="ui sidebar  item visible bottom horizontal menu push labeled icon demo">
        <channelController ref="Channel1Mob" id="Channel1Mob" class="channelController item" CanalNb="0" 
        Mobile Active/>

        <channelController ref="Channel2Mob" id="Channel2Mob" class="channelController item" CanalNb="1" 
       :CurrentCanal="currentChannel" Mobile Active/>
 
       <channelController ref="Channel3Mob" id="Channel3Mob" class="channelController item" CanalNb="2" 
       :CurrentCanal="currentChannel" Mobile Active/>
  
       <channelController ref="Channel4Mob" id="Channel4Mob" class="channelController item" CanalNb="3"
       :CurrentCanal="currentChannel" Mobile Active/>

       <channelController ref="Channel5Mob" id="Channel5Mob" class="channelController item" CanalNb="4"
      :CurrentCanal="currentChannel" Mobile/>

  </div>
</div>
</template>

<script>
import modalVideo from '@/components/sceneModals/videoModal'
import channelController from '@/components/mainScene/channelController'
import $ from "jquery";
import ambianceManager from '@/components/audio/ambianceManager'
import bruitageManager from '@/components/audio/bruitageManager'

export default {
  name: 'television',
  components: {
    channelController,
    modalVideo,
    ambianceManager,
    bruitageManager
  },
  data() {
    return {
      windowHeight : window.visualViewport.height,
      mobile: false,
      TV : null,
      currentChannel : "-1",
      zapper : false,
      mute : false
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.TV = $('#TV-group');
    this.onResize()
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    toggle() {
      if(this.$logStore.state.connected && this.currentChannel >= 0 && this.currentChannel < 4) {
        this.$refs['modalVideo' + this.currentChannel].toggle();
      }
    },
    zap(number) {
      this.zapper = true
      this.$refs.bruitageManager.playZap()
      this.currentChannel = number
      if(number != "-1") {
      this.$parent.$refs.decor.changeBackGround(number)
      setTimeout(() => {this.zapper = false}, 150);
      }
    },
    onResize() {
      this.windowHeight = window.visualViewport.height;
      this.mobile = (window.visualViewport.width < 556) ? true : false;
      if(this.windowHeight > window.visualViewport.width - 145 && this.TV.hasClass("TVRight")) {
        this.TV.removeClass("TVRight")
        this.TV.addClass( "TVCenter" );
      }
      if(this.windowHeight < window.visualViewport.width- 145 && this.TV.hasClass("TVCenter")) {
        this.TV.removeClass("TVCenter")
        this.TV.addClass("TVRight");
      }
    }
  }
}
</script>

<style lang="scss">

#menuTelecommande {
  width: 100% !important;
  min-width: 0px !important;
  padding: 0px !important;
  background-color: #0d0d0d !important;
}

#menuTelecommande .item {
  width: 20% !important;
  min-width: 0px !important;
  left : 0% !important;
  border : 1px #242424 solid;
}




#telecommande {
  position: relative;
  top: -183.4%;
  left: 78.8%;
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
  padding: 80px;
  bottom : -40px;
}

.TVRight {
  right : 10%;
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
  background-image : url("../../assets/gif_zap_channel.gif");
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
  cursor : pointer;
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


@media (min-width: 556px) and (max-width: 908px) {
  #TV-group {
    position: absolute;
    height : 500px !important;
    width : 500px !important;
    bottom: 35px;
    right: 10%;
    padding : 10px;
  }

}



@media (max-width: 556px) {
  #TV-group {
    position: absolute;
    width : 350px !important;
    height : 350px !important;
    bottom: 80px;
    padding : 10px;
    right : 0%
  }

  #screen {
    left : 12%;
  }

  #snowScreen {
  top : -202.5%;
    left : 12%;
  }

  #playBloc {
    left : 12%;
  }


  #telecommande {
    display: none;
  }
}




</style>
