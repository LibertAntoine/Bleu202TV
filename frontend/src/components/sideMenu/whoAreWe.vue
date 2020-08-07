<template>
<div>
    <sui-modal v-model="open">
      <sui-modal-header id="header">Qui sommes nous ?
        <i id="closeX" class="x icon" @click="toggle"></i>
      </sui-modal-header>

      <sui-modal-content image id="contentWho">
          <sui-modal-description>
            <h2>Qui se cache derrière ce projet ?</h2>
            <p> Nous sommes une compagnie de théâtre et danse professionnelle, basée sur Alençon. Créée en 1992, la compagnie accueille une nouvelle équipe depuis 2016.
            Notre activité repose sur la création de spectacles professionnels, de formation en théâtre et danse. Chaque année depuis 2010, nous organisons au mois de juillet, un stage de création semi-professionnelle appelé le « Lèche-Vitrines » qui aboutit sur un spectacle de plein air.</p>
            
            <p>On vous présente ici l’équipe du Lèche-Vitrines de cette année !
            <div id="equipeAll">
            
 
            <div class="section1">
            
            
            <h3>Océane Banville</h3>
            <img id="equipe0" class="equipePhoto" src="@/assets/modal/Equipe0.png">
            <p>Elle a fait la création lumières pour l’émission géopolitique « On n’est pas crevés » à l’Auditorium d’Alençon. C’est elle également qui a travaillé, avec Rémi, sur la chanson de la Famine ; on la voit l’interpréter à la fin de l’émission.</p>
            
            
            

            <h3>Flora Mallet</h3>
            <img id="equipe2" class="equipePhoto" src="@/assets/modal/Equipe2.png">
            <p>Elle a travaillé au design du site internet qu’elle a également co-conçu avec Antoine. Elle a rejoint l’équipe en milieu d’aventure pour venir en renfort et apporter sa créativité.</p>


            <span id="espaceFlo"> <br /><br /><br /><br /><br /></span>
            

            <h3>Daphné Palamaras</h3>
            <img id="equipe4" class="equipePhoto" src="@/assets/modal/Equipe4.png">
            <p>Elle a co-écrit le scénario et imaginé la conception de cette œuvre virtuelle. Elle joue différents rôles dans le projet et vous pouvez la voir dans les différents contenus. Elle a travaillé sur les mises en scène et aussi imaginé les costumes, notamment ceux du défilé, et les scénographies.</p>
            
             <h3>Amandine Plessis</h3>
            <img id="equipe6" class="equipePhoto" src="@/assets/modal/Equipe6.png">
            <p>Elle fait partie des scénaristes qui ont imaginé et écrit cette création numérique. Elle joue dans plusieurs scènes et a participé à la mise en scène. Amandine a également confectionné les costumes avec Daphné. C’est elle qui est entrée le plus souvent dans la peau de l’ours !</p>


            
            </div>


            <div class="section2">

              <h3>Antoine Libert</h3>
            <img id="equipe1" class="equipePhoto" src="@/assets/modal/Equipe1.png">
            <p>C’est lui qui était derrière la caméra pour tous les tournages. Il a supervisé et participé aux montages vidéo. Le site a été imaginé et conçu, avec Flora, par Antoine. On le voit aussi apparaître à l’image dans le roman-photo…</p>
            
            <h3>Rémi Mangot</h3>
            <img id="equipe3" class="equipePhoto" src="@/assets/modal/Equipe3.png">
            <p>Rémi fait partie des scénaristes de ce spectacle virtuel. Il a composé toutes les musiques et les ambiances sonores du projet. Il a fait la prise de son sur les tournages et il a travaillé aux montages son. Lors du défilé, c’est lui également qui a réalisé la création lumières. On le voit à l’écran dans plusieurs rôles. Il a participé aux différentes scénographies et construction accessoires.</p>



            <h3>Pascale Paris</h3>
            <img id="equipe5" class="equipePhoto" src="@/assets/modal/Equipe5.png">
            <p>Pascale a imaginé et conçu toutes les chorégraphies du projet ; le défilé, la chanson de l’émission, le solo du zapping, le coaching fitness et les interventions en rue. On la voit aussi à l’écran dans différents rôles aussi bien théâtre que danse.</p>



           

            <h3>Pierre Trouvé</h3>
            <img id="equipe7" class="equipePhoto" src="@/assets/modal/Equipe7.png">
            <p>Pierre a écrit et pensé le projet avec Rémi, Daphné et Amandine. Il a travaillé sur différentes mises en scène, joué plusieurs rôles dans le scénario et participé aux montages vidéo et photo. Il a également assisté Antoine sur les tournages en tenant la caméra.</p>
            <br />

            </div>
            </div>

            <p>Elles et ils ont joué et dansé face à la caméra avec nous : Françoise, Elisabeth, Jean-Louis, Jean-Lou, Sacha, Médéric, Nicolas, Maud, Léa C, Emilie, Léa M, Sylvaine, Léna, Sarah, Robin, Servane, Océane, Véronique, Marie-Pierre, Eliott, Kylian, Maëlle.
            
            <br />
            <br />
            
            <img id="equipe8" class="equipePhotoGroupe" src="@/assets/modal/Group.png">


            <h3>Remerciements</h3>
            <p>Tout ce projet existe grâce à la Ville d’Alençon qui nous soutient depuis 11 ans et à ses services qui nous ont aidé.
            Merci également aux boutiques du centre-ville qui ont participé à nos bêtises : YUME, Optique Moderne, Terra Nature, La Fabrique, Pinocchio et cie, Librairie Le Passage, Tendance-Ouest.
            Un très grand merci à Fernand Legeard d’avoir patoisé les messages de prévention !</p>
            
            <p>Un immense merci à toutes celles et tous ceux qui ont participé et donné d’elles-mêmes et d’eux-mêmes !</p>
            <br />

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

#equipeAll {
  display: flex;
}


.section1 {
  padding : 15px;
  padding-left : 0px;
  width : 50%;
}

.section2 {
  padding : 15px;
  padding-right : 0px;
  width : 50%;
}


.equipePhoto {
  float : left;
  width : 40%;
  margin-right : 20px;
}


.equipePhotoGroupe {
  width : 100%;
}


#contentWho  {
  width: 100%;
  font-size: 15px;
  overflow : auto;
  max-height: calc(90vh - 60px) !important;
}


#contentWho h3 {
  clear : both;
  margin-top : 10px;
  padding-top : 10px;
}


@media (max-width: 570px) { 
  #contentWho  {
    max-height: calc(76vh - 60px) !important;
  }



#equipeAll {
  display: block;
}

.section1 {
padding : 0px;
  width : 100%;
}

.section2 {
  padding : 0px;
  width : 100%;
}

#espaceFlo {
  display : none;
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
  font-size : 20px;
}


#contentWho h2 {
  font-family: Cambria, sans-serif !important;
  font-size : 28px;
}

#contentWho h3 {
  font-family: Cambria, sans-serif !important;
  font-size : 25px;
}




</style>