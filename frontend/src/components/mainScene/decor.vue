<template>
  <div id="decor">
      <div v-if="$logStore.state.connected" id="background1" :class="{back: currentBackGround > 0, front: currentBackGround < 0, focus: currentBackGround == 0, hide: (currentBackGround != 0 && previousBackGround != 0), transit: (currentBackGround == 0 || previousBackGround == 0), background:true}">
        
        <img v-if="!ciseauxActive" id="CiseauxFixe" :style="{'top': calcTop(1.59, 0.395, 3.9, 0.39) + 'px'}" class="CiseauxAnim" src="@/assets/Decor/Defile/CiseauxFixe.png" @click="ciseauxActiveAnim"/>
        <img v-if="ciseauxActive" id="CiseauxAnim" :style="{'top': calcTop(1.59, 0.395, 3.9, 0.39) + 'px'}" class="CiseauxAnim" src="@/assets/Decor/Defile/CiseauxAnim.gif" />
        <img v-if="!machineActive" id="MachineFixe" :style="{'top': calcTop(1.59, 0.426, 3.9, 0.392) + 'px'}" class="MachineAnim" src="@/assets/Decor/Defile/MachineFixe.png" @click="machineActiveAnim"/>
        <img v-if="machineActive" id="MachineAnim" :style="{'top': calcTop(1.59, 0.4265, 3.9, 0.392) + 'px'}" class="MachineAnim" src="@/assets/Decor/Defile/MachineAnim.gif" />
    
      </div>
      <div v-if="$logStore.state.connected" id="background2" :class="{back: currentBackGround > 1, front: currentBackGround < 1, focus: currentBackGround == 1, hide: (currentBackGround != 1 && previousBackGround != 1), transit: (currentBackGround == 1 || previousBackGround == 1), background:true}">
       
       <div v-if="!araigneeActive" id="AraigneeFixe" class="AraigneeAnim" :style="{'top': calcTop(1.74, 0.415, 2.61, 0.5) + 'px'}" @click="araigneeActiveAnim" ></div>
       <img v-if="araigneeActive" id="AraigneeAnim" class="AraigneeAnim" :style="{'top': calcTop(1.74, 0.428, 2.61, 0.5)  + 'px'}" src="@/assets/Decor/RomanPhoto/Araignee.gif" />
       <div v-if="!araigneeActive2" id="AraigneeFixe2" class="AraigneeAnim2" :style="{'top': calcTop(1.74, 0.333, 2.61, 0.2154) + 'px'}" @click="araignee2ActiveAnim" ></div>
       <img v-if="araigneeActive2" id="AraigneeAnim2" class="AraigneeAnim2" :style="{'top': calcTop(1.74, 0.333, 2.61, 0.2154) + 'px'}" src="@/assets/Decor/RomanPhoto/Araignee.gif" />
       <img id="TutoGif" :style="{'top': calcTop(1.74, 0.4435, 2.61, 0.35) + 'px'}" src="@/assets/Decor/RomanPhoto/tutoGif.gif" />
    
      </div>
      
      <div v-if="$logStore.state.connected" id="background3" :class="{back: currentBackGround > 3, front: currentBackGround < 3, focus: currentBackGround == 3, hide: (currentBackGround != 3 && previousBackGround != 3), transit: (currentBackGround == 3 || previousBackGround == 3), background:true}">
         
        <img v-if="!ampouleActive" id="AmpouleFixe" :style="{'top': calcTop(1.84, 0.434, 3.29, 0.335) + 'px'}" class="AmpouleAnim" src="@/assets/Decor/Loge/Ampoule.png" />
        <div v-if="!ampouleActive" id="AmpouleCollapse"  :style="{'top': calcTop(1.84, 0.437, 3.29, 0.338) + 'px'}" class="AmpouleAnim" @click="ampouleActiveAnim" ></div>
        <img v-if="ampouleActive" id="AmpouleAnim" :style="{'top': calcTop(1.84,  0.437, 3.29, 0.338) + 'px'}" class="AmpouleAnim" src="@/assets/Decor/Loge/AmpouleAnim.gif" />
        <img v-if="porteActive" id="porte1" :style="{'top': calcTop(1.84, 0.400, 3.29, 0.32) + 'px'}" class="PorteAnim" src="@/assets/Decor/Loge/Porte1.png" />
        <img v-if="!porteActive" id="porte2" :style="{'top': calcTop(1.84,  0.400, 3.29, 0.32) + 'px'}" class="PorteAnim" src="@/assets/Decor/Loge/Porte2.png" />
        <div id="PorteCollapse"  :style="{'top': calcTop(1.84, 0.37, 3.29, 0.285) + 'px'}" class="PorteAnim" @click="tooglePorteAnim"></div>
      
      </div>
      <div v-if="$logStore.state.connected" id="background4" :class="{back: currentBackGround > 2, front: currentBackGround < 2, focus: currentBackGround == 2, hide: (currentBackGround != 2 && previousBackGround != 2), transit: (currentBackGround == 2 || previousBackGround == 2), background:true}">
        
        <img v-if="!ballonActive" id="ballonFixe" :style="{'top': calcTop(1.17, 0.528, 2.98, 0.49) + 'px'}" class="ballonAnim" src="@/assets/Decor/Zapping/BallonFixe.png" @click="ballonActiveAnim"/>
        <img v-if="ballonActive" id="ballonAnim" :style="{'top': calcTop(1.17,  0.528, 2.98, 0.49) + 'px'}" class="ballonAnim" src="@/assets/Decor/Zapping/BallonAnim.gif" />
        <img v-if="!radioActive" id="radioFixe" :style="{'top': calcTop(1.17, 0.4994, 2.98, 0.426) + 'px'}" class="RadioAnim" src="@/assets/Decor/Zapping/RadioFixe.png" @click="radioActiveAnim"/>
        <img v-if="radioActive" id="radioAnim" :style="{'top': calcTop(1.17,  0.4994, 2.98, 0.426) + 'px'}" class="RadioAnim" src="@/assets/Decor/Zapping/RadioAnim.gif" @click="radioActiveAnim"/>
       
      </div>
      <div v-if="$logStore.state.connected" id="background5" :class="{back: currentBackGround > 4, front: currentBackGround < 4, focus: currentBackGround == 4, hide: (currentBackGround != 4 && previousBackGround != 4), transit: (currentBackGround == 4 || previousBackGround == 4), background:true, alencon: currentFond}">
        <div id="CamFixe" class="CamAnim" :style="{'top': calcTop(1.98, 0.523, 4.1, 0.5) + 'px'}" @click="camActiveAnim"></div>
        <div id="FondCollapse" @dblclick="toogleFond"  @click="toogleFondmob" :style="{'top': calcTop(1.98, 0.36, 4.1, 0.31) + 'px'}"></div>
        <div id="RatCollapse" :style="{'top': calcTop(1.98, 0.4, 4.1, 0.33) + 'px'}" @click="ratActive"></div>
        <img v-if="plateauCamActive" id="CamGIF" class="CamAnim" :style="{'top': calcTop(1.98, 0.4475, 4.1, 0.5) + 'px'}" src="@/assets/Decor/PlateauTV/LumiereAllumee.png" />
      
      </div>
  </div>
