<template>
<div id="videoModal" ref="videoModal">
    <sui-modal v-model="open">
      <sui-modal-header id="headerVideo">{{ ModalTitle }}
        <i id="closeX" class="x icon" @click="toggle"></i>
      </sui-modal-header>

      <sui-modal-content image id="videoContent">
        <div id="photoSimple1" ref="photoSimple1" class="romanContent" :style="{'background-image':  'url(' + simple1  + ')'}">
        </div>
        <div id="photoSimple2" ref="photoSimple2" class="romanContent" :style="{'background-image':  'url(' + simple2  + ')'}">
        </div>
        <div id="photoDouble" ref="photoDouble" class="romanContent">
          <img id="Double1" alt="Image du Roman-Photo" :src="double1">
          <img id="Double2" alt="Image du Roman-Photo" :src="double2">
        </div>
        <div id="photoTriple" ref="photoTriple" class="romanContent">
          <img id="Triple1" alt="Image du Roman-Photo" :src="triple1">
          <img id="Triple2" alt="Image du Roman-Photo" :src="triple2">
          <img id="Triple3" alt="Image du Roman-Photo" :src="triple3">
        </div>
        <div id="photoQuadruple" ref="photoQuadruple" class="romanContent">
          <img id="Triple1" alt="Image du Roman-Photo" :src="quadruple1">
          <img id="Triple2" alt="Image du Roman-Photo" :src="quadruple2">
          <img id="Triple3" alt="Image du Roman-Photo" :src="quadruple3">
          <img id="Triple3" alt="Image du Roman-Photo" :src="quadruple4">
        </div>

      </sui-modal-content>
     </sui-modal>
</div>
</template>

<script>
import roman from '@/services/api/roman'
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
      simple1 : romanFile.photo[4],
      simple2 : romanFile.photo[4],
      double1 : romanFile.photo[4],
      double2 : romanFile.photo[4],
      triple1 : romanFile.photo[4],
      triple2 : romanFile.photo[4],
      triple3 : romanFile.photo[4],
      quadruple1 : romanFile.photo[4],
      quadruple2 : romanFile.photo[4],
      quadruple3 : romanFile.photo[4],
      quadruple4 : romanFile.photo[4],
      currentAudio : null
    }
  },
  watch: {
    totalMute : function() {this.toggleTotalMute()}
  },
  mounted() {
    this.ModalTitle = this.$datas[this.nbCanal].name;
    //this.loadNext(0, null)
    this.currentPhoto = this.$refs.photoSimple1
  },
  methods: {
    toggle() {
      if(this.open) {
          this.$parent.mute = false;
      } else {
        if(this.$fullscreen.getState() == false) this.$fullscreen.toggle(document.body, {wrap: false})
        this.validChoix(0)
        this.$parent.mute = true;
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
        if(this.currentPhoto) this.currentPhoto.style.opacity = 0
        this.currentPhoto = newPhoto;
        this.currentPhoto.style.opacity = 1
    },
    validChoix(nbChoix) {
       this.nextChoix =  this.choix[nbChoix]
       if(this.nextChoix.profil == 1) {
           if(this.currentPhoto == this.$refs.photoSimple1) {
               this.nextPhoto = this.$refs.photoSimple2
               this.simple2 = this.nextChoix.photos[0]
           } else {
               this.nextPhoto = this.$refs.photoSimple1
               this.simple1 = this.nextChoix.photos[0]
           }
        if(this.nextChoix.time) {
            setTimeout(() => {this.validChoix(0)}, this.nextChoix.time);
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
       }
    if(this.currentAudio) this.currentAudio.pause()
    this.currentAudio = this.nextChoix.audio;
    this.currentAudio.play()
    this.fadePhoto(this.nextPhoto)
    this.loadNext(this.nextChoix.state, nbChoix)
    },
    async loadNext(state, choix) {
       const data = await roman.next({
           state: state,
           choix: choix
       })
      console.log(data.data);
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
    background-size: cover;
}

#Photo1 { 
    height: 100%;
    width: 100%;

}

#Photo2 {
    height: 100%;
    width: 100%;
}


</style>