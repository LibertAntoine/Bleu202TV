<template>
<div id="acceuilModal">
    <sui-modal ref="modal" v-model="open" :closable=false>
      <sui-modal-header id="acceuil-header" class="bodoni-Font">
        <i id="returnIcon" class="angle double left small icon" @click="retour"></i> 
          Content de te revoir !
      </sui-modal-header>

      <sui-modal-content image id="acceuil-content">
          <sui-modal-description id="acceuil-text">
            
            <p class="center lato-Font">Salut ! Te voilà à nouveau ! <br/>
            Inscris ton nom de virus pour continuer l’aventure. 
            <p>
            <div id="acceuil-button">
                <sui-label basic ref="warning" color="red" pointing id="warning">Désolé, je ne reconnais pas ce nom</sui-label>
                <sui-input id="logInInput" placeholder="Ecris ton nom..." focus maxlength="40" @input="checkChange" @keypress="keypress" />
                <sui-button ref="logButton" primary size="huge" id="buttonLogIn" @click.native="logIn()" disabled class="cambria-Font">
                Valider
                </sui-button>
                <div id="quizBlock">
                  <p id="quizP"><a ref="buttonQuiz" id="buttonQuiz" @click="goQuiz">J'ai oublié mon nom de virus</a></p>
                </div>
            </div>
          </sui-modal-description>
          
      </sui-modal-content>
    </sui-modal>
</div>
</template>

<script>
export default {
  name: 'logPage',
  components: {
  },
  data() {
    return {
        open : false,
        textInput : null
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    retour() {
      this.toggle();
      this.$logStore.state.opener = true;
    },
    checkChange(e) {
      this.textInput = e
      if(e != "" && e.length <= 40) {
        this.$refs.logButton.disabled = false;
      } else {
        this.$refs.logButton.disabled = true;
      }
    },
    goQuiz() {
      this.open = !this.open;
      this.$parent.$refs.quizPage.toggle();
    },
    keypress(e) {
      if(e.keyCode == '13' && this.textInput && this.textInput != "") this.logIn()
    },
    async logIn() {
      const data = await this.$logStore.dispatch('logIn', this.textInput)
      if (data.status != 200) {
        this.$refs.warning.$el.style.opacity = 1
          setTimeout(() => {
            this.$refs.warning.$el.style.opacity = 0
          }, 4000);
      } else {
        this.toggle()
        this.$parent.$parent.$refs.scene.$refs.television.zap('0')
        //this.$parent.$parent.toogleOpenSong(this.$datas[5].openConnect)
      }
    }
  }
}
</script>

<style lang="scss">

#quizP {
  text-align: right;
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

#logInInput {
  width: 400px;
  margin-bottom: 20px;
}

#buttonQuiz {
  color : #2185d0;
  right: 22%;
  font-size : 16px;
  font-weight: bold;
  cursor: pointer;

}

#warning {
  position: absolute;
  bottom : 51px;
  opacity: 0;
  transition : opacity 0.5s;
}

#acceuil-text {
    font-size: 20px;
    width : 100%;
}

#acceuil-button {
    text-align: center;
}


#buttonLogIn {
    margin : 10px;
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

@media (max-width: 658px) {
  #logInInput {
    width: 100%;
    margin-bottom: 5px;
  }
  
  #buttonLogIn {
    margin-bottom : 30px;
}

  #buttonQuiz {
    right : 4%;
  }


}

</style>