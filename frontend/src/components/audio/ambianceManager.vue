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
      defaultAudio : new Audio(require('@/audio/RomanPhotoAmbianceSalon.mp3')),
      currentAmbiance: null
    }
  },
  mounted() {
    this.$datas[0].ambiance.loop = true;
    this.$datas[1].ambiance.loop = true;
    this.$datas[2].ambiance.loop = true;
    this.$datas[3].ambiance.loop = true;
    this.$datas[4].ambiance.loop = true;
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
        this.currentAmbiance = this.$datas[this.CurrentCanal].ambiance
      }
      if(this.TotalMute == true) {this.currentAmbiance.volume = 0} 
      else {this.currentAmbiance.volume = 1}
      this.currentAmbiance.play()
    },
    toggleMute() {
      if(this.Mute) {
        this.currentAmbiance.volume = 0
      } else if (!this.TotalMute) {
        this.currentAmbiance.volume = 1
      }
    }, 
    toggleTotalMute() {
      if(this.TotalMute) {
        this.currentAmbiance.volume = 0
      } else {
        this.currentAmbiance.volume = 1
      }
    }
  }
}
</script>

<style lang="scss" >
</style>
