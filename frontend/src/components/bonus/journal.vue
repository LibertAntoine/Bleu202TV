<template>
<div id="journalCompo">
    <sui-modal v-model="open">
      <sui-modal-content image id="journal">
        
        <div id="journalBloc">
          <div id="journalBloc2">
            <i id="closeXjournal" class="x icon " @click="toggle"></i>
            <img v-if="this.$parent.windowWidth >= 556 && this.$parent.windowHeight >= 556" id="contentJournal" src="@/assets/bonus/journal/journal.png" />
            <img v-if="this.$parent.windowWidth >= 556 && this.$parent.windowHeight <= 556" id="contentJournalMP" src="@/assets/bonus/journal/JournalMP.jpg" />
            <img v-if="this.$parent.windowWidth <= 556"  id="contentJournalM" src="@/assets/bonus/journal/journalM.jpg"/>
            <div id="journalAnnonce">
                          <p>Bonjour je m’appelle {{$logStore.state.pseudo}} et je cherche un jardin
                          pour profiter du futur confinement. Peu importe la taille, pourvu qu’il y ait une piscine, un
              barbecue, une chaise longue, de l’herbe, des arbres, des fleurs, un trampoline.
              {{$logStore.state.pseudo}}@compote.fr</p>
              <p> {{ ($logStore.state.favoriteCharacter == 1) ? "Feodora" : "Le Bon Gaultier"}} va doubler {{ ($logStore.state.favoriteCharacter == 1) ? "Angelina Jolie" : "Tom Cruise"}} pour la version française de son prochain film.</p>

              <p>Vends sosie de l’ours croisé sur Alençon 2€. Ne mange pas les gens (enfin je crois).</p>
          </div>
          </div>
         </div>
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


#closeXjournal {
  position: absolute;
  top: 0% !important;
  right: 0% !important;
  opacity: 0.5;
  transition: opacity 1s;
}


#closeXjournal:hover {
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

#journal {
height : 90vh;
padding : 0px !important;
background-color: rgba($color: #000000, $alpha: 0);
}

#contentJournal {
  /*
  background-image: url("../../assets/bonus/journal/journal.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  */
  height : 100%;
}

#contentJournalM {
  width : 100%;
}

#contentJournalMP {
  height : 100%;
}
#journalCompo .ui.standard.modal.transition {
  position: relative;
  background-color: rgba($color: #000000, $alpha: 0);
  box-shadow: 1px 3px 3px 0 rgba(0,0,0,0), 1px 3px 15px 2px rgba(0,0,0,0) !important;

}


#journalAnnonce {
  font-family: Bodoni MT, serif !important;
  text-align: left;
  position: absolute;
  left : 2.3%;
  bottom : 2%;
  height : 17%;
  width : 59%;
  color: black;
  text-align: justify;
  padding: 4px;
  font-size: 11px;
}





#journalBloc {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  text-align: center;
}


@media (max-width: 556px) {

  #journalBloc {
    position: relative;
    padding: 10px;
  }

  #journalAnnonce {
    left : 2.3%;
    top : 26%;
    height : 59%;
    width : 94%;
    padding: 4px;
    font-size: 23px;
    //background-color: red;
  }
 }

@media (max-width: 500px) {
  #journalAnnonce {
    font-size: 21px;
  }
 }

 @media (max-width: 460px) {
  #journalAnnonce {
    font-size: 19px;
  }
 }

  @media (max-width: 423px) {
  #journalAnnonce {
    font-size: 17px;
  }
 }

   @media (max-width: 380px) {
  #journalAnnonce {
    font-size: 15px;
  }
 }

    @media (max-width: 350px) {
  #journalAnnonce {
    font-size: 13px;
  }
 }


    @media (max-width: 310px) {
  #journalAnnonce {
    font-size: 11px;
  }
 }


  #journalBloc2 {

    position: relative;
    margin: 0 auto;


  }



@media (min-width: 556px) {
  #journalBloc2 {
position: absolute;
    height : 100%;
  top: 50%;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  }

#journalBloc {

position : relative;
  height : 100%;
  top: 50%;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

}

}


@media (max-height: 556px) and (min-width: 556px) {

  #journalBloc {
    position: relative;
    padding: 10px;
  }

  #journalAnnonce {
    left : 2.3%;
    top : 22%;
    height : 59%;
    width : 94%;
    padding: 4px;
    font-size: 23px;
    //background-color: red;
  }

      #journalBloc2 {

        margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  text-align: center;

    }

  #journalBloc {


      margin: 0;
  position: relative;
  top: 50%;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  text-align: center;

  }

 }


@media (max-height: 870px) and (min-width: 556px) {
  #journalAnnonce {
    font-size: 10px;
  }
 }

 @media (max-height: 800px) and (min-width: 556px) {
  #journalAnnonce {
    font-size: 9px;
  }
 }

  @media (max-height: 710px) and (min-width: 556px) {
  #journalAnnonce {
    font-size: 8px;
  }
 }

   @media (max-height: 650px) and (min-width: 556px) {
  #journalAnnonce {
    font-size: 7px;
  }
 }

@media (max-height: 556px) and (min-width: 556px) {
  #journalAnnonce {
    font-size: 24px;
  }
 }


 @media (max-height: 510px) and (min-width: 556px) {
  #journalAnnonce {
    font-size: 22px;
  }
 }


 @media (max-height: 466px) and (min-width: 556px) {
  #journalAnnonce {
    font-size: 20px;
  }
 }

  @media (max-height: 426px) and (min-width: 556px) {
  #journalAnnonce {
    font-size: 18px;
  }
 }


  @media (max-height: 370px) and (min-width: 556px) {
  #journalAnnonce {
    font-size: 16px;
  }
 }

   @media (max-height: 330px) and (min-width: 556px) {
  #journalAnnonce {
    font-size: 14px;
  }
 }

    @media (max-height: 300px) and (min-width: 556px) {
  #journalAnnonce {
    font-size: 12px;
  }
 }

</style>