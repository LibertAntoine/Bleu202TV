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
        <div id="photoDouble" ref="photoDouble1" class="romanContent splitScreen">
          <div id="Double1" alt="Image du Roman-Photo" class="doubleContent" :style="{'background-image':  'url(' + double1  + ')'}" @click="validChoix(0)"> </div>
          <div id="Double2" alt="Image du Roman-Photo" class="doubleContent" :style="{'background-image':  'url(' + double2  + ')'}" @click="validChoix(1)"> </div>
        </div>
        <div id="photoDouble" ref="photoDouble2" class="romanContent splitScreen">
          <div id="Double3" alt="Image du Roman-Photo" class="doubleContent" :style="{'background-image':  'url(' + double3  + ')'}" @click="validChoix(0)"> </div>
          <div id="Double4" alt="Image du Roman-Photo" class="doubleContent" :style="{'background-image':  'url(' + double4  + ')'}" @click="validChoix(1)"> </div>
        </div>
        <div id="photoTriple" ref="photoTriple" class="romanContent splitScreen">
          <div id="Triple1" alt="Image du Roman-Photo" class="tripleContent" :style="{'background-image':  'url(' + triple1  + ')'}" @click="validChoix(0)"> </div>
          <div id="Triple2" alt="Image du Roman-Photo" class="tripleContent" :style="{'background-image':  'url(' + triple2  + ')'}" @click="validChoix(1)"> </div>
          <div id="Triple3" alt="Image du Roman-Photo" class="tripleContent" :style="{'background-image':  'url(' + triple3  + ')'}" @click="validChoix(2)"> </div>
        </div>
        <div id="photoQuadruple" ref="photoQuadruple" class="romanContent splitScreen">
          <div id="Quadruple1" alt="Image du Roman-Photo" class="quadrupleContent" :style="{'background-image':  'url(' + quadruple1  + ')'}" @click="validChoix(0)"> </div>
          <div id="Quadruple2" alt="Image du Roman-Photo" class="quadrupleContent" :style="{'background-image':  'url(' + quadruple2  + ')'}" @click="validChoix(1)"> </div>
          <div id="Quadruple3" alt="Image du Roman-Photo" class="quadrupleContent" :style="{'background-image':  'url(' + quadruple3  + ')'}" @click="validChoix(2)"> </div>
          <div id="Quadruple4" alt="Image du Roman-Photo" class="quadrupleContent" :style="{'background-image':  'url(' + quadruple4  + ')'}" @click="validChoix(3)"> </div>
        </div>
        <div id="genreMenu" ref="genreMenu" class="romanContent" :style="{'background-image':  'url(' + genre1  + ')'}">
          <div id="blocGenreButton" class="RomanBlocButton">
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
        </div>
        <div id="musiqueMenu" ref="musiqueMenu" class="romanContent" :style="{'background-image':  'url(' + music1  + ')'}">
          <div id="blocMusicButton" class="RomanBlocButton">
            <sui-button color="orange" size="huge" id="boumButton" class="buttonMusic"  @click="validMusic(0)">
                    Boom Boom
            </sui-button>
            <sui-button color="orange" size="huge" id="smackButton" class="buttonMusic"  @click="validMusic(1)">
                    Smack
            </sui-button>
            <sui-button color="orange" size="huge" id="dodoButton" class="buttonMusic"  @click="validMusic(2)">
                    Dodo
            </sui-button>
            <sui-button color="orange" size="huge" id="enervanteButton" class="buttonMusic"  @click="validMusic(2)">
                    Enervante
            </sui-button>
          </div>
        </div>
        <div id="findMenu" ref="findMenu" class="romanContent" :style="{'background-image':  'url(' + find1  + ')'}" >
            <img id="find1" ref="find1" class="romanContent" src="@/assets/roman/photo/116b.png" @click="find(1)">
            <img id="find2" ref="find2" class="romanContent" src="@/assets/roman/photo/116c.png" @click="find(2)">
            <img id="find3" ref="find3" class="romanContent" src="@/assets/roman/photo/116d.png" @click="find(3)">
        </div>
        <div id="persoMenu" ref="persoMenu" class="romanContent" :style="{'background-image':  'url(' + perso1  + ')'}">
          <div id="blocSelfieButton" class="RomanBlocButton">
            <sui-button color="orange" size="huge" id="procheButton" class="buttonPerso"  @click="validPerso(0)">
                    Selfie proche
            </sui-button>
            <sui-button color="orange" size="huge" id="loinButton" class="buttonPerso"  @click="validPerso(1)">
                    Selfie de loin
            </sui-button>
          </div>
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
      double3 : romanFile[1].photos[0],
      double4 : romanFile[1].photos[0],
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
      find2 : require('@/assets/roman/photo/116b.png'),
      perso1 : romanFile[1].photos[0],
      nbFind : 0,
      findSound : new Audio(require('@/assets/roman/ambiance/findSound.mp3')),
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
    this.ambianceMusic.volume = 0.20
    setInterval(() => {
        if(this.open && this.decompte != null) {
            if (this.decompte <= 0 && this.currentAudio.currentTime == this.currentAudio.duration) {
                this.validChoix(0)
            } else {
                this.decompte = this.decompte - 200;
            }
        }
    }, 200);
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

    find(number) {
        console.log('find')
        if(this.$refs['find' + number].style.opacity == 0) {
            this.$refs['find' + number].style.opacity = 1;
            this.nbFind++
            this.findSound.play()
            if(this.nbFind == 3) this.validChoix(0)
        }
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
           if(this.currentPhoto == this.$refs.photoDouble1) {
                this.nextPhoto = this.$refs.photoDouble2
                this.double3 = this.nextChoix.photos[0]
                this.double4 = this.nextChoix.photos[1]
           } else {
               this.nextPhoto = this.$refs.photoDouble1
               this.double1 = this.nextChoix.photos[0]
               this.double2 = this.nextChoix.photos[1]
           }
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
    if(this.currentAudio) {
        this.currentAudio.pause()
        this.currentAudio.currentTime = 0
    }
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
        this.ambianceMusic.pause()
        if(number == 0) this.ambianceMusic = new Audio(require('@/assets/roman/ambiance/0.mp3'));
        if(number == 1) this.ambianceMusic = new Audio(require('@/assets/roman/ambiance/1.mp3'));
        if(number == 2) this.ambianceMusic = new Audio(require('@/assets/roman/ambiance/2.mp3'));
        if(number == 3) this.ambianceMusic = new Audio(require('@/assets/roman/ambiance/3.mp3'));
        this.ambianceMusic.loop = true;
        this.ambianceMusic.volume = 0.2;
        if(!this.totalMute) this.ambianceMusic.play() 
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
            case 132:
                this.selfie = choix;
                break;  
            case 133:
                this.selfie = choix;
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
            case 120:
                this.ambianceMusic.pause() 
                this.ambianceMusic = new Audio(require('@/assets/roman/ambiance/4.mp3'));
                this.ambianceMusic.loop = true;
                this.ambianceMusic.volume = 0.2;
                if(!this.totalMute) this.ambianceMusic.play() 
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
                if(this.$logStore.state.favoriteCharacter == 1) this.currentState += 22
                if(this.selfie == 1) this.currentState += 3
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


.romanContent #find1 {
    z-index: 1000;
    top : calc(((100vh - 45px) - 56.25vw) / 2.0 + 28.6vw);
    left : 69.2%;
    width : 11%; 
    height: 11.8vw;
    position: absolute;

}


