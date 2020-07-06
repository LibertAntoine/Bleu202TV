<template>
<div id="acceuilModal">
    <sui-modal ref="modal" id="quizModal" v-model="open" :closable=false>
      <sui-modal-header id="acceuil-header">
          <i ref='returnIcon' id="returnIcon" class="angle double left small icon" @click="retour"></i> 
          Quel déconfiné es-tu ? 
      </sui-modal-header>

      <sui-modal-content image id="quiz-content">
        <div id="blockQuestion">
          <div ref="question1" id="question1" class="question">
          <sui-modal-description>
            <p>Hop Hop Hop !! Avant de commencer j'aimerai bien en savoir un peu plus sur toi le petit nouveau.<p>
            <p>Dis moi un peu, si tu étais un gâteau, lequel serais-tu ?<p>
            <div id="acceuil-button">
              <sui-card-group :items-per-row="3">
                <sui-card class="radioCardfix" @click="answer('1')">
                    <sui-image :src="gateau1" />
                  <sui-card-content class="quizContentHeader">
                    <sui-card-header class="quizHeader">Un Fraisier</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCardfix" @click="answer('2')">
                    <sui-image :src="gateau2" />
                  <sui-card-content class="quizContentHeader">
                    <sui-card-header class="quizHeader">Une tarte aux pommes</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCardfix" @click="answer('3')">
                    <sui-image :src="gateau3" />
                  <sui-card-content class="quizContentHeader">
                    <sui-card-header class="quizHeader">Un fondant au chocolat</sui-card-header>
                  </sui-card-content>
                </sui-card>
                </sui-card-group>
            </div>
          </sui-modal-description>
          </div>

          <div ref="question2" class="question">
          <sui-modal-description id="question2">
            <p>Dis moi un peu, si tu étais une boisson, laquelle serais-tu ?<p>
            <div id="acceuil-button">
              <sui-card-group :items-per-row="3">
                <sui-card class="radioCardfix" @click="answer('1')">
                  <sui-image :src="boisson1" />
                  <sui-card-content class="quizContentHeader">
                    <sui-card-header class="quizHeader">Un Lait fraise</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCardfix" @click="answer('2')"> 
                  <sui-image :src="boisson2" />
                  <sui-card-content class="quizContentHeader">
                    <sui-card-header class="quizHeader">Un Mojito</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCardfix" @click="answer('3')">
                  <sui-image :src="boisson3" />
                  <sui-card-content class="quizContentHeader">
                    <sui-card-header class="quizHeader">Un Monaco</sui-card-header>
                  </sui-card-content>
                </sui-card>
                </sui-card-group>
            </div>
          </sui-modal-description>
          </div>


          <div ref="question3" id="question3" class="question">
          <sui-modal-description id="question3" class="questionContent">
            <p>Dis moi un peu, dans le monde d'avant, ton signe astrologique, c'était quoi ?<p>
            <div id="acceuil-button">
              <sui-card-group :items-per-row="4">
                <sui-card class="radioCard" @click="answer('1')">
                  <sui-image :src="signe1" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Bélier</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('2')"> 
                  <sui-image :src="signe2" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Taureau</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('3')">
                  <sui-image :src="signe3" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Gémeaux</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('4')">
                  <sui-image :src="signe4" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Cancer</sui-card-header>
                  </sui-card-content>
                </sui-card>

                <sui-card class="radioCard" @click="answer('5')">
                  <sui-image :src="signe5" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Lion</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('6')"> 
                  <sui-image :src="signe6" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Vierge</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('7')">
                  <sui-image :src="signe7" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Balance</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('8')">
                  <sui-image :src="signe8" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Scorpion</sui-card-header>
                  </sui-card-content>
                </sui-card>

                <sui-card class="radioCard" @click="answer('9')">
                  <sui-image :src="signe9" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Sagittaire</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('10')"> 
                  <sui-image :src="signe10" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Capricorne</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('11')">
                  <sui-image :src="signe11" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Verseau</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('12')">
                  <sui-image :src="signe12" />
                  <sui-card-content class="astroTitle quizContentHeader">
                    <sui-card-header class="quizHeader">Poisson</sui-card-header>
                  </sui-card-content>
                </sui-card>
                </sui-card-group>
            </div>
          </sui-modal-description>
          </div>

          <div ref="question4" class="question" >
          <sui-modal-description id="question4">
            <p>Dis moi un peu, si tu étais une boisson, laquelle serais-tu ?<p>
            <div id="acceuil-button">
              <sui-card-group :items-per-row="2">
                <sui-card class="radioCardfix " @click="answer('1')">
                  <sui-image :src="perso1" class="persoQuiz"/>
                  <sui-card-content class="quizContentHeader">
                    <sui-card-header class="quizHeader">Nymphadora</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCardfix persoQuiz" @click="answer('2')"> 
                  <sui-image :src="perso2" class="persoQuiz"/>
                  <sui-card-content class="quizContentHeader">
                    <sui-card-header class="quizHeader">Le gueux</sui-card-header>
                  </sui-card-content>
                </sui-card>
                </sui-card-group>
            </div>
          </sui-modal-description>
          </div>

          <div ref="question5" class="question">
          <sui-modal-description id="question6" >
            <p>Dis moi un peu, dans le monde d'après, comment tu aimerais qu'on t'apelle ?<p>
            <div id="acceuil-button">
              <sui-input  @input="checkChange"  placeholder="Coro-Survivor..." focus maxlength="20" />
              <sui-button  @click="valid(textInput)" color="teal" ref="validator5" size="huge" id="button_right" disabled>
                Valider
                </sui-button>
            </div>
          </sui-modal-description>
          </div>

          <div ref="bilan" class="question">
          <sui-modal-description id="bilan" >
            <p>Bienvenue à toi {{reponses[5]}}, tu es maintenant prêt pour le monde d'après. Nous sommes heureux de te dicerner ton nom de virus, rien qu'à toi :<p>
            <p id="uniqueName">{{$logStore.state.uniqueName}}<p>
            <p>Garde-le bien en tête, car il te seras demandez si tu reviens nous voir.<p>
            <div id="acceuil-button">
              <sui-button color="teal" @click='finishClose' size="huge" id="button_right">
                Fermer
              </sui-button>
            </div>
          </sui-modal-description>
          </div>


      </div>
      </sui-modal-content>



    </sui-modal>
