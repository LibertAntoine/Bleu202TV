<template>
  <div id="scene">
      <television ref="television"/>
      <TVstand/>
      <decor ref="decor" />
      <div v-if="currentCollapse == 0" id="JournalCollapse" :style="{'top': calcTop(1.59, 0.37, 3.9, 0.32) + 'px'}" @click="activeJournal" ></div>
      
      <div v-if="currentCollapse == 1" id="TutoCollapse" :style="{'top': calcTop(1.74, 0.44, 2.61, 0.345) + 'px'}" @click="activeTuto" ></div>
      <div v-if="currentCollapse == 1" id="MeteoCollapse" :style="{'top': calcTop(1.74, 0.56, 2.61, 0.31) + 'px'}" @click="activeMeteo" ></div>
      
      <div v-if="currentCollapse == 3" id="MagasineCollapse" :style="{'top': calcTop(1.84, 0.56, 3.29, 0.47) + 'px'}" @click="activeMagazine" ></div>
    
      <journal ref="journal" />
       
      <meteo ref="meteo"/>
      <magazine ref="magazine"/>
      <tati ref="tati"/>
    
  </div>
</template>

<script>

import TVstand from '@/components/mainScene/TVstand'
import television from '@/components/mainScene/television'
import decor from '@/components/mainScene/decor'
import journal from '@/components/bonus/journal'
import meteo from '@/components/bonus/meteo'
import magazine from '@/components/bonus/magazine'
import tati from '@/components/bonus/tati'

export default {
  name: 'scene',
  components: {
    television,
    TVstand,
    decor,
    journal,
    meteo,
    magazine,
    tati
  },
  data() {
    return {
      windowHeight : window.innerHeight,
      windowWidth : window.innerWidth,
      currentCollapse : -1,
    }
  },
    methods: {
    calcTop(ratioD, v1, ratioM, v2) {
        if(this.windowWidth <= 556) {
          return ((this.windowWidth * ratioM) * v2 - (((this.windowWidth * ratioM) - this.windowHeight) / 2.0)) 
        } else {
          return ((this.windowWidth * ratioD) * v1 - (((this.windowWidth * ratioD) - this.windowHeight) / 2.0)) 
        }
    },
    activeJournal() {
      this.$refs.journal.toggle();
    },
    activeTuto() {
      this.$refs.television.$refs.modalVideo6.toggle();
    },
    activeMeteo() {
      this.$refs.meteo.toggle();
    },
    activeMagazine() {
      this.$refs.magazine.toggle();
    }
  },
}
</script>

<style lang="scss" >


#JournalCollapse {
    left : 52.3%;
    width : 6.4%; 
    height : 6.4vw; 
    position: absolute;
    z-index : 900;
}

#TutoCollapse {
    left : 85.3%;
    width : 13.3%; 
    height : 8.2vw; 
    position: absolute;
    z-index : 900;
}

#MeteoCollapse {
    left : 13%;
    width : 6.5%; 
    height : 6vw; 
    position: absolute;
    z-index : 900;
}

#MagasineCollapse {
    left : 18%;
    width : 8%; 
    height : 7.5vw; 
    position: absolute;

    z-index : 900;
}

@media (max-width: 556px) { 

#JournalCollapse {
    left : 56.7%;
    width : 15.4%; 
    height : 12.4vw; 
    position: absolute;

    z-index : 900;
}

#TutoCollapse {
    left : 74%;
    width : 25.5%; 
    height : 16vw; 
    position: absolute;
    z-index : 900;
}

#MeteoCollapse {
    left : 23%;
    width : 12%; 
    height : 9vw; 
    position: absolute;

    z-index : 900;
}

#MagasineCollapse {
    left : 0%;
    width : 18%; 
    height : 18vw; 
    position: absolute;
    z-index : 900;
}



}


</style>
