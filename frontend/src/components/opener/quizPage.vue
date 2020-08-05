<template>
<div id="acceuilModal">
    <sui-modal ref="modal" id="quizModal" v-model="open" :closable=false>
      <sui-modal-header id="acceuil-header" class="bodoni-Font">
          <i ref='returnIcon' id="returnIcon" class="angle double left small icon" @click="retour"></i> 
          Quel.le déconfiné.e es-tu ? 
          <span v-if="currentQuestionTag" class="currentQuestion">{{question}}/5</span>
      </sui-modal-header>

      <sui-modal-content image id="quiz-content">
        <div id="blockQuestion">
          <div ref="question1" id="question1" class="question">
          <sui-modal-description>
            <p class="center lato-Font">Avant de commencer, j’aimerais bien en savoir un peu plus… Promis, tu comprendras après ! <p>
            <p class="center lato-Font">Si tu étais un gâteau, tu serais…<p>
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
            <p class="center lato-Font">Si tu étais une boisson, laquelle serais-tu ?<p>
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
            <p class="center lato-Font">Dans le monde d'avant, c’était quoi ton signe astrologique ?<p>
            <div id="acceuil-button" class="astro-button">
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

          <div ref="question4" class="question">
          <sui-modal-description id="question4" >
            <p class="center lato-Font">Dans le monde d’après, comment aimerais-tu qu’on t’appelle ? <p>
            <div id="acceuil-button" class="center-button">
              <sui-input  class="lato-Font" @input="checkChange" @keypress="keypress" placeholder="Coro-Survivor..." focus maxlength="18" />
              <sui-button class="cambria-Font" @click="answer(textInput)" primary ref="validator3" size="huge" id="button_right" :disabled="this.textDisabled">
                Valider
                </sui-button>
            </div>
          </sui-modal-description>
          </div>


          <div ref="question5" class="question" >
          <sui-modal-description id="question5">
            <p class="center lato-Font">Allez, plus qu’une question ! <br/>
              Quel est ton personnage de Lèche-Vitrines préféré ?<p>
            <div id="acceuil-button">
              <sui-card-group :items-per-row="2">
                <sui-card class="radioCardfix " @click="valid('1')">
                  <sui-image :src="perso1" class="persoQuiz"/>
                  <sui-card-content class="quizContentHeader">
                    <sui-card-header class="quizHeader">Féodora</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCardfix persoQuiz" @click="valid('2')"> 
                  <sui-image :src="perso2" class="persoQuiz"/>
                  <sui-card-content class="quizContentHeader">
                    <sui-card-header class="quizHeader">Mon Bon Gaultier</sui-card-header>
                  </sui-card-content>
                </sui-card>
                </sui-card-group>
            </div>
          </sui-modal-description>
          </div>

          

          <div ref="bilan" class="question">
          <sui-modal-description id="bilan" >
            <p class="center lato-Font">Merci <span class="bold">{{reponses[3]}}</span> ! <br /> Après avoir consulté tes réponses à nos questions, il semblerait que ton nom de virus soit :<p>
            <p id="uniqueName">{{$logStore.state.uniqueName}}<p>
            <p class="center lato-Font">Garde le bien en tête, ce sera ton mot de passe pour les prochains jours, si tu veux revenir.<p>
            <div id="acceuil-button">
              <sui-button primary class="cambria-Font" @click='finishClose' size="large" id="button_end">
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
        textDisabled: true,
        currentQuestionTag : true,
        gateau1 : require('@/assets/quiz/Gateau/Gateau1.jpg'),
        gateau2 : require('@/assets/quiz/Gateau/Gateau2.jpg'),
        gateau3 : require('@/assets/quiz/Gateau/Gateau3.jpg'),
        boisson1 : require('@/assets/quiz/Boisson/Boisson1.jpg'),
        boisson2 : require('@/assets/quiz/Boisson/Boisson2.png'),
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
        perso1 : require('@/assets/quiz/Perso/perso1.jpg'),
        perso2 : require('@/assets/quiz/Perso/perso2.jpg')
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    finishClose() {
      this.currentQuestionTag = true;
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
      this.textDisabled = true;
      this.textInput = "";
      this.onChange = true;
      this.$refs['question' + this.question].style.opacity = 0;
      
      this.reponses.push(response);
      setTimeout(() => {
        this.$refs['question' + this.question].style.display = "none" 
        if(this.question == 1) {
          if(response == 1 || response == 3) this.$parent.$parent.toogleOpenSong(this.$datas[5].openQ1a)
          if(response == 2) this.$parent.$parent.toogleOpenSong(this.$datas[5].openQ1b)
          setTimeout(() => {
            if (this.question == 2) this.$parent.$parent.toogleOpenSong(this.$datas[5].openQ2)
          }, 2000);
        } else if (this.question == 2) {
          if(response == 1) this.$parent.$parent.toogleOpenSong(this.$datas[5].openQ2a)
          if(response == 2) this.$parent.$parent.toogleOpenSong(this.$datas[5].openQ2b)
          if(response == 3) this.$parent.$parent.toogleOpenSong(this.$datas[5].openQ2c)
          setTimeout(() => {
            if (this.question == 3) this.$parent.$parent.toogleOpenSong(this.$datas[5].openQ3)
          }, 2000);
        } else if (this.question == 3) {
            this.$parent.$parent.toogleOpenSong(this.$datas[5].openQ4)
        } else if (this.question == 4) {
            this.$parent.$parent.toogleOpenSong(this.$datas[5].openQ5)
        }
        this.question++
        this.$refs['question' + this.question].style.display = "block" 
        }, 500);
              setTimeout(() => {
          this.$refs['question' + this.question].style.opacity = 1;
          this.onChange = false;
        }, 550);

      }
    }, 
    keypress(e) {
      if(e.keyCode == '13' && this.textInput != "") this.answer(this.textInput)
    },
    checkChange(e) {
      this.textInput = e
      if(e != "") {
        this.$refs.validator3.disabled = false;
      } else {
        this.$refs.validator3.disabled = true;
      }
    },
    async valid(response) {
      if(!this.onChange) {
      this.onChange = true;

      if(response == 1) this.$parent.$parent.toogleOpenSong(this.$datas[5].openQ5a)
      if(response == 2) this.$parent.$parent.toogleOpenSong(this.$datas[5].openQ5b)
      setTimeout(() => {
        this.$parent.$parent.toogleOpenSong(this.$datas[5].endQuiz)
      }, 3000);

      this.$refs['question' + this.question].style.opacity = 0;
      this.$refs.returnIcon.style.display = "none" 
      this.reponses.push(response);
      setTimeout(() => {
        this.$refs['question' + this.question].style.display = "none" 
      }, 500);
      await this.$logStore.dispatch('signUp', this.reponses)
      if(this.$logStore.state.connected) {
        this.currentQuestionTag = false;
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

@font-face {
  font-family: 'coffee+teademo-Regular';
  src: url("../../font/coffee+teademo-Regular.ttf") format('ttf');
}


.currentQuestion {
  float: right;
  font-size : 22px;
  padding-right : 8px;
}

.astroTitle {
  padding : 6px !important;
  height: 40px;
}

#button_end {
  float : right;
  padding : 11px 20px 11px 20px; 
  font-size : 19px;
}

.radioCard {
  opacity : 0.7 ;
  transition: opacity 0.5s !important;
  height: 100% !important;
  margin-bottom : 0px !important;
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

.center-button {
  margin : 0 auto;
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


.ui.standard.modal {
  max-height: 95%;
  margin : auto;
  transition: height 2s;
  
}


.quizHeader {
    padding-top : 2px;
    font-size : 21px !important;
}

.quizContentHeader {

  min-height: 0px !important;
  height: 100%;
}

.ui.four.cards {
  padding-bottom : 8px !important;
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
  max-height: calc(90vh - 60px) !important;
  overflow : auto;
}

.ui.modal {
  position : relative !important;
}

  .ui.two.cards {
    position : relative !important;
    width : 100% !important;
    margin : 0 auto !important;
  }

#blockQuestion {
  width: 100%;
}

@media (max-width: 570px) {

  #acceuil-content {
    max-height: calc(76vh - 60px) !important;

  }


  #quiz-content {
    max-height: calc(76vh - 60px) !important;
  }

  .astroTitle {
    height: 25px !important;
  }

  #acceuil-header {
    font-size : 17px !important;
    line-height: 32px;
    height : 50px !important;
  }

  .quizHeader {
    font-size : 10px !important;
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


  /*
  .ui.standard.modal {
    margin : 5px;
    width : 90%;
    max-height: 500px !important;
  }*/

  #quizModal {
    padding: 0px;
    width : 100%;
    min-width: 0px;

  }
}

@media (max-height: 570px) {

  #acceuil-content {
    max-height: calc(76vh - 60px) !important;
  }


  #quiz-content {
    max-height: calc(76vh - 60px) !important;
  }

  .astroTitle {
    height: 25px !important;
  }

  #acceuil-header {
    font-size : 17px !important;
    line-height: 32px;
    height : 50px !important;
  }

  .quizHeader {
    font-size : 10px !important;
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

  /*
  .ui.standard.modal {
    margin : 5px;
    width : 90%;
    max-height: 250px !important;
  }*/


  #acceuil-text {
        font-size : 15px !important;
  }


}




#uniqueName {
  font-family: coffee+teademo-Regular !important;
  font-size : 26px !important;
  text-align: center;
  color : red;
  font-weight: bold;
}

</style>
