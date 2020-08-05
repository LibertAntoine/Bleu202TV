<template>
<div id="meteoCompo">
    <sui-modal v-model="open">
      <sui-modal-content image id="meteo">
        <i id="closeXmeteo" class="x icon large" @click="toggle"></i>
        <div v-if="this.$parent.windowWidth >= 556" id="contentMeteo"> </div>
        <div v-else id="contentMeteoMob"> </div>
      </sui-modal-content>
    </sui-modal>
</div>
</template>

<script>
export default {
  name: 'whoAreWe',
  components: {
  },
  data() {
    return {
        open : false
    }
  },
  mounted() {
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    calcTop(ratioD, v1, ratioM, v2) {
        if(this.$parent.windowWidth <= 556) {
          return ((this.$parent.windowWidth * ratioM) * v2 - (((this.$parent.windowWidth * ratioM) - this.$parent.windowHeight) / 2.0)) 
        } else {
          return ((this.$parent.windowWidth * ratioD) * v1 - (((this.$parent.windowWidth * ratioD) - this.$parent.windowHeight) / 2.0)) 
        }
        
    }
  }
}
</script>

<style lang="scss">

#closeXmeteo {
  position: absolute;
  right: 0% !important;
  opacity: 0.5;
  color : white;
  transition: opacity 1s;
  z-index: 2000;
}


#closeXmeteo:hover {
  opacity: 1;
}



#equipeAll {
  display: flex;
}


.section1 {
  padding : 15px;
  padding-left : 0px;
  width : 50%;
}

.section2 {
  padding : 15px;
  padding-right : 0px;
  width : 50%;
}


.equipePhoto {
  float : left;
  width : 40%;
  margin-right : 20px;
}



#contentWho  {
  width: 100%;
  font-size: 15px;
  overflow : auto;
  max-height: calc(90vh - 60px) !important;
}


#contentWho h3 {
  clear : both;
  margin-top : 10px;
  padding-top : 10px;
}


@media (max-width: 570px) { 
  #contentWho  {
    max-height: calc(76vh - 60px) !important;
  }


#closeXmeteo {
  top: 4% !important;
}

#equipeAll {
  display: block;
}

.section1 {
padding : 0px;
  width : 100%;
}

.section2 {
  padding : 0px;
  width : 100%;
}

#espaceFlo {
  display : none;
}

}


@media (max-height: 570px) { 
  #contentWho  {
    max-height: calc(76vh - 60px) !important;
  }
}


#contentWho .description {
  width: 100% !important;
  text-justify: auto;
}

#contentWho p {
  font-family: Lato, sans-serif !important;
  text-align: justify;
  font-size : 20px;
}


#contentWho h2 {
  font-family: Cambria, sans-serif !important;
  font-size : 28px;
}

#contentWho h3 {
  font-family: Cambria, sans-serif !important;
  font-size : 25px;
}

#meteo {
text-align: center;
height : 90vh;
padding : 0px !important;
background-color: rgba($color: #000000, $alpha: 0);
}

#contentMeteo  {
  background-image: url("../../assets/bonus/meteo/meteoD.png");
  width : 100%;
  height : 100%;
  position : absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

#contentMeteoMob {
  background-image: url("../../assets/bonus/meteo/meteoM.png");
  width : 100%;
  height : 100%;
  position : absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
}

#meteoCompo .ui.standard.modal.transition {
  background-color: rgba($color: #000000, $alpha: 0);
  box-shadow: 1px 3px 3px 0 rgba(0,0,0,0), 1px 3px 15px 2px rgba(0,0,0,0) !important;
}


#contentAnnonce {
  position: absolute;
  left : 10%;
  bottom : 10%;
  background-color: red;
}

</style>