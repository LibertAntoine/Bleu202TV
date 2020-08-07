<template>
<div id="magazineCompo">
    <sui-modal v-model="open">
      <sui-modal-content image id="magazine">
        <i id="closeXmagasine" class="x icon large" @click="toggle"></i>
        <div v-if="this.$logStore.state.astroSigne == 1" id="belier" class="contentMagazine"></div>
        <div v-if="this.$logStore.state.astroSigne == 2" id="taureau" class="contentMagazine"></div>
        <div v-if="this.$logStore.state.astroSigne == 3" id="gemeaux" class="contentMagazine"></div>
        <div v-if="this.$logStore.state.astroSigne == 4" id="cancer" class="contentMagazine"></div>
        <div v-if="this.$logStore.state.astroSigne == 5" id="lion" class="contentMagazine"></div>
        <div v-if="this.$logStore.state.astroSigne == 6" id="vierge" class="contentMagazine"></div>
        <div v-if="this.$logStore.state.astroSigne == 7" id="balance" class="contentMagazine"></div>
        <div v-if="this.$logStore.state.astroSigne == 8" id="scorpion" class="contentMagazine"></div>
        <div v-if="this.$logStore.state.astroSigne == 9" id="sagittaire" class="contentMagazine"></div>
        <div v-if="this.$logStore.state.astroSigne == 10" id="capricorne" class="contentMagazine"></div>
        <div v-if="this.$logStore.state.astroSigne == 11" id="verseau" class="contentMagazine"></div>
        <div v-if="this.$logStore.state.astroSigne == 12" id="poisson" class="contentMagazine"></div>
      </sui-modal-content>
    </sui-modal>
</div>
</template>

<script>
//
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

#closeXmagasine {
  position: absolute;
  top : 4%;
  right: 0% !important;
  opacity: 0.5;
  color : white;
  transition: opacity 1s;
  z-index: 2000;
}


#closeXmagasine:hover {
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

#magazine {
height : 90vh;
padding : 0px !important;
background-color: rgba($color: #000000, $alpha: 0);
max-width: 2000px !important;
}

.contentMagazine  {
  //background-image: url("../../assets/bonus/magazine/MagBalance.jpg");
  width : 100%;
  height : 100%;
  position : absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}


#belier  {
  background-image: url("../../assets/bonus/magazine/desktop/Belier.jpg");
}

#taureau  {
  background-image: url("../../assets/bonus/magazine/desktop/Taureau.jpg");
}

#gemeaux  {
  background-image: url("../../assets/bonus/magazine/desktop/Gemeaux.jpg");
}

#cancer  {
  background-image: url("../../assets/bonus/magazine/desktop/Cancer.jpg");
}

#lion  {
  background-image: url("../../assets/bonus/magazine/desktop/Lion.jpg");
}

#vierge  {
  background-image: url("../../assets/bonus/magazine/desktop/Vierge.jpg");
}

#balance  {
  background-image: url("../../assets/bonus/magazine/desktop/Balance.jpg");
}

#scorpion  {
  background-image: url("../../assets/bonus/magazine/desktop/Scorpion.jpg");
}

#sagittaire  {
  background-image: url("../../assets/bonus/magazine/desktop/Sagittaire.jpg");
}

#capricorne {
  background-image: url("../../assets/bonus/magazine/desktop/Capricorne.jpg");
}

#verseau  {
  background-image: url("../../assets/bonus/magazine/desktop/Verseau.jpg");
}

#poisson  {
  background-image: url("../../assets/bonus/magazine/desktop/Poisson.jpg");
}


@media (max-width: 570px) { 

  #belier  {
    background-image: url("../../assets/bonus/magazine/mobile/BelierMobile.jpg");
  }

  #taureau  {
    background-image: url("../../assets/bonus/magazine/mobile/TaureauMobile.jpg");
  }

  #gemeaux  {
    background-image: url("../../assets/bonus/magazine/mobile/GemeauxMobile.jpg");
  }

  #cancer  {
    background-image: url("../../assets/bonus/magazine/mobile/CancerMobile.jpg");
  }

  #lion  {
    background-image: url("../../assets/bonus/magazine/mobile/LionMobile.jpg");
  }

  #vierge  {
    background-image: url("../../assets/bonus/magazine/mobile/ViergeMobile.jpg");
  }

  #balance  {
    background-image: url("../../assets/bonus/magazine/mobile/BalanceMobile.jpg");
  }

  #scorpion  {
    background-image: url("../../assets/bonus/magazine/mobile/ScorpionMobile.jpg");
  }

  #sagittaire  {
    background-image: url("../../assets/bonus/magazine/mobile/SagittaireMobile.jpg");
  }

  #capricorne {
    background-image: url("../../assets/bonus/magazine/mobile/CapricorneMobile.jpg");
  }

  #verseau  {
    background-image: url("../../assets/bonus/magazine/mobile/VerseauMobile.jpg");
  }

  #poisson  {
    background-image: url("../../assets/bonus/magazine/mobile/PoissonMobile.jpg");
  }


}


@media (max-height: 570px) { 

  #belier  {
    background-image: url("../../assets/bonus/magazine/mobile/BelierPaysageMob.jpg");
  }

  #taureau  {
    background-image: url("../../assets/bonus/magazine/mobile/TaureauPaysageMob.jpg");
  }

  #gemeaux  {
    background-image: url("../../assets/bonus/magazine/mobile/GemeauxPaysageMob.jpg");
  }

  #cancer  {
    background-image: url("../../assets/bonus/magazine/mobile/CancerPaysageMob.jpg");
  }

  #lion  {
    background-image: url("../../assets/bonus/magazine/mobile/LionPaysageMob.jpg");
  }

  #vierge  {
    background-image: url("../../assets/bonus/magazine/mobile/ViergePaysageMob.jpg");
  }

  #balance  {
    background-image: url("../../assets/bonus/magazine/mobile/BalancePaysageMob.jpg");
  }

  #scorpion  {
    background-image: url("../../assets/bonus/magazine/mobile/ScorpionPaysageMob.jpg");
  }

  #sagittaire  {
    background-image: url("../../assets/bonus/magazine/mobile/SagittairePaysageMob.jpg");
  }

  #capricorne {
    background-image: url("../../assets/bonus/magazine/mobile/CapricornePaysageMob.jpg");
  }

  #verseau  {
    background-image: url("../../assets/bonus/magazine/mobile/VerseauMobile.jpg");
  }

  #poisson  {
    background-image: url("../../assets/bonus/magazine/mobile/PoissonMobile.jpg");
  }


}






#magazineCompo .ui.standard.modal.transition {
  background-color: rgba($color: #000000, $alpha: 0);
  box-shadow: 1px 3px 3px 0 rgba(0,0,0,0), 1px 3px 15px 2px rgba(0,0,0,0) !important;
}


#magazineCompo .ui.modal {
  width: 90% !important;
}

#contentAnnonce {
  position: absolute;
  left : 10%;
  bottom : 10%;
  background-color: red;
}

@media (max-height: 556px) {

#contentMagazine  {
  background-size: auto 100%;
}
}

</style>