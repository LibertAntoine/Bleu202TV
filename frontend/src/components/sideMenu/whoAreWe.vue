<template>
<div>
    <sui-modal v-model="open">
      <sui-modal-header id="header">Qui sommes nous ?
        <i id="closeX" class="x icon" @click="toggle"></i>
      </sui-modal-header>

      <sui-modal-content image id="contentWho">
          <sui-modal-description>
            <h2>Qui se cache derière ce projet ?</h2>


            <p>Nous sommes une compagnie de théâtre et danse professionnelle, basée sur Alençon. Créée en 1992, la compagnie accueille une nouvelle équipe depuis 2016.
            Notre activité repose sur la création de spectacles professionnelles, de formation en théâtre et danse. Chaque année depuis 2010, nous organisons au mois de juillet, un stage de création semi-professionnelle appelé le « Lèche-Vitrines » qui aboutit sur un spectacle de plein air.</p>


            <p>On vous présente ici l’équipe du Lèche-Vitrines de cette année !</p>


            <h2>Écriture :</h2>
            <p>À l’écriture du scénario, nous avions : Daphné Palamaras, Pierre Trouvé, Rémi Mangot, Amandine Plessis</p>

            <h2>Technique :</h2>
            <p>À la caméra, à la prise de son, aux régies lumières et au montage vidéo et son, nous avions : Antoine Libert, Flora Mallet, Rémi Mangot, Océane Banville, Pierre Trouvé</p>

            <h2>Confection du site :</h2>
            <p>À la confection du site, ont œuvré Flora Mallet et Antoine Libert</p>

            <h2>Danse :</h2>
            <p>À la création des chorégraphies, Pascale Paris</p>

            <h2>Jeu :</h2>
            <p>Face à la caméra, nous avions : Daphné Palamaras, Amandine Plessis, Rémi Mangot, Pierre Trouvé, Pascale Paris
            Accompagnés de Françoise, Elisabeth, Jean-Louis, Jean-Lou, Sacha, Médéric, Nicolas, Maud, Léa, Emilie, Léa, Sylvaine, Léna, Sarah, Robin, Servane, Océane, Véronique, Marie-Pierre, Eliott, Kylian, Maëlle.</p>


            <h2>Remerciements :</h2>
            <p>Tout ce projet existe grâce à la Ville d’Alençon qui nous soutient depuis 11 ans et à ses services qui nous ont aidé.
            Merci également aux boutiques du centre-ville qui ont participé à nos bêtises : YUME, Optique Moderne, Terra Nature, La Fabrique, Pinocchio et cie, Librairie Le Passage, Tendance-Ouest</p>

            <p>Un immense merci à toutes celles et tous ceux qui ont participé et donné d’elles-mêmes et d’eux-mêmes !</p>

          </sui-modal-description>
      </sui-modal-content>
    </sui-modal>
</div>
</template>

<script>
export default {
  name: 'whoAreWe',
  components: {
  },
  data() {
    return {
        open : false
    }
  },
  mounted() {
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
}
</script>

<style lang="scss">

#contentWho  {
  width: 100%;
  font-size: 15px;
  overflow : auto;
  max-height: calc(90vh - 60px) !important;
}


@media (max-width: 570px) { 
  #contentWho  {
    max-height: calc(76vh - 60px) !important;
  }
}


@media (max-height: 570px) { 
  #contentWho  {
    max-height: calc(76vh - 60px) !important;
  }
}


#contentWho .description {
  width: 100% !important;
  text-justify: auto;
}

#contentWho p {
  font-family: Lato, sans-serif !important;
  text-align: justify;
}


#contentWho h2 {
  font-family: Cambria, sans-serif !important;
}

#contentWho h3 {
  font-family: Cambria, sans-serif !important;
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