<template>
<div id="acceuilModal">
    <sui-modal ref="modal" id="quizModal" v-model="open">
      <sui-modal-header id="acceuil-header">
          <i ref='returnIcon' id="returnIcon" class="angle double left small icon" @click="retour"></i> 
          Quel déconfiné es-tu ? 
      </sui-modal-header>

      <sui-modal-content image id="acceuil-content">
        <div id="blockQuestion">
          <div ref="question1" id="question1" class="question">
          <sui-modal-description>
            <p>Hop Hop Hop !! Avant de commencer j'aimerai bien en savoir un peu plus sur toi le petit nouveau.<p>
            <p>Dis moi un peu, si tu étais un gâteau, lequel serais-tu ?<p>
            <div id="acceuil-button">
              <sui-card-group :items-per-row="3">
                <sui-card class="radioCardfix" @click="answer('1')">
                  <div>
                  <img class="ImageChoice" src="@/assets/fraisier.jpg"/>
                  </div>
                  <sui-card-content>
                    <sui-card-header>Un Fraisier</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCardfix" @click="answer('2')">
                  <div>
                  <img class="ImageChoice" src="@/assets/ApplePie.jpg"/>
                  </div>
                  <sui-card-content>
                    <sui-card-header>Une tarte aux pommes</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCardfix" @click="answer('3')">
                  <div>
                  <img class="ImageChoice" src="@/assets/fondantChocolat.jpg"/>
                  </div>
                  <sui-card-content>
                    <sui-card-header>Un fondant au chocolat</sui-card-header>
                  </sui-card-content>
                </sui-card>
                </sui-card-group>
            </div>
          </sui-modal-description>
          </div>

          <div ref="question2" class="question">
          <sui-modal-description id="question2" >
            <p>Dis moi un peu, si tu étais une boisson, laquelle serais-tu ?<p>
            <div id="acceuil-button">
              <sui-card-group :items-per-row="3">
                <sui-card class="radioCardfix" @click="answer('1')">
                  <div>
                  <img class="ImageChoice" src="@/assets/Mojito.jpg" />
                  </div>
                  <sui-card-content>
                    <sui-card-header>Un Mojito</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCardfix" @click="answer('2')"> 
                  <div>
                  <img class="ImageChoice" src="@/assets/lait_Fraise.jpg" />
                  </div>
                  <sui-card-content>
                    <sui-card-header>Un Lait fraise</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCardfix" @click="answer('3')">
                  <div>
                  <img class="ImageChoice" src="@/assets/monaco.jpg" />
                  </div>
                  <sui-card-content>
                    <sui-card-header>Un Monaco</sui-card-header>
                  </sui-card-content>
                </sui-card>
                </sui-card-group>
            </div>
          </sui-modal-description>
          </div>


          <div ref="question3" class="question">
          <sui-modal-description id="question3" >
            <p>Dis moi un peu, dans le monde d'avant, ton signe astrologique, c'était quoi ?<p>
            <div id="acceuil-button">
              <sui-card-group :items-per-row="4">
                <sui-card class="radioCard" @click="answer('1')">
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/belier.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Bélier</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('2')"> 
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/taureau.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Taureau</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('3')">
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/gemeaux.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Gémeaux</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('4')">
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/cancer.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Cancer</sui-card-header>
                  </sui-card-content>
                </sui-card>

                <sui-card class="radioCard" @click="answer('5')">
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/lion.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Lion</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('6')"> 
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/vierge.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Vierge</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('7')">
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/balance.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Balance</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('8')">
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/scorpion.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Scorpion</sui-card-header>
                  </sui-card-content>
                </sui-card>

                <sui-card class="radioCard" @click="answer('9')">
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/sagittaire.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Sagittaire</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('10')"> 
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/capricorne.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Capricorne</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('11')">
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/verseau.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Verseau</sui-card-header>
                  </sui-card-content>
                </sui-card>
                <sui-card class="radioCard" @click="answer('12')">
                  <div>
                  <img class="ImageChoiceAstro" src="@/assets/SigneAstrologique/poisson.jpg" />
                  </div>
                  <sui-card-content class="astroTitle">
                    <sui-card-header>Poisson</sui-card-header>
                  </sui-card-content>
                </sui-card>
                </sui-card-group>
            </div>
          </sui-modal-description>
          </div>

          <div ref="question4" class="question">
          <sui-modal-description id="question4" >
            <p>Dis moi un peu, si tu étais un personnage de dessin animé, qui serais tu ?<p>
            <div id="acceuil-button">
              <sui-input  @input="checkChange"  placeholder="Spiderman..." focus maxlength="20" />
              <sui-button  @click="answer(textInput)" color="teal" ref="validator4" size="huge" id="button_right" disabled>
                Valider
                </sui-button>
            </div>
          </sui-modal-description>
          </div>

          <div ref="question5" class="question">
          <sui-modal-description id="question5" >
            <p>Dis moi un peu, si tu étais une actrice ou une acteur de cinéma, qui serais tu ?<p>
            <div id="acceuil-button">
              <sui-input  @input="checkChange"  placeholder="Jhonny Depp..." focus maxlength="20" />
              <sui-button  @click="answer(textInput)" color="teal" ref="validator5" size="huge" id="button_right" disabled>
                Valider
                </sui-button>
            </div>
          </sui-modal-description>
          </div>

          <div ref="question6" class="question">
          <sui-modal-description id="question6" >
            <p>Dis moi un peu, dans le monde d'après, comment tu aimerais qu'on t'apelle ?<p>
            <div id="acceuil-button">
              <sui-input  @input="checkChange"  placeholder="Coro-Survivor..." focus maxlength="20" />
              <sui-button  @click="valid(textInput)" color="teal" ref="validator6" size="huge" id="button_right" disabled>
                Valider
                </sui-button>
            </div>
          </sui-modal-description>
          </div>

          <div ref="bilan" class="question">
          <sui-modal-description id="bilan" >
            <p>Bienvenue à toi {{reponses[5]}}, tu es maintenant prêt pour le monde d'après. Nous sommes heureux de te dicerner ton nom de virus, rien qu'à toi :<p>
            <p>{{persoName}}<p>
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
import userApi from '@/services/api/user'
import cookie from '@/services/cookies'

export default {
  name: 'quiz',
  components: {
  },
  data() {
    return {
        open : false,
        question : 1,
        reponses : [],
        textInput : "",
        onChange: false,
        persoName: ""
    }
  },
  mounted() {
      this.$refs.modal.closable = false;
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
          this.$parent.open = true;
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
      const data = await userApi.signup({
        pseudo : this.reponses[5],
        favoriteCharacter : this.reponses[3],
        favoriteActor : this.reponses[4],
        favoriteDrink : this.reponses[1],
        favoriteCake : this.reponses[0],
        astroSigne : this.reponses[2]
      })
      cookie.setCookie("token", data.data.token, 15)
      this.persoName = data.data.uniqueName
      this.$refs.bilan.style.display = "block"
      this.$parent.$parent.connection(this.reponses[5]);
      setTimeout(() => {
        this.$refs.bilan.style.opacity = 1;
        this.onChange = false;
      }, 1000);
      }
    }
  }
}
</script>

<style lang="scss">

.astroTitle {
  padding : 6px !important;
  height: 40px !important;
}


.radioCard {
  opacity : 0.7 ;
  transition: opacity 0.5s !important;
  height: 100% !important;
}

.ImageChoice {
 width: 100%;
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
  height: 620px;
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

</style>
