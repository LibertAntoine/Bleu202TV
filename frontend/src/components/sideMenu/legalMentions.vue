<template>
<div>
    <sui-modal v-model="open">
      <sui-modal-header id="header"><span class="bold">Mentions légales</span> 
        <i id="closeX" class="x icon" @click="toggle"></i>
      </sui-modal-header>

      <sui-modal-content image id="contentMentions">
          <sui-modal-description id="mentions">
            <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
            numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site <span class="bold">leche-vitrine.tv</span> les présentes mentions légales.</p>
            
            <p>La connexion et la navigation sur le site <span class="bold">leche-vitrine.tv</span> par l’Utilisateur implique acceptation intégrale et sans réserve
            des présentes mentions légales.</p>

            <p>Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».</p>

            <h2>ARTICLE 1 : L’ÉDITEUR</h2>
            <p>L'édition du site leche-vitrine.tv est assurée par l'Association déclarée Compagnie Bleu 202,
            immatriculée au RCS de Alençon sous le numéro 393 051 859 dont le siège social est situé au 15 Rue Antoine de Saint-Exupéry, 61 000 Alençon. <br />
            Numéro de téléphone 02 33 29 67 36<br />
            Adresse e-mail : contact@bleu202.com.<br />
            N° de TVA intracommunautaire : 000<br />
            Le Directeur de la publication est <span class="bold">Pierre TROUVÉ</span></p>

            <h2>ARTICLE 1 : L’ÉDITEUR</h2>
            <p>L'hébergeur du site leche-vitrine.tv est la Société <span class="bold">OVH</span>, dont le siège social est situé au 2 rue Kellermann – 59100 Roubaix –
            France , avec le numéro de téléphone : +33 9 72 10 00 70</p>

            <h2>ARTICLE 3 : ACCÈS AU SITE</h2>
            <p>Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant
            découlant d’une nécessité de maintenance.
            En cas de modification, interruption ou suspension des services le site leche-vitrine.tv ne saurait être tenu responsable.</p>

            <h2>ARTICLE 4 : COLLECTE DES DONNÉES</h2>
            <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte
            aucune donnée concernant les utilisateurs.</p>

            <h2>ARTICLE 5 : COOKIES</h2>
            <p>L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de
            navigation.<br />
            En naviguant sur le site, il les accepte.<br />
            Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la
            navigation de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au
            sein de son logiciel de navigation.<br />
            L'utilisation des cookies se limite sur ce site au maintien de la session d'un utilisateur à l'aide d'un token d'authentification 
            afin de lui offrir une meilleur expérience dans l'utilisation du site web. Ce token permet de concervé son authentification pour une durée limité à 96h.</p>

            <h2>ARTICLE 6 : PROPRIÉTÉ INTELLECTUELLE</h2>
            <p>Le site <span class="bold">leche-vitrine.tv</span> regroupe un ensemble de créations artistiques de nature diverses : videos, photos, expériences intéractives, illustations.
            L'ensemble de ces créations sont des oeuvres comme définie par le code de la propriété intellectuelle, dont la paternité est détaillé dans la partie « Qui sommes-nous ? » de ce site.
            La coordination et le respect de ces oeuvres sur ce site sont assuré par la Compagnie Bleu 202, sous la responsabilité de son editeur Pierre TROUVÉ.<br />
            Par conséquent, toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du siteleche-vitrine.tv, sans
            autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par
            le Code de la propriété intellectuelle et le Code civil.</p>
            <p></p>
          </sui-modal-description>
      </sui-modal-content>
    </sui-modal>
</div>
</template>

<script>
export default {
  name: 'legalMentions',
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

#mentions {
  width: 100%;
  overflow: auto;
  padding: 5px;
  padding-right: 15px;
  font-size: 15px;
}

#contentMentions {
  max-height: calc(90vh - 60px) !important;
}

@media (max-width: 570px) { 
  #header {
      font-size : 17px !important;
      height : 40px !important;
  }

  #contentMentions  {
    max-height: calc(76vh - 60px) !important;
  }
}


@media (max-height: 570px) { 
  #header {
      font-size : 17px !important;
      height : 40px !important;
  }

  #contentMentions  {
    max-height: calc(76vh - 60px) !important;
  }
}


.bold {
    font-weight: bold;
}

#header {
    padding : 10px !important;
    padding-left : 20px !important;
    height : 45px;
    color : black;
    font-size: 20px;
    font-weight: normal;
}


</style>