<template>
  <div id="sideMenu" @click="(e) => e.stopPropagation()">
    <div id="openMenu" v-if="open == false" v-on:click="this.toggle"> 
        <i class="angle double left icon large"></i> 
        Menu
    </div>  
    <div class="ui bottom" id="menu" ref="menu">
      <div id="menu" class="ui sidebar visible inverted right vertical menu">
       <a class="item" v-on:click="this.toggle">
          <i class="angle double right icon"></i>
          <span v-if='$logStore.state.connected && $logStore.state.pseudo != ""'> Bonjour {{$logStore.state.pseudo}} </span>
          <span v-else>Bleu202 TV</span>
        </a>
        <a class="item">
          <i class="star icon"></i>
          Découvrir lèche-vitrine
        </a>
        <a class="item" @click="toggleQuiSommes">
          <i class="users icon"></i>
          Qui sommes nous ?
        </a>
        <a class="item" href="http://www.bleu202.com/" onclick="window.open(this.href); return false;">
          <i class="smile icon"></i>
          La Compagnie Bleu 202
        </a>
        <a class="item" @click="toggleMentions">
          <i class="file alternate icon"></i>
          Mentions légales
        </a>
        <a class="item" v-if='$logStore.state.connected' @click="logOut()">
          <i class="external alternate icon"></i>
          Deconnexion
        </a>
        <div id="logos">    
            <a href="http://www.bleu202.com/" onclick="window.open(this.href); return false;">
                <img id="logoCompagnie" alt="Logo de la compagnie bleu 202" src="@/assets/CompagnieBleu202.png">
            </a>
            <a href="https://www.facebook.com/CompagnieBleu202/" onclick="window.open(this.href); return false;">
                <i id="facebookIcon" class="facebook icon huge"></i>
            </a>
            <a href="http://www.alencon.fr/" onclick="window.open(this.href); return false;">
                <img id="logoAlencon" alt="Logo de la ville d'Alençon" src="@/assets/Logo_ville.png">
            </a>
        </div>
      </div>
    </div>
    <whoAreWe ref="whoAreWe" />
    <legalMentions ref="legalMentions" />
  </div>
</template>

<script>
import whoAreWe from '@/components/sideMenu/whoAreWe'
import legalMentions from '@/components/sideMenu/legalMentions'
import $ from "jquery";

export default {
  name: 'sidebar',
  components: {
      whoAreWe,
      legalMentions
  },
  data() {
    return {
      connected : false,
      open: false
    }
  },
  mounted: function() {
      $('#menu').hide()
      window.addEventListener('click', () => {       
      if(this.open == true) {
        this.toggle()
      } })
  },
  methods: {
    toggle() {
        $('#menu').fadeToggle()
        this.open = !this.open;
    },
    toggleQuiSommes() {
        this.$refs.whoAreWe.toggle();
    },
    toggleMentions() {
        this.$refs.legalMentions.toggle();
    },
    logOut() {
      this.$logStore.commit('logOut')
      this.toggle()
      this.$parent.$refs.scene.$refs.television.zap("-1")
    }

  }
}
</script>

<style lang="scss">

#sideMenu {
  position: fixed;
  z-index: 1001;
}

#logoCompagnie {
    position: absolute;
    bottom: 120px;
    left: 25px;
    height : 100px;
}

#facebookIcon {
    color: white;
    position: absolute;
    bottom: 140px;
    right: 35px;
}


#logoAlencon {
    position: absolute;
    bottom: 20px;
    left: 10px;
    height : 75px;
}

#openMenu {
    color: #23a1d3;
    position: fixed;
    right: 0%;
    top: 0%;
    padding: 10px;
    padding-left: 30px;
    padding-bottom: 30px;
    font-size: 15px;
    font-weight : bold;
    cursor : pointer;
    background: radial-gradient(at 80% 00%, rgba(black, 0.3) 10%, rgba(black, 0.0) 65%);
}

#menu {
  background-color: #23a1d3 !important;
  opacity : 0.96
}

@media (max-height: 400px) {
  #logos {
      opacity:0%;
  }
}
</style>
