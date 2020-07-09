<template>
<div id="romanModal" ref="romanModal">
    <sui-modal v-model="open">
      <sui-modal-header id="headerVideo">{{ ModalTitle }}
        <i id="closeX" class="x icon" @click="toggle"></i>
      </sui-modal-header>

      <sui-modal-content image id="romanContent">
        <div id="photoSimple1" ref="photoSimple1" class="romanContent" :style="{'background-image':  'url(' + simple1  + ')'}">
        </div>
        <div id="photoSimple2" ref="photoSimple2" class="romanContent" :style="{'background-image':  'url(' + simple2  + ')'}">
        </div>
        <div id="photoDouble" ref="photoDouble" class="romanContent splitScreen">
          <div id="Double1" alt="Image du Roman-Photo" class="doubleContent" :style="{'background-image':  'url(' + double1  + ')'}" @click="validChoix(0)"> </div>
          <div id="Double2" alt="Image du Roman-Photo" class="doubleContent" :style="{'background-image':  'url(' + double2  + ')'}" @click="validChoix(1)"> </div>
        </div>
        <div id="photoTriple" ref="photoTriple" class="romanContent splitScreen">
          <img id="Triple1" alt="Image du Roman-Photo" class="tripleContent" :style="{'background-image':  'url(' + triple1  + ')'}" @click="validChoix(0)">
          <img id="Triple2" alt="Image du Roman-Photo" class="tripleContent" :style="{'background-image':  'url(' + triple2  + ')'}" @click="validChoix(1)">
          <img id="Triple3" alt="Image du Roman-Photo" class="tripleContent" :style="{'background-image':  'url(' + triple3  + ')'}" @click="validChoix(2)">
        </div>
        <div id="photoQuadruple" ref="photoQuadruple" class="romanContent splitScreen">
          <img id="Quadruple1" alt="Image du Roman-Photo" class="quadrupleContent" :style="{'background-image':  'url(' + quadruple1  + ')'}" @click="validChoix(0)">
          <img id="Quadruple2" alt="Image du Roman-Photo" class="quadrupleContent" :style="{'background-image':  'url(' + quadruple2  + ')'}" @click="validChoix(1)">
          <img id="Quadruple3" alt="Image du Roman-Photo" class="quadrupleContent" :style="{'background-image':  'url(' + quadruple3  + ')'}" @click="validChoix(2)">
          <img id="Quadruple4" alt="Image du Roman-Photo" class="quadrupleContent" :style="{'background-image':  'url(' + quadruple4  + ')'}" @click="validChoix(3)">
        </div>
        <div id="genreMenu" ref="genreMenu" class="romanContent" :style="{'background-image':  'url(' + genre1  + ')'}">
          <sui-button color="teal" size="huge" id="garçonButton" class="buttonGenre"  @click="validGenre(0)">
                Je suis un garçon
          </sui-button>
          <sui-button color="teal" size="huge" id="filleButton" class="buttonGenre"  @click="validGenre(1)">
                Je suis une fille
          </sui-button>
          <sui-button color="teal" size="huge" id="oursButton" class="buttonGenre"  @click="validGenre(2)">
                Je ne sais pas trop
          </sui-button>
        </div>
        <div id="musiqueMenu" ref="musiqueMenu" class="romanContent" :style="{'background-image':  'url(' + music1  + ')'}">
          <sui-button color="teal" size="huge" id="boumButton" class="buttonMusic"  @click="validMusic(0)">
                Boom Boom
          </sui-button>
          <sui-button color="teal" size="huge" id="smackButton" class="buttonMusic"  @click="validMusic(1)">
                Smack
          </sui-button>
          <sui-button color="teal" size="huge" id="dodoButton" class="buttonMusic"  @click="validMusic(2)">
                Dodo
          </sui-button>
          <sui-button color="teal" size="huge" id="enervanteButton" class="buttonMusic"  @click="validMusic(2)">
                Enervante
          </sui-button>
        </div>
        <div id="findMenu" ref="findMenu" class="romanContent" :style="{'background-image':  'url(' + find1  + ')'}" @click="validChoix(0)">
        </div>
        <div id="persoMenu" ref="persoMenu" class="romanContent" :style="{'background-image':  'url(' + perso1  + ')'}">
          <sui-button color="teal" size="huge" id="procheButton" class="buttonPerso"  @click="validPerso(0)">
                Selfie proche
          </sui-button>
          <sui-button color="teal" size="huge" id="loinButton" class="buttonPerso"  @click="validPerso(1)">
                Selfie de loin
          </sui-button>
        </div>
      </sui-modal-content>
     </sui-modal>
</div>
</template>

<script>
import romanFile from '@/services/romanFile.js'

export default {
  name: 'romanModal',
props: {
      nbCanal : {type: String, required : true},
      totalMute : {type: Boolean, default : false},
  },
  data() {
    return {
      open: false,
      ModalTitle : "",
      currentPhoto : null,
      Choix : null,
      nextPhoto : null,
      nextChoix : null,

      simple1 : romanFile[1].photos[0],
      simple2 : romanFile[1].photos[0],
      double1 : romanFile[1].photos[0],
      double2 : romanFile[1].photos[0],
      triple1 : romanFile[1].photos[0],
      triple2 : romanFile[1].photos[0],
      triple3 : romanFile[1].photos[0],
      quadruple1 : romanFile[1].photos[0],
      quadruple2 : romanFile[1].photos[0],
      quadruple3 : romanFile[1].photos[0],
      quadruple4 : romanFile[1].photos[0],
      genre1 : romanFile[1].photos[0],
      music1 : romanFile[1].photos[0],
      find1 : romanFile[1].photos[0],
      perso1 : romanFile[1].photos[0],

      currentState : null,
      currentAudio : null,
        genre: null,
        friend: null,
        masque: null,
        selfie: null,
        cake: null,
        drink: null,
        door: null,
        back: null,
      ambianceMusic: new Audio(require('@/assets/roman/ambiance/default.mp3')),
      decompte: null,
    }
  },
  watch: {
    totalMute : function() {this.toggleTotalMute()}
  },
  mounted() {
    this.ModalTitle = this.$datas[this.nbCanal].name;
    this.currentState = 0
    this.validChoix(0)
    this.ambianceMusic.loop = true;
    setInterval(() => {
        if(this.open && this.decompte != null) {
            if (this.decompte <= 0) {
                this.validChoix(0)
            } else {
                this.decompte = this.decompte - 1000;
            }
        }
    }, 1000);
  },
  methods: {
    toggle() {
      if(this.open) {
          this.$parent.mute = false;
          if(!this.totalMute) {
              this.ambianceMusic.pause();
              this.currentAudio.pause();
          }
      } else {
        if(this.$fullscreen.getState() == false) this.$fullscreen.toggle(document.body, {wrap: false})
        this.$parent.mute = true;
          if(!this.$parent.$parent.$parent.currentOpenSong.paused) {
              this.$parent.$parent.$parent.currentOpenSong.pause()
              this.$parent.$parent.$parent.currentOpenSong.currentTime = 0
          }
          if(!this.totalMute) {
              this.ambianceMusic.play();
              if(this.currentAudio.currentTime != this.currentAudio.duration) {
                this.currentAudio.play();
              }
          }
      }
      this.open = !this.open;
    },
    toggleTotalMute() {
      if(this.totalMute) {
        this.videoPlayer.setVolume(0)
      } else {
        this.videoPlayer.setVolume(1)
      }
    },


    fadePhoto(newPhoto) {
        if(this.currentPhoto) {
            this.currentPhoto.style.opacity = 0
            this.currentPhoto.classList.remove('current')
        }
        this.currentPhoto = newPhoto;
        this.currentPhoto.style.opacity = 1
        this.currentPhoto.classList.add('current')
    },


    validChoix(choix) {
        this.checkChoix(choix) 
        this.currentState = romanFile[this.currentState].next[choix]
        this.checkNext()
        this.nextChoix = romanFile[this.currentState]
       if(this.nextChoix.profil == 1) {
           if(this.currentPhoto == this.$refs.photoSimple1) {
               this.nextPhoto = this.$refs.photoSimple2
               this.simple2 = this.nextChoix.photos[0]
           } else {
               this.nextPhoto = this.$refs.photoSimple1
               this.simple1 = this.nextChoix.photos[0]
           }
       } else if (this.nextChoix.profil == 2) {
           this.nextPhoto = this.$refs.photoDouble
           this.double1 = this.nextChoix.photos[0]
           this.double2 = this.nextChoix.photos[1]
       } else if (this.nextChoix.profil == 3) {
           this.nextPhoto = this.$refs.photoTriple
           this.triple1 = this.nextChoix.photos[0]
           this.triple2 = this.nextChoix.photos[1]
           this.triple3 = this.nextChoix.photos[2]
       } else if (this.nextChoix.profil == 4) {
           this.nextPhoto = this.$refs.photoQuadruple
           this.quadruple1 = this.nextChoix.photos[0]
           this.quadruple2 = this.nextChoix.photos[1]
           this.quadruple3 = this.nextChoix.photos[2]
           this.quadruple4 = this.nextChoix.photos[3]
       } else if (this.nextChoix.profil == 5) {
          this.nextPhoto = this.$refs.genreMenu
          this.genre1 = this.nextChoix.photos[0]
       } else if (this.nextChoix.profil == 6) {
          this.nextPhoto = this.$refs.musiqueMenu
          this.music1 = this.nextChoix.photos[0]
        } else if (this.nextChoix.profil == 7) {
          this.nextPhoto = this.$refs.findMenu
          this.find1 = this.nextChoix.photos[0]
        } else if (this.nextChoix.profil == 8) {
          this.nextPhoto = this.$refs.persoMenu
          this.perso1 = this.nextChoix.photos[0]
       }
    this.decompte = this.nextChoix.time;
    if(this.currentAudio) this.currentAudio.pause()
    this.currentAudio = this.nextChoix.audio;
    if(this.open) this.currentAudio.play()
    this.fadePhoto(this.nextPhoto)
    },
    validGenre(number) {
        this.genre = number;
        this.validChoix(number)
    },
    validPerso(number) {
        this.selfie = number;
        this.validChoix(number)
    },
    validMusic(number) {
        this.currentAudio.pause()
        if(number == 0) this.currentAudio = new Audio(require('@/assets/roman/ambiance/0.mp3'));
        if(number == 1) this.currentAudio = new Audio(require('@/assets/roman/ambiance/1.mp3'));
        if(number == 2) this.currentAudio = new Audio(require('@/assets/roman/ambiance/2.mp3'));
        if(number == 3) this.currentAudio = new Audio(require('@/assets/roman/ambiance/3.mp3'));
        this.currentAudio.loop = true;
        if(!this.totalMute) this.currentAudio.play() 
        this.validChoix(0)
    },
    checkChoix(choix) {
        switch (this.currentState) {
            case 21:
                this.masque = choix;
                break;
            case 63:
                this.friend = choix;
                break;  
            case 121:
                this.door = choix;
                break; 
            case 124:
                this.cake = choix;
                break; 
            case 125:
                this.cake = choix;
                break; 
            case 126:
                this.cake = choix;
                break;                                 
            case 128:
                this.drink = choix;
                break; 
            case 129:
                this.drink = choix;
                break; 
            case 130:
                this.drink = choix;
                break;                                 
            case 140:
                this.back = choix;
                break;
            case 141:
                this.back = choix;
                break;
            case 142:
                this.back = choix;
                break;                                                                                                                                                                                                                                                                            
            default:
                break;
        }        
    },
    checkNext() {
        switch (this.currentState) {
            case 4:
                if(this.genre == 1) this.currentState = 150
                if(this.genre == 2) this.currentState = 151
                break;
            case 5:
                if(this.genre == 1) this.currentState = 152
                if(this.genre == 2) this.currentState = 153
                break;  
            case 6:
                if(this.genre == 1) this.currentState = 154
                if(this.genre == 2) this.currentState = 155
                break;  
            case 9:
                this.switchGenre()
                break;  
            case 12:
                this.switchGenre()
                break; 
            case 18:
                this.switchGenre()
                break; 
            case 24:
                this.switchGenre()
                break;                 
            case 27:
                this.switchGenre()
                break; 
            case 30:
                this.switchGenre()
                break;  
            case 36:
                this.switchGenre()
                break; 
            case 39:
                this.switchGenre()
                break;
            case 42:
                this.switchGenre()
                break; 
            case 45:
                this.switchGenre()
                break;
            case 48:
                this.switchGenre()
                break;
            case 51:
                if(this.masque == 1) this.currentState += 3
                if(this.masque == 2) this.currentState += 6
                this.switchGenre()
                break; 
            case 60:
                this.switchGenre()
                break;   
            case 67:
                this.switchGenre()
                break;
            case 70:
                this.switchGenre()
                break;
            case 76:
                this.switchGenre()
                break; 
            case 79:
                if(this.friend == 1) this.currentState += 3
                if(this.friend == 2) this.currentState += 6
                if(this.friend == 3) this.currentState += 9
                this.switchGenre()
                break;                                     
            case 91:
                if(this.friend == 1) this.currentState += 3
                if(this.friend == 2) this.currentState += 6
                if(this.friend == 3) this.currentState += 9
                this.switchGenre()
                break; 
            case 104:
                this.switchGenre()
                break;
            case 110:
                this.switchGenre()
                break;   
            case 113:
                this.switchGenre()
                break; 
            case 117:
                this.switchGenre()
                break; 
            case 124:
                if(this.$logStore.state.favoriteCake == 2) this.currentState++
                if(this.$logStore.state.favoriteCake == 3) this.currentState += 2
                break;
            case 128:
                if(this.$logStore.state.favoriteDrink == 2) this.currentState++
                if(this.$logStore.state.favoriteDrink == 3) this.currentState += 2
                break;  
            case 132:
                if(this.$logStore.state.favoriteCharacter == 1) this.currentState++
                break; 
            case 134:
                if(this.$logStore.state.favoriteCharacter == 1) this.currentState += 3
                this.switchGenre()
                break; 
            case 137:
                if(this.$logStore.state.favoriteCharacter == 1) this.currentState += 3
                this.switchGenre()
                break;
            case 140:
                this.switchGenre()
                break;
            case 146:
                this.switchGenre()
                break;                                                                                                                                                                                                 
            default:
                break;
        }
    },
    switchGenre() {
        this.currentState = this.currentState + this.genre;
    }
  }
}


/* 
choix = {
    profil: '1 -> photo simple, 2-> photo double, 3 -> photo triple, 4 -> photo dradruple, 5 -> photo bouton',
    photos: ['photo1.jpg', 'photo2.jpg', ...],
    audio: 'audio1.mp3',
    time: 1000 // null,
    next: 15
}
*/





/*
    async loadNext(state, choix) {
        
       const data = await roman.next({
           state: state,
           choix: choix
       })
       this.choix = []
       data.data.choix.forEach(choix => {
           const audioFile = romanFile.audio[choix.audio]
           const photo1 = romanFile.photo[choix.photos[0]]
           let photo2 = null
           let photo3 = null
           let photo4 = null
           if(choix.nbPhoto > 1) photo2 = romanFile.photo[choix.photos[1]]
           if(choix.nbPhoto > 2) photo3 = romanFile.photo[choix.photos[2]]
           if(choix.nbPhoto > 3) photo4 = romanFile.photo[choix.photos[3]]
           this.choix.push({
               state: choix.state,
               profil: choix.profil,
               photos: [photo1, photo2, photo3, photo4],
               audio: audioFile,
               time: choix.time,
               next: choix.next
           })
       });
*/

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

#romanContent {
  padding: 0px !important;
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

#romanModal {
  position: fixed;
  z-index : 1110;
}


#romanModal .ui.modal {
    position: fixed !important;
  top: 0%;
  width: 100% !important;
  height: calc(100% - 45px) !important;
  max-height: 100%;
  margin: 0px !important;
}

#romanModal .ui.dimmer {
    padding : 0px;
}

.romanContent {
    position : absolute;
    left: 0%;
    height: 100%;
    width: 100%;
    opacity : 0;
    transition : opacity 2s;
    overflow : hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    z-index : 500;

}

.current {
  z-index : 501;  
}

.doubleContent {
    height: 100%;
    width: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
}

.tripleContent {
    height: 100%;
    width: 33%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
}

.quadrupleContent {
    height: 100%;
    width: 25%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
}

.splitScreen {
    display: flex;
}




</style>