</template>

<script>
export default {
  name: 'decor',
  data() {
    return {
      currentBackGround: 0,
      previousBackGround: null,
      plateauCamActive: false,
      ciseauxActive: false,
      machineActive: false,
      araigneeActive: false,
      araigneeActive2: false,
      ampouleActive: false,
      radioActive: false,
      ballonActive: false,
      currentFond: false,
      porteActive: false
    }
  },
  methods: {
    changeBackGround(number) {
        this.previousBackGround = this.currentBackGround
        this.currentBackGround = number
    },
      camActiveAnim() {
      this.plateauCamActive = true
      if(!this.$parent.$parent.totalMute) this.$datas[5].projecteur.play()
      setTimeout(() => {this.plateauCamActive = false}, 200);
      setTimeout(() => {this.plateauCamActive = true}, 300);
      setTimeout(() => {this.plateauCamActive = false}, 500);
      setTimeout(() => {this.plateauCamActive = true}, 800);
      setTimeout(() => {this.plateauCamActive = false}, 1000);
    },
    toogleFond() {
      //if(!this.$parent.$parent.totalMute) this.$datas[5].antenneGaucheMP3.play()
      this.currentFond = !this.currentFond
    },
    toogleFondmob() {
      if(this.$parent.windowWidth <= 556) {
       // if(!this.$parent.$parent.totalMute) this.$datas[5].antenneGaucheMP3.play()
        this.currentFond = !this.currentFond
      }
    },
    ciseauxActiveAnim() {
      this.ciseauxActive = true
      if(!this.$parent.$parent.totalMute) {
        this.$datas[5].ciseaux.currentTime = 0
        this.$datas[5].ciseaux.play()
      }

      setTimeout(() => {this.ciseauxActive = false}, 1000);
    },
    machineActiveAnim() {
      this.machineActive = true
      if(!this.$parent.$parent.totalMute) {
        this.$datas[5].machine.currentTime = 0
        this.$datas[5].machine.play()
      }
      setTimeout(() => {this.machineActive = false}, 1000);
    },
    araigneeActiveAnim() {
      this.araigneeActive = true
      if(!this.$parent.$parent.totalMute) {
          this.$datas[5].araigneeLivre.currentTime = 0
          this.$datas[5].araigneeLivre.play()
      }
      setTimeout(() => {this.araigneeActive = false}, 1000);
    },
      araignee2ActiveAnim() {
      this.araigneeActive2 = true
      if(!this.$parent.$parent.totalMute) {
        this.$datas[5].araigneeFenetre.currentTime = 0
        this.$datas[5].araigneeFenetre.play()
      }
      setTimeout(() => {this.araigneeActive2 = false}, 1000);
    },
    ampouleActiveAnim() {
      this.ampouleActive = true
      if(!this.$parent.$parent.totalMute) {
        this.$datas[5].ampoule.currentTime = 0
        this.$datas[5].ampoule.play()
      }
      setTimeout(() => {this.ampouleActive = false}, 1000);
    },
    tooglePorteAnim() {
      this.porteActive = !this.porteActive
      if(!this.$parent.$parent.totalMute) {
        this.$datas[5].porte.currentTime = 0
        this.$datas[5].porte.play()
      }
    },
    ballonActiveAnim() {
      this.ballonActive = true
      if(!this.$parent.$parent.totalMute) {
        this.$datas[5].ballon.currentTime = 0
        this.$datas[5].ballon.play()
      }
      setTimeout(() => {this.ballonActive = false}, 1000);
    },
    radioActiveAnim() {
      if(this.radioActive == true) {
        this.$datas[5].radio.pause()
      } else if(!this.$parent.$parent.totalMute) {
        this.$datas[5].radio.currentTime = 0
        this.$datas[5].radio.play()
      }
      this.radioActive = !this.radioActive
    },
    ratActive() {
      if(!this.$parent.$parent.totalMute) this.$datas[5].rat.play()
    },

    calcTop(ratioD, v1, ratioM, v2) {
        if(this.$parent.windowWidth <= 556) {
          return ((this.$parent.windowWidth * ratioM) * v2 - (((this.$parent.windowWidth * ratioM) - this.$parent.windowHeight) / 2.0)) 
        } else {
          return ((this.$parent.windowWidth * ratioD) * v1 - (((this.$parent.windowWidth * ratioD) - this.$parent.windowHeight) / 2.0)) 
        }
        
    }
  },

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
  background-image: url("../../assets/Decor/Defile/Defile.jpg");

}

