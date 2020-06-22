<template>
  <div id="sideMenu" @click="(e) => e.stopPropagation()">
    <div id="openMenu" v-on:click="this.toggle"> 
        <i class="angle double left icon large"></i> 
        Menu
    </div>  
    <div class="ui bottom ">
      <div id="menu" class="ui sidebar visible inverted right vertical menu">
       <a class="item" v-on:click="this.toggle">
          <i class="angle double right icon"></i>
          <span v-if='$parent.connected && $parent.pseudo != ""'> Bonjour {{$parent.pseudo}} </span>
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
        <a class="item">
          <i class="file alternate icon"></i>
          Mentions légales
        </a>
        <a class="item" v-if='$parent.connected' @click="this.$parent.logOut">
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
    <quiSommesNous ref="quiSommesNous" />
  </div>
</template>

<script>
import quiSommesNous from '@/components/quiSommesNous'
import $ from "jquery";

export default {
  name: 'sideMenu',
  components: {
      quiSommesNous
  },
  data() {
    return {
      connected : false,
      open: false
    }
  },
  mounted: function() {
      $('.ui.sidebar').hide()
  },
  methods: {
    toggle() {
        $('.ui.sidebar').fadeToggle()
        this.open = !this.open;
    },
    toggleQuiSommes() {
        this.$refs.quiSommesNous.toggle();
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
    font-size: 15px;
    font-weight : bold;
    cursor : pointer;
}

.sidebar {
  background-color: #23a1d3 !important;
}

@media (max-height: 400px) {
  #logos {
      opacity:0%;
  }
}
</style>
