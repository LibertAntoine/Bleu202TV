<template>
  <div id="channelController">
    <div id="channelTest">
        <img ref="Bouton" class="BoutonChannel" alt="Button Channel" src="@/assets/Bouton_Appuye.png">

        <img v-if="this.CanalState == 'Green'" class="TitleChannel" alt="Title of the Channel" :src="this.GreenImage">
        <img v-if="this.CanalState == 'Blue'" class="TitleChannel" alt="Title of the Channel" :src="this.BlueImage">
        <img v-if="this.CanalState == 'Grey'" class="TitleChannel" alt="Title of the Channel" :src="this.GreyImage">
    </div>
  </div>
</template>

<script>
export default {
  name: 'channelController',
  components: {
  },
  props: {
      CanalNb : {type: String, required : true},
      GifName : {type: String, required : true},
      InitState : {type: String, default : "Grey"},
      InitVideo : {type: String, default : "304402648"},
      InitModalTitle : {type: String, required : true},
  },
  watch: {
      CanalState : function () {this.checkBouton()}
  },
  data() {
    return {
      CanalState : this.InitState,
      GreenImage : null,
      BlueImage : null,
      GreyImage : null,
      GifChannel : null,
      VideoId : null,
      ModalTitle: null
    }
  },
  mounted: function() {
      this.GreenImage = require("@/assets/Canal_Title/Title_Canal" + this.CanalNb + "Green.png")
      this.BlueImage = require("@/assets/Canal_Title/Title_Canal" + this.CanalNb + "Blue.png")
      this.GreyImage = require("@/assets/Canal_Title/Title_Canal" + this.CanalNb + "Grey.png")
      this.GifChannel = require("@/assets/" + this.GifName + ".gif")
      this.VideoId = this.InitVideo
      this.ModalTitle = this.InitModalTitle
      this.checkBouton();
  },
  methods: {
      checkBouton : function () {
          if(this.CanalState != 'Green') {
            this.$refs.Bouton.style.opacity = '0.0'
          } else {
            this.$refs.Bouton.style.opacity = '1.0' 
          }
      }
  }
}
</script>

<style lang="scss">
.BoutonChannel {
  position: relative;
  top: 10%;
  line-height: 1px !important;
  right: 10%; 
  height: 80%;
}

.TitleChannel {
    position: relative;
    top : -5%;
    height: 50%;
}

#channelTest {
  z-index: 6;
  border-radius: 5px;
  position: relative;
  height: 100%;
  width: 100%;
  transition: background-color 0.3s;
}

#channelTest:hover {
    background-color: rgba($color: #ffffff, $alpha: 0.3);
}

</style>