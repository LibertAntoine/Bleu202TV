<template>

  <div id="app">

    <sideMenu/>

  <div>
    <sui-modal v-model="open">
      <sui-modal-header id="headerVideo">Video du jour
        <i id="closeX" class="x icon" @click="toggle"></i>
      </sui-modal-header>

      <sui-modal-content image id="videoContent">
      <iframe src="https://player.vimeo.com/video/304402648?color=0f87f2&title=0&byline=0&portrait=0&fun=0&controls=1" 
      width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </sui-modal-content>
 </sui-modal>
      
  </div>
  
    <div id="TV-group" class="TVRight" :style="{'height':  windowHeight + 'px', 'width':  windowHeight + 'px'}" >
      <div id="TV">
        <img id="image" alt="Télévision Bleu202TV" src="./assets/TV2.png">
        <div id="screen"></div>
        <div id="playBloc" @click="toggle">
           <img id="playButton" alt="Button Lancer le contenu" src="./assets/PlayButton.png">
        </div>
        <div id="telecommande">
          <channelController id="Channel1" class="channelController"/>
          <channelController id="Channel2" class="channelController"/>
          <channelController id="Channel3" class="channelController"/>
          <channelController id="Channel4" class="channelController"/>
          <channelController id="Channel5" class="channelController"/>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import sideMenu from './components/sidebar'
import channelController from './components/channelController'
import $ from "jquery";
/*


<sui-modal-description>
        <iframe id="player" type="text/html" width="100%" height="500"
        src="http://www.youtube.com/embed/M7lc1UVf-VE?color=white&showinfo=0&rel=0"
        frameborder="0" allowfullscreen></iframe>


*/


export default {
  name: 'App',
  components: {
    sideMenu,
    channelController
  },
  data() {
    return {
      windowHeight : window.innerHeight,
      TV : null,
      open: false,
      currentChannel : 1
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
      this.open = !this.open;
    },
    onResize() {
      this.windowHeight = window.innerHeight;
      console.log(this.TV)
      if(this.windowHeight > window.innerWidth && this.TV.hasClass("TVRight")) {
        console.log("ok")
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

<style lang="scss" >


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
  padding : 0 !important;
  padding-bottom: 45px !important;
  height : 100%;
  background-color: black// #2d2a2a;
  
}

#telecommande {
  position: relative;
  top: -183.3%;
  left: 79%;
  z-index: 4;
  width: 18%;
  height: 23%;
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

body {
  height: 100%;
}

.ui.modal {
  width: 100% !important;
  height: 100% !important;
}

.channelController {
  z-index: 5;
  position: relative;
  height: 14%;
  width: 90%;
}

#Channel1 {
  top : 6.5%;
  left: 5%;
}

#Channel2 {
  top : 11%;
  left: 5%;
}

#Channel3 {
  top : 15.2%;
  left: 5%;
}

#Channel4 {
  top : 19%;
  left: 5%;
}

#Channel5 {
  top : 22.8%;
  left: 5%;
}



#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 0px !important;
  height : 100%;
  overflow: hidden;
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
  z-index: 1;
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
  background-image : url("./assets/gif-anime.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height : 61%;
  width : 75%;
  z-index: 0;
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
