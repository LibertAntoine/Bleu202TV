<template>
<div id="acceuilModal">
    <sui-modal ref="modal" v-model="$logStore.state.opener" :closable=false>
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
                <sui-button color="teal" size="huge" id="button_right"  @click.native="gologPage">
                Je suis déjà venu
                </sui-button>

            </div>
          </sui-modal-description>
          
      </sui-modal-content>
    </sui-modal>
    <logPage ref="logPage" />
    <quizPage ref="quizPage" />
    
</div>
</template>

<script>
import logPage from '@/components/opener/logPage'
import quizPage from '@/components/opener/quizPage'

export default {
  name: 'opener',
  components: {
      logPage,
      quizPage
  },
  async created() {
    await this.$logStore.dispatch('logCookie');
    if(this.$logStore.state.connected) {
      this.$parent.$refs.scene.$refs.television.zap('0')
    } else {
      this.$parent.$refs.scene.$refs.television.zap('-1')
    }
  },
  methods: {
    goQuiz() {
      this.$logStore.state.opener = false;
      this.$refs.quizPage.toggle();
      this.$parent.toogleOpenSong(this.$datas[5].openQ1)
    },
    gologPage() {
       this.$logStore.state.opener = false;
       this.$refs.logPage.toggle();
       this.$parent.toogleOpenSong(this.$datas[5].login)
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

.ui.dimmer {
  flex-direction: raw !important;
}

#acceuil-header {
    text-align: center;
    padding : 10px !important;
    padding-left : 20px !important;
    background-color: #23a1d3;
    height : 65px;
    color : white;
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