<template>
<div id="acceuilModal">
    <sui-modal ref="modal" v-model="open">
      <sui-modal-header id="acceuil-header">
          Bienvenue sur Bleu 202 TV !
      </sui-modal-header>

      <sui-modal-content image id="acceuil-content">
          <sui-modal-description id="acceuil-text">
            
            <p>Bienvenue à toi étranger, pour une nouvelle aventure Lèche-Vitrine un peu spécial cette année. La ville d'Alençon à vecut le confinement, et cela a chanboulé beaucoup de chose, c'est le cas de la dire.<p>
            <div id="acceuil-button">
                <sui-button color="teal" size="huge" id="button_left"  @click.native="goQuiz">
                Je suis un petit nouveau
                </sui-button>
                <sui-button color="teal" size="huge" id="button_right"  @click.native="goLogIn">
                Je suis déjà venu
                </sui-button>

            </div>
          </sui-modal-description>
          
      </sui-modal-content>
    </sui-modal>
    <logIn ref="logIn" />
    <quizQuestion ref="quizQuestion" />
    
</div>
</template>

<script>
import logIn from '@/components/logIn'
import quizQuestion from '@/components/quizQuestion'
import userApi from '@/services/api/user'
import cookie from '@/services/cookies'

export default {
  name: 'acceuil',
  components: {
      logIn,
      quizQuestion
  },
  data() {
    return {
        open : false
    }
  },
  mounted() {
    this.$refs.modal.closable = false;
    this.testConnexion()
  },
  methods: {
    goQuiz() {
      this.open = !this.open;
      this.$refs.quizQuestion.toggle();
    },
    goLogIn() {
       this.open = !this.open;
       this.$refs.logIn.toggle();
    },
    async testConnexion() {
      if(cookie.getCookie("token")) {
        const data = await userApi.auth(cookie.getCookie("token"))
        if(data.status != 200) {
          cookie.deleteCookie("token")
          this.open = true
        } else {
          this.$parent.connection(data.data.user.pseudo);
        }
      } else {
        this.open = true
      }
    }
  }
}
</script>

<style lang="scss">


#acceuil-text {
    font-size: 20px;
    width : 100%;
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