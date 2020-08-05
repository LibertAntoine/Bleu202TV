<template>
<div>
    <sui-modal v-model="open">
      <sui-modal-header id="header">Découvrir Lèche-vitrines
        <i id="closeX" class="x icon" @click="toggle"></i>
      </sui-modal-header>

      <sui-modal-content image id="contentLecheVitrine">
          <sui-modal-description>
            <div id="textLecheVitrine">
              <h2>Lèche-Vitrines, c’est quoi ?</h2>

              <p>Un spectacle en déambulation qui fait suite à un stage Théâtre et Danse second degré.
              Tous les ans, depuis 11 ans déjà, un spectacle différent est proposé aux Alençonnais et aux gens de passage sur Alençon fin juillet.
              De plus en plus de monde assistent aux représentations, avec ces dernières années entre 250 et 300 spectateurs chaque soir.</p>

              <div class="imageBloc"><img id="leche1" src="@/assets/modal/leche1.png"></div>

              <h3>Le concept :</h3>
              <div>
                
              <p>Créer un spectacle en 3 semaines qui se jouera en déambulation dans les rues d’Alençon pendant 5 jours, tous les soirs. Le spectacle est créé par quatre comédien.ne.s – metteur.e.s en scène et une chorégraphe – professionnel.le.s de la Compagnie Bleu 202.
              Plus environ 15 stagiaires en théâtre et 15 stagiaires en danse.</p>
<img id="leche3" src="@/assets/modal/leche3.png">
              <p>Les répétitions ont lieu au mois de juillet, tous les jours du lundi au vendredi de 10h
              à 18h. Le matin est consacré au training danse et théâtre. L’après-midi est consacré à la confection du spectacle.</p>

              <p>Le spectacle se joue la dernière semaine de juillet, du lundi au vendredi, à 18h30, dans les rues d’Alençon.</p>

              <p>Le stage et le spectacle sont offerts aux stagiaires et au public par la Ville d’Alençon.</p>

              <p>Cette année, Lèche-Vitrines a dû exceptionnellement se réinventer vis-à-vis de la situation sanitaire actuelle. Le spectacle a été totalement pensé et écrit différemment pour internet.</p>
              
              </div>

              <h3>Pourquoi « Lèche-Vitrines » ?</h3>
              <img id="leche2" src="@/assets/modal/leche2.png">
              <p>Initialement, le spectacle se jouait dans certaines vitrines du centre-ville d’Alençon. En 2010, la première édition portait sur la fièvre acheteuse, d’où le nom…
              Par la suite, le spectacle étant identifié ainsi, nous avons conservé ce titre tout en changeant le thème : les contes, le polar, voyage dans le temps, l’amour…</p>


              <p><span class="bold">2010</span> : Lèche-Vitrines <br />
              <span class="bold">2011</span> : Lèche-Vitrines… la rechute !<br />
              <span class="bold">2012</span> : Lèche-Vitrines : Visites insolites<br />
              <span class="bold">2013</span> : Lèche-Vitrines : Nouvelles visites insolites<br />
              <span class="bold">2014</span> : Lèche-Vitrines : Voyage dans le Temps<br />
              <span class="bold">2015</span> : Si Lèche-Vitrines m’était conté…<br />
              <span class="bold">2016</span> : Lèche-Vitrines : le film !<br />
              <span class="bold">2017</span> : Mais qui a léché la Vitrine ?<br />
              <span class="bold">2018</span> : Lèche-Vitraux<br />
              <span class="bold">2019</span> : Lèche-Vitr’in Love<br />
              <span class="bold">2020</span> : Ne Lèchez Plus Les Vitrines</p>
              
<br /><br />
            </div>
            

          </sui-modal-description>
      </sui-modal-content>
    </sui-modal>
</div>
</template>

<script>
export default {
  name: 'lecheVitrine',
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

.imageBloc {
  width : 100%;
   text-align: center
}

#leche1 {
  align-content: center;
  margin : 0 auto;
  width : 60%;
}

#leche2 {
  float : right;
  margin-left : 20px;
  width : 40%;
}

#leche3 {
  float : left;
  margin-right : 20px;
  width : 50%;
}


#header {
    padding : 6px !important;
    padding-left : 20px !important;
    height : 45px;
    color : white !important;
    font-family: Bodoni MT, serif !important;
    font-size: 22px !important;
    background-color: #23a1d3;
}

#contentLecheVitrine  {
  width: 100%;
  font-size: 15px;
  overflow : auto;
  max-height: calc(80vh - 60px) !important;
}


@media (max-width: 570px) { 
  #contentLecheVitrine  {
    max-height: calc(76vh - 60px) !important;
  }

  #leche1 {
    width : 100%;
  }

#leche2 {

  width : 100%;
}

#leche3 {

  width : 100%;
}



}


@media (max-height: 570px) { 
  #contentLecheVitrine  {
    max-height: calc(76vh - 60px) !important;
  }
}


#contentLecheVitrine .description {
  width: 100% !important;
  text-justify: auto;
  padding-bottom : 40px;
}

#contentLecheVitrine p {
  font-family: Lato, sans-serif !important;
  text-align: justify;
  font-size : 20px;
}


#contentLecheVitrine h2 {
  font-family: Cambria, sans-serif !important;
  font-size : 28px;
}

#contentLecheVitrine h3 {
  font-family: Cambria, sans-serif !important;
  font-size : 25px;
}



</style>