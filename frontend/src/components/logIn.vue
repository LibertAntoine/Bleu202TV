<template>
<div id="acceuilModal">
    <sui-modal ref="modal" v-model="open">
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
                <sui-button ref="logButton" color="teal" size="huge" id="buttonLogIn" @click.native="logIn" disabled>
                Valider
                </sui-button>
            </div>
          </sui-modal-description>
          
      </sui-modal-content>
    </sui-modal>
</div>
</template>

<script>
import userApi from '@/services/api/user'
import cookie from '@/services/cookies'

export default {
  name: 'logIn',
  components: {
  },
  data() {
    return {
        open : false,
        textInput : null
    }
  },
  mounted() {
      this.$refs.modal.closable = false;
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    retour() {
      this.open = !this.open;
      this.$parent.open = true;
    },
    checkChange(e) {
      this.textInput = e
      if(e != "" && e.length <= 40) {
        this.$refs.logButton.disabled = false;
      } else {
        this.$refs.logButton.disabled = true;
      }
    },
    async logIn() {
       const data = await userApi.login(this.textInput);
       if(data.status != 200) {
         this.$refs.warning.$el.style.opacity = 1
         setTimeout(() => {
             this.$refs.warning.$el.style.opacity = 0
          }, 4000);
       } else {
         cookie.setCookie("token", data.data.token, 15)
         this.$parent.$parent.connection(data.data.user.pseudo)
         this.open = !this.open;
       }
    },
    goQuiz() {
      this.open = !this.open;
      this.$parent.$refs.quizQuestion.toggle();
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

</style>