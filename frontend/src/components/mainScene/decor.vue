<template>
  <div id="decor">
      <div v-show="$logStore.state.connected" id="background1" :class="{back: currentBackGround > 0, front: currentBackGround < 0, focus: currentBackGround == 0, hide: (currentBackGround != 0 && previousBackGround != 0), transit: (currentBackGround == 0 || previousBackGround == 0), background:true}"></div>
      <div v-show="$logStore.state.connected" id="background2" :class="{back: currentBackGround > 1, front: currentBackGround < 1, focus: currentBackGround == 1, hide: (currentBackGround != 1 && previousBackGround != 1), transit: (currentBackGround == 1 || previousBackGround == 1), background:true}"></div>
      <div v-show="$logStore.state.connected" id="background3" :class="{back: currentBackGround > 2, front: currentBackGround < 2, focus: currentBackGround == 2, hide: (currentBackGround != 2 && previousBackGround != 2), transit: (currentBackGround == 2 || previousBackGround == 2), background:true}"></div>
      <div v-show="$logStore.state.connected" id="background4" :class="{back: currentBackGround > 3, front: currentBackGround < 3, focus: currentBackGround == 3, hide: (currentBackGround != 3 && previousBackGround != 3), transit: (currentBackGround == 3 || previousBackGround == 3), background:true}"></div>
      <div v-show="$logStore.state.connected" id="background5" :class="{back: currentBackGround > 4, front: currentBackGround < 4, focus: currentBackGround == 4, hide: (currentBackGround != 4 && previousBackGround != 4), transit: (currentBackGround == 4 || previousBackGround == 4), background:true}"></div>
  </div>
</template>

<script>
export default {
  name: 'decor',
  data() {
    return {
      currentBackGround: 0,
      previousBackGround: null,
    }
  },
  methods: {
    changeBackGround(number) {
        this.previousBackGround = this.currentBackGround
        this.currentBackGround = number
    }
  }
}
</script>

<style lang="scss" >

.back {
  right : 100%;
}

.front {
  right : -100%;
}

.focus {
  right : 0%;
}

.transit {
  transition : right 1s;
}

.hide {
  opacity: 0;
}

#background1 {
  background-image: url("../../assets/Defilee3.jpg");
}

#background2 {
  background-image: url("../../assets/PlateauTV.jpg");
}

#background3 {
  background-image: url("../../assets/Roman2.jpg");
}

#background4 {
  background-image: url("../../assets/Zapping.jpg");
}

#background5 {
  background-image: url("../../assets/loge4.jpg");
}


.background {
  position : absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: -2;
}

</style>
