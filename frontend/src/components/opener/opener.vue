<template>
<div id="acceuilModal">
    <sui-modal ref="modal" v-model="$logStore.state.opener" :closable=false>
      <sui-modal-header id="acceuil-header" class="bodoni-Font">
          Bienvenue sur Bleu 202 TV !
      </sui-modal-header>

      <sui-modal-content image id="acceuil-content">
          <sui-modal-description id="acceuil-text">
            
            <p class="center lato-Font">Bienvenue à toi, curieuse ou curieux. Cette année a été très spéciale pour tout le monde, y compris pour le Lèche-Vitrines, qui s’est réinventé en une aventure évolutive que tu t’apprêtes à vivre. Le confinement et le déconfinement ont été très inspirants. Alors, tu es prêt.e ?<p>
            <div id="acceuil-button">
                <sui-button primary class="backBleuColor cambria-Font" size="huge" id="button_left"  @click.native="goQuiz">
                C’est ma première fois 
                </sui-button>
                <sui-button primary class="backBleuColor cambria-Font" size="huge" id="button_right"  @click.native="gologPage">
                Je connais la maison
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


.bodoni-Font {
  font-family: Bodoni MT, serif !important;
}

.lato-Font {
  font-family: Lato, sans-serif !important;
  color: #1D252E!important;
}

.cambria-Font {
  font-family: Cambria, sans-serif !important;
  font-weight: normal !important;
}


.center {
  text-align: center;
}


#acceuil-content {
  max-height: calc(90vh - 60px) !important;
  overflow : auto;
}

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
    font-size: 39px;
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