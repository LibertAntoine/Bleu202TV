<template>
  <div id="channelController" >
    <div id="channelTest" v-bind:class="{ Mobile: Mobile, Desktop: !Mobile }" @click="zapping()">
        <img ref="Bouton" v-if="!Mobile" :class="{hidden:!CanalFocus || !$logStore.state.connected, BoutonChannel:true}" alt="Button Channel" src="@/assets/TV/Animations/Bouton_Appuye.png">

        <img v-show="CanalFocus && CanalState && $logStore.state.connected" class="TitleChannel" alt="Title of the Channel" :src="this.GreenImage">
        <img v-show="!CanalFocus && CanalState && $logStore.state.connected" class="TitleChannel" alt="Title of the Channel" :src="this.BlueImage">
        <img v-show="!CanalState || !$logStore.state.connected" class="TitleChannel" alt="Title of the Channel" :src="this.GreyImage">
    </div>
  </div>
</template>

<script>

export default {
  name: 'channelController',
  props: {
      CanalNb : {type: String, required : true},
      CurrentCanal : {type: String, required : true},
      Active : {type: Boolean, default : false},
      Mobile : {type: Boolean, default : false}
  },
  watch: {
      CurrentCanal : function () {this.checkBouton()}
  },
  data() {
    return {
      CanalState : this.Active,
      CanalFocus : null,
      GreenImage : null,
      BlueImage : null,
      GreyImage : null,
      VideoId : null,
      ModalTitle: null
    }
  },
  mounted: function() {
      this.GreenImage = require("@/assets/TV/Canal_Title/Title_Canal" + this.CanalNb + "Green.png")
      this.BlueImage = require("@/assets/TV/Canal_Title/Title_Canal" + this.CanalNb + "Blue.png")
      this.GreyImage = require("@/assets/TV/Canal_Title/Title_Canal" + this.CanalNb + "Grey.png")
      this.checkBouton();
  },
  computed: {
  },
  methods: {
      zapping : function () {
        this.$parent.zap(this.CanalNb)
      },
      checkBouton : function () {
          this.CanalFocus = (this.CurrentCanal == this.CanalNb) ? true : false
          }
      }
}
</script>

<style lang="scss">
.hidden {
  opacity : 0;
}

#channelTest {
  cursor : pointer;
}

.Desktop .BoutonChannel {
  position: relative;
  top: 10%;
  line-height: 1px !important;
  right: 10%; 
  height: 80%;
}

.Desktop .TitleChannel {
    position: relative;
    top : -5%;
    height: 50%;
}

.Desktop {
  z-index: 6;
  border-radius: 5px;
  position: relative;
  height: 100%;
  width: 100%;
  transition: background-color 0.3s;
}

.Desktop:hover {
    background-color: rgba($color: #ffffff, $alpha: 0.3);
}

.Mobile {
  padding: 0px;
     
}
.Mobile .TitleChannel {
    padding: 0px;

    width: 100%;
    padding-top : 10px;
    padding-bottom : 10px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>