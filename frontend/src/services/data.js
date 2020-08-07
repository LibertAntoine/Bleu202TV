export default [
    {
        active : true,
        name : "Le Défilé de Gustavio Han",
        gif : require("@/assets/TV/Ecran/gif_channel1.gif"),
        videoId : "441972894",
        ambiance : require('@/audio/DéfileAmbiance.mp3')
    }, {
        active : true,
        name : "Roman-Photo",
        gif : require("@/assets/TV/Ecran/gif_channel2.gif"),
        videoId : "396458662",
        ambiance : require('@/audio/RomanPhotoAmbianceSalon.mp3')
    }, {
        active : true,
        name : "Le Zapping",
        gif : require("@/assets/TV/Ecran/gif_channel3.gif"),
        videoId : "442686795",
        ambiance : require('@/audio/ZappingAmbiance.mp3')
    }, {
        active : false,
        name : "Coroméo et Juliettovid",
        gif : require("@/assets/TV/Ecran/gif_channel4.gif"),
        videoId : "443101046",
        ambiance : require('@/audio/Romeo.mp3')
    }, {
        active : false,
        name : "On n'est pas crevés",
        gif : require("@/assets/TV/Ecran/gif_channel5.gif"),
        videoId : "443389610",
        ambiance : require('@/audio/EmissionAmbianceSalon.mp3')
    },
    {
        antenneGauchePNG : require("@/assets/TV/Animations/AntenneGauche.png"),
        antenneGaucheGIF : require("@/assets/TV/Animations/AntenneGauche.gif"),
        antenneDroitePNG : require("@/assets/TV/Animations/AntenneDroite.png"),
        antenneDroiteGIF : require("@/assets/TV/Animations/AntenneDroite.gif"),
        boutonRondPNG : require("@/assets/TV/Animations/BoutonRond.png"),
        boutonRondGIF : require("@/assets/TV/Animations/BoutonRond.gif"),
        
        
        openNoConnect : require("@/audio/Compote/1er Encart.mp3"),
        openConnect : require("@/audio/Compote/Voix Site reconnaissance Cookies.mp3"),
        login : require("@/audio/Compote/2eme Encart Je connais la maison.mp3"),
        openQ1 : require("@/audio/Compote/2eme Encart C_est ma premiere fois.mp3"),
        openQ1a : require("@/audio/Compote/2eme Encart Réponse 1.mp3"),
        openQ1b : require("@/audio/Compote/2eme Encart Réponse 2.mp3"),
        openQ2 : require("@/audio/Compote/3eme Encart Boissons.mp3"),
        openQ2a : require("@/audio/Compote/3eme Encart 1ere Réponse.mp3"),
        openQ2b : require("@/audio/Compote/3eme Encart 2ème Réponse.mp3"),
        openQ2c : require("@/audio/Compote/3eme Encart 3ème Réponse.mp3"),
        openQ3 : require("@/audio/Compote/4eme Encart Signe Astro.mp3"),
        openQ4 : require("@/audio/Compote/5eme Encart Surnom.mp3"),
        openQ5 : require("@/audio/Compote/6eme Encart Personnages.mp3"),
        openQ5a : require("@/audio/Compote/6eme Encart Réponse 1.mp3"),
        openQ5b : require("@/audio/Compote/6eme Encart Réponse 2.mp3"),
        endQuiz : require("@/audio/Compote/7eme Encart Nom de Virus.mp3"),

        radio : new Audio(require("@/audio/Radio/MontageRadio202.mp3")),
        rat : new Audio(require("@/audio/Bruitage/RAT.mp3")),
        ampoule : new Audio(require("@/audio/Bruitage/AMPOULES.wav")),
        antenneDroite : new Audio(require("@/audio/Bruitage/ANTENNE DROITE.wav")),
        antenneGauche : new Audio(require("@/audio/Bruitage/ANTENNE GAUCHE.wav")),
        araigneeFenetre : new Audio(require("@/audio/Bruitage/ARAIGNEE FENETRE.wav")),
        araigneeLivre : new Audio(require("@/audio/Bruitage/ARAIGNEE LIVRES.wav")),
        ballon : new Audio(require("@/audio/Bruitage/BALLON.wav")),
        boutonTV : new Audio(require("@/audio/Bruitage/BOUTON TV.wav")),
        ciseaux : new Audio(require("@/audio/Bruitage/CISEAUX.wav")),
        machine : new Audio(require("@/audio/Bruitage/MACHINE À COUDRE.wav")),
        porte : new Audio(require("@/audio/Bruitage/PORTE ETOILE COEUR.wav")),
        projecteur : new Audio(require("@/audio/Bruitage/PROJECTEUR CINEMA.wav")),
        audioHelp : new Audio(require("@/audio/Compote/Voix Compote Help.mp3")),
    },
    {
        active : true,
        name : "Tuto Ribambelle",
        videoId : "442289372",
        },

]