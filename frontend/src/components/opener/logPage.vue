<template>
<div id="acceuilModal">
    <sui-modal ref="modal" v-model="open" :closable=false>
      <sui-modal-header id="acceuil-header">
        <i id="returnIcon" class="angle double left small icon" @click="retour"></i> 
          Content de te revoir !
      </sui-modal-header>

      <sui-modal-content image id="acceuil-content">
          <sui-modal-description id="acceuil-text">
            
            <p>Ahh !!! Tu as mis du temps à revenir. Mais... Rapelle-moi, c'est quoi ton petit nom déjà ?<p>
            <div id="acceuil-button">
                <sui-label basic ref="warning" color="red" pointing id="warning">Désolé, je ne reconnais pas ce nom</sui-label>
                <a ref="buttonQuiz" id="buttonQuiz" @click="goQuiz">J'ai oublié mon nom de virus</a>
                <sui-input id="logInInput" placeholder="Ecris ton nom..." focus maxlength="40" @input="checkChange"/>
                <sui-button ref="logButton" color="teal" size="huge" id="buttonLogIn" @click.native="logIn()" disabled>
                Valider
                </sui-button>
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
        this.$parent.$parent.toogleOpenSong(this.$datas[5].openConnect)
      }
    }
  }
}
</script>

<style lang="scss">

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
  position: absolute;
  color : green;
  bottom : 20px;
  right : 22%;
  font-size : 16px;
  font-weight: bold;
  cursor: pointer;
}

#warning {
  position: absolute;
  bottom : 20px;
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

#closeX {
  position: absolute;
  right : 15px;
  opacity: 40%;
  transition: opacity 0.3s;
}

#closeX:hover {
  opacity: 100%;
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
    bottom : 20px;
    right : 4%;
  }


}

</style>