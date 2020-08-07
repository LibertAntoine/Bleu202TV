<template>
    <div> 
      </div>
</template>

<script>
export default {
  name: 'ambianceManager',
  props: {
    CurrentCanal : {type: String, required : true},
    Mute : {type: Boolean, default : false},
    TotalMute : {type: Boolean, default : false}
  },
  watch: {
    CurrentCanal : function() {
        if(this.$parent.$parent.$parent.cartonOpen == false) {
          this.toggleAmbiance()
        }
      },
    Mute : function() {this.toggleMute()},
    TotalMute : function() {this.toggleTotalMute()}
  },
  data() {
    return {
      defaultAudio : new Audio(require('@/audio/MusiqueQuiz.mp3')),
      currentAmbiance: null
    }
  },
  mounted() {
    this.defaultAudio.loop = true;
    this.currentAmbiance = this.defaultAudio
  },
  methods: {
    toggleAmbiance() {
      this.currentAmbiance.pause()
      this.currentAmbiance.currentTime = 0;
      if(this.CurrentCanal < 0 || this.CurrentCanal > 4 || !this.$logStore.state.connected) {
        this.currentAmbiance = this.defaultAudio
      } else {
        this.currentAmbiance = new Audio(this.$datas[this.CurrentCanal].ambiance)
        this.currentAmbiance.loop = true;
      }
      if(this.TotalMute == true) {
        this.currentAmbiance.pause()
        //this.currentAmbiance.volume = 0
        } 
      else {
        this.currentAmbiance.play()
        //this.currentAmbiance.volume = 0.3
        }
    },
    toggleMute() {
      if(this.Mute) {
        //this.currentAmbiance.volume = 0
        this.currentAmbiance.pause()
      } else if (!this.TotalMute) {
        this.currentAmbiance.play()
        //this.currentAmbiance.volume = 0.3
      }
    }, 
    toggleTotalMute() {
      if(this.TotalMute) {
        //this.currentAmbiance.volume = 0
        this.currentAmbiance.pause()
      } else {
        //this.currentAmbiance.volume = 0.3
        this.currentAmbiance.play()

      }
    }
  }
}
</script>

<style lang="scss" >
</style>