</div>
</template>

<script>

export default {
  name: 'quizPage',
  components: {
  },
  data() {
    return {
        open : false,
        question : 1,
        reponses : [],
        textInput : "",
        onChange: false,
        gateau1 : require('@/assets/quiz/Gateau/Gateau1.jpg'),
        gateau2 : require('@/assets/quiz/Gateau/Gateau2.jpg'),
        gateau3 : require('@/assets/quiz/Gateau/Gateau3.jpg'),
        boisson1 : require('@/assets/quiz/Boisson/Boisson1.jpg'),
        boisson2 : require('@/assets/quiz/Boisson/Boisson2.jpg'),
        boisson3 : require('@/assets/quiz/Boisson/Boisson3.jpg'),
        signe1 : require('@/assets/quiz/Astro/Signe1.jpg'),
        signe2 : require('@/assets/quiz/Astro/Signe2.jpg'),
        signe3 : require('@/assets/quiz/Astro/Signe3.jpg'),
        signe4 : require('@/assets/quiz/Astro/Signe4.jpg'),
        signe5 : require('@/assets/quiz/Astro/Signe5.jpg'),
        signe6 : require('@/assets/quiz/Astro/Signe6.jpg'),
        signe7 : require('@/assets/quiz/Astro/Signe7.jpg'),
        signe8 : require('@/assets/quiz/Astro/Signe8.jpg'),
        signe9 : require('@/assets/quiz/Astro/Signe9.jpg'),
        signe10 : require('@/assets/quiz/Astro/Signe10.jpg'),
        signe11 : require('@/assets/quiz/Astro/Signe11.jpg'),
        signe12 : require('@/assets/quiz/Astro/Signe12.jpg'),
        perso1 : require('@/assets/quiz/Perso/perso1.png'),
        perso2 : require('@/assets/quiz/Perso/perso2.png')
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    finishClose() {
      this.reponses = []
      this.question = 1 
      this.persoName = ""
      this.open = !this.open;
      this.$refs.bilan.style.opacity = 1;
      setTimeout(() => {
        this.$refs.bilan.style.display = "none";
        this.$refs.question1.style.display = "block";
        this.$refs.returnIcon.style.display = "block" 
        this.$refs.question1.style.opacity = 1;
      }, 1000);

    },
    retour() {
      if(!this.onChange) {
        if(this.question == 1) {
          this.open = !this.open;
          this.$logStore.state.opener = true;
        } else {
          this.textInput = "";
          this.onChange = true;
          this.reponses.pop();
          this.$refs['question' + this.question].style.opacity = 0;
          setTimeout(() => {
          this.$refs['question' + this.question].style.display = "none" 
          this.question--
          this.$refs['question' + this.question].style.display = "block" 
          }, 500);
                setTimeout(() => {
            this.$refs['question' + this.question].style.opacity = 1;
            this.onChange = false;
          }, 550);
        }
      }

    },
    answer(response) {
      if(!this.onChange) {
      this.textInput = "";
      this.onChange = true;
      this.$refs['question' + this.question].style.opacity = 0;
      
      this.reponses.push(response);
      setTimeout(() => {
        this.$refs['question' + this.question].style.display = "none" 
        this.question++
        this.$parent.$parent.toogleOpenSong(this.$datas[5]['openQ' + this.question])
        this.$refs['question' + this.question].style.display = "block" 
        }, 500);
              setTimeout(() => {
          this.$refs['question' + this.question].style.opacity = 1;
          this.onChange = false;
        }, 550);

      }
    }, 
    checkChange(e) {
      this.textInput = e
      if(e != "" && e.length <= 20) {
        this.$refs['validator' + this.question].disabled = false;
      } else {
        this.$refs['validator' + this.question].disabled = true;
      }
    },
    async valid(response) {
      if(!this.onChange) {
      this.onChange = true;
      this.$refs['question' + this.question].style.opacity = 0;
      this.$refs.returnIcon.style.display = "none" 
      this.reponses.push(response);
      setTimeout(() => {
        this.$refs['question' + this.question].style.display = "none" 
      }, 500);
      await this.$logStore.dispatch('signUp', this.reponses)
      if(this.$logStore.state.connected) {
        this.$parent.$parent.$refs.scene.$refs.television.zap('0')
        this.$refs.bilan.style.display = "block"
        setTimeout(() => {
          this.$refs.bilan.style.opacity = 1;
          this.onChange = false;
        }, 1000);
        }
      }
    }
  }
}
</script>

<style lang="scss">

//<div id="gateau1" class="gateau"></div>

.astroTitle {
  padding : 6px !important;
  height: 40px;
}


.radioCard {
  opacity : 0.7 ;
  transition: opacity 0.5s !important;
  height: 100% !important;
}

.ImageChoice {
 width: 100%;
}

.ImageChoice {
  height : 330px;
}

.ImageChoiceAstro {
  height : 120px;
  width: 120px;
}


#returnIcon {
  padding-top: 11px;
  float: left;
  opacity: 0.5;
  transition: opacity 0.5s;
}

#returnIcon:hover {
  opacity: 1;
}

#question1 {
  display:block;
  opacity : 1;
}

.question {
    font-size: 20px;
    width : 100%;
    display: none;
    opacity: 0;
    transition : opacity 0.5s;
}

#acceuil-button {
    text-align: center;
}


#button_right {
    margin : 10px;
}

#button_left {
    margin : 10px;
}

#blockQuestion {
  
  transition : height 1s
}


#acceuil-header {
    text-align: center;
    padding : 10px !important;
    padding-left : 20px !important;
    background-color: #23a1d3;
    height : 65px;
    color : black;
    font-size: 36px;
    font-weight: normal;
}

#closeX {
  position: absolute;
  right : 15px;
  opacity: 40%;
  transition: opacity 0.3s;
}

#closeX:hover {
  opacity: 100%;
}

.ui.standard.modal {
  max-height: 95%;
  margin : auto;
  transition: height 2s;
  
}

.radioCard:hover {
  opacity : 1;
}

.radioCardfix:hover {
  opacity : 1;
}

.radioCardfix {
  opacity : 0.7 ;
  transition: opacity 0.5s !important;
  
}

#quiz-content {
  overflow : auto;
  height : 90%;
}

.ui.modal {
  position : relative !important;
}

  .ui.two.cards {
    position : relative !important;
    width : 100% !important;
    margin : 0 auto !important;
  }


@media (max-width: 570px) {

  .astroTitle {
    height: 25px !important;
  }

  #acceuil-header {
    font-size : 20px !important;
    line-height: 32px;
    height : 50px !important;
  }

  .quizHeader {
    font-size : 12px !important;
    padding : 3px;
  }

  .quizContentHeader {
    padding : 2px !important;
  }

  .radioCardfix {
    margin : 0 auto !important;
    width: calc(33.33333333% - 5px) !important;
  }

  .radioCard {
    margin : 0 auto !important;
    width: calc(33.33333333% - 5px) !important;
  }

  .ui.four.cards {
    width : 100% !important;
    margin : 0 auto !important;
  }


  .ui.three.cards {
    width : 100% !important;
    margin : 0 auto !important;
  }

  
  .ui.standard.modal {
    margin : 5px;
    width : 90%;
  }

  #quizModal {
    padding: 0px;
    width : 100%;
    min-width: 0px;
  }
}

#uniqueName {
  text-align: center;
  color : red;
  font-weight: bold;
}


</style>