#background2 {
  background-image: url("../../assets/Decor/RomanPhoto/RomanPhoto.jpg");
}

#background3 {
  background-image: url("../../assets/Decor/Loge/Loge.jpg");
}

#background4 {
  background-image: url("../../assets/Decor/Zapping/Zapping.jpg");
}

#background5 {
  background-image: url("../../assets/Decor/PlateauTV/PlateauTV.jpg");
}

.alencon {
  background-image: url("../../assets/Decor/PlateauTV/PlateauTV2.jpg") !important;
}


.background {
  position : absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100%;
  width: 100%;
  z-index: 1;
}



#CamFixe {
    left : 18.8%;
    width : 8.5%; 
    height : 9.5vw; 
    position: absolute;
    //background-color: red;

}

#CamGIF {
    left : 18.36%;
    width : 48.5%; 
    position: absolute;
}

#FondCollapse {
    left : 5.4%;
    width : 80.5%; 
    height : 25vw; 
    position: absolute;
    //background-color : red;
}

.MachineAnim {
    left : 12.13%;
    width : 15.7%; 
    height : 6.8vw; 
    position: absolute;
}

#MachineAnim {
  left : 12%;
}


.CiseauxAnim {
    left : 7.3%;
    width : 6.4%; 
    height : 6.4vw; 
    position: absolute;
}

.AraigneeAnim {
    left : 7.3%;
    width : 8%; 
    height : 8vw; 
    position: absolute;
}

.AraigneeAnim2 {
    left : 36%;
    width : 13%; 
    height : 13vw; 
    position: absolute;
}

#AraigneeFixe {
  left : 9%;
}

#AraigneeFixe2 {
  left : 38.5%;
}

.AmpouleAnim {
      left : 32.1%;
    width : 1.95%; 
    height : 1.65vw; 
    position: absolute;
}


#AmpouleFixe {
    left : 31.7%;
    width : 3.2%; 
    height : 2.6vw; 
    position: absolute;
}

#AmpouleCollapse {

    left : 24.1%;
    width : 12%; 
    height : 6vw; 
position: absolute;
}

.PorteAnim {
    left : 79.5%;
    width : 10.2%; 
    height : 10.6vw; 
    position: absolute;
}

#PorteCollapse {
    left : 75.5%;
    width : 18.2%; 
    height : 40.6vw; 
    position: absolute;
}

.ballonAnim {
    left : 9.5%;
    width : 5%; 
    height : 10.6vw; 
    position: absolute;
}

.RadioAnim {
    left : 17%;
    width : 17.2%; 
    height : 8.6vw; 
    position: absolute;
}

#RatCollapse {
    left : 83%;
    width : 14.2%; 
    height : 15.6vw; 
    position: absolute;
  
}
#TutoGif {
    left : 85.1%;
    width : 13.5%; 
    height : 7.7vw; 
    position: absolute;
}


@media (max-width: 556px) {
  #background1 {
    background-image: url("../../assets/Decor/Defile/Defile_mob.jpg");
  }

  #background2 {
    background-image: url("../../assets/Decor/RomanPhoto/RomanPhoto_mob.jpg");
  }

  #background3 {
    background-image: url("../../assets/Decor/Loge/Loge_mob.jpg");
  }

  #background4 {
    background-image: url("../../assets/Decor/Zapping/Zapping_mob.jpg");
  }

  #background5 {
    background-image: url("../../assets/Decor/PlateauTV/PlateauTV_mob.jpg");
  }

  .alencon {
    background-image: url("../../assets/Decor/PlateauTV/PlateauTV_mob2.jpg") !important;
  }

  .CamAnim {
    display : none;
  }

  #FondCollapse {
      left : 1% !important;
      width : 80.5% !important; 
      height : 40vw !important; 
      //background-color: red;
  }

.MachineAnim {
    left : 60.13%;
    width : 33.7%; 
    height : 17vw; 
    position: absolute;
}

#MachineAnim {
  left : 60%;
}


.CiseauxAnim {
    left : 47.2%;
    width : 13.4%; 
    height : 13.4vw; 
    position: absolute;
}

.AraigneeAnim {
    display:none;
}

.AraigneeAnim2 {
    left : -5%;
    width : 30%; 
    height : 40vw; 
    position: absolute;
}

#AraigneeFixe2 {
  left : 5%;
  width : 20%; 
  height : 20vw; 
}

.AmpouleAnim {
    left : 25%;
    width : 3.9%; 
    height : 3.3vw; 
    position: absolute;
}


#AmpouleFixe {
    left : 24.3%;
    width : 6.3%; 
    height : 5vw; 
    position: absolute;
}

#AmpouleCollapse {
    left : 12.1%;
    width : 21%; 
    height : 12vw; 
    position: absolute;
}

.PorteAnim {
    left : 82.5%;
    width : 19.2%; 
    height : 19.6vw; 
    position: absolute;
}

#PorteCollapse {
    left : 75.5%;
    width : 24.2%; 
    height : 70.6vw; 
    position: absolute;
}

.ballonAnim {
    left : 87%;
    width : 8%; 
    height : 16.6vw; 
    position: absolute;
}

.RadioAnim {
    left : -3%;
    width : 24.2%; 
    height : 12.6vw; 
    position: absolute;
}

#RatCollapse {
    left : 80%;
    width : 19.2%; 
    height : 20.6vw; 
    position: absolute;
}

#TutoGif {
    left : 73.5%;
    width : 25.5%; 
    height : 14.3vw; 
    position: absolute;
}



}




</style>