.romanContent #find2 {
    z-index: 1000;
    top : calc(((100vh - 45px) - 56.25vw) / 2.0 + 20.9vw);
    left : 52.8%;
    width : 7.8%; 
    height: 7.8vw;
    position: absolute;

}

.romanContent #find3 {
    z-index: 1000;
    top : calc(((100vh - 45px) - 56.25vw) / 2.0 + 16.6vw);
    left : 19.0%;
    width : 12%; 
    height: 22.8vw;
    position: absolute;

}

.RomanBlocButton {
  position: absolute;
  top: 75%;
  left: 0%;
  width: 100%;
  height: 15%;
}

.buttonMusic {
    color : white !important;
    font-size: 25px !important;
    padding : 4px !important;
    margin : 5% !important;
    width : 15% !important;
    height : 40% !important;
    font-family: Cambria, sans-serif !important;
}

#blocSelfieButton {
    left : 9% !important;
}

.buttonPerso {
    color : white !important;
    font-size: 25px !important;
    padding : 4px !important;
    padding : 4px !important;
    margin : 5% !important;
    width : 30% !important;
    height : 40% !important;
    font-family: Cambria, sans-serif !important;
}

@media (max-width: 1500px) {
    .buttonMusic {
        font-size: 18px !important;
    }

}


@media (max-width: 730px) {
    .RomanBlocButton {
        left: 10%;
        top: 70%;
    }
    .buttonMusic {
        font-size: 15px !important;
        width : 30% !important;
    }

    .buttonPerso {
        font-size: 18px !important;
        height : 80% !important;

    }


}

@media (max-height: 400px) and (min-width: 730px) {
    #blocSelfieButton {
        height : 24% !important;
    }
}

@media (max-height: 400px) and (max-width: 730px) {
    .RomanBlocButton {
        top: 50%;
        left: 15%;
    }
    .buttonMusic {
        margin : 3% !important;
        font-size: 15px !important;
        height : 60% !important;
    }

    #blocSelfieButton {
        top: 70%;
        height : 18% !important;
    }
}



#headerVideo {
    font-family: Bodoni MT, serif !important;
    padding : 8px !important;
    padding-left : 20px !important;
    background-color: #27252d;
    height : 45px;
    color : white;
    font-size: 23px;
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
    background-size: 95%;
    transition : background-size 1s, filter 1s;
    filter: saturate(30%);
}

.doubleContent:hover {
    background-size: 100%;
    filter: saturate(100%);
}


.tripleContent {
    height: 100%;
    width: 33%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 95%;
    transition : background-size 1s, filter 1s;
    filter: saturate(30%);
}

.tripleContent:hover {
    background-size: 100%;
    filter: saturate(100%);
}

.quadrupleContent {
    height: 100%;
    width: 25%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 95%;
    transition : background-size 1s, filter 1s;
    filter: saturate(30%);
}

.quadrupleContent:hover {
    background-size: 100%;
    filter: saturate(100%);
}


.splitScreen {
    display: flex;
}


@media (max-height: 530px) {
    #headerVideo {
        padding : 7px !important;
        height : 30px;
        font-size: 14px;
    }

    .romanContent #findMenu {
        top : calc(((100vh - 30px) - 56.25vw) / 2.0 + 28.6vw);
    }


    #romanModal .ui.modal {
        height: calc(100% - 30px) !important;
    }
}



</style>


