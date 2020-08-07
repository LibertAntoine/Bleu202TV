<template>
    <div> 
      </div>
</template>

<script>
export default {
  name: 'bruitageManager',
  props: {
    TotalMute : {type: Boolean, default : false}
  },
  data() {
    return {
      zap : new Audio(require('@/audio/zap.mp3')),
    }
  },
  methods: {
    playZap() {
        if(!this.TotalMute) {
            this.zap.play()
        }
    }
  }
}
</script>

<style lang="scss" >
</style>
