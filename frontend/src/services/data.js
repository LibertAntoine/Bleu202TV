export default [
    {
        active : true,
        name : "Défilé de Gustavio",
        gif : require("@/assets/TV/Ecran/gif_channel1.gif"),
        videoId : "424188401",
        ambiance : new Audio(require('@/audio/DéfileAmbiance.mp3'))
    }, {
        active : true,
        name : "Coroméo et Juliettovid",
        gif : require("@/assets/TV/Ecran/gif_channel2.gif"),
        videoId : "396458662",
        ambiance : new Audio(require('@/audio/EmissionAmbianceSalon.mp3'))
    }, {
        active : true,
        name : "Roman-Photo",
        gif : require("@/assets/TV/Ecran/gif_channel3.gif"),
        videoId : "428175533",
        ambiance : new Audio(require('@/audio/RomanPhotoAmbianceSalon.mp3'))
    }, {
        active : true,
        name : "Zapping TV",
        gif : require("@/assets/TV/Ecran/gif_channel4.gif"),
        videoId : "396458662",
        ambiance : new Audio(require('@/audio/ZappingAmbiance.mp3'))
    }, {
        active : false,
        name : "Emission de Virus",
        gif : require("@/assets/TV/Ecran/gif_channel5.gif"),
        videoId : "422248221",
        ambiance : new Audio(require('@/audio/RomanPhotoAmbianceSalon.mp3'))
    },
    {
        antenneGauchePNG : require("@/assets/TV/Animations/AntenneGauche.png"),
        antenneGaucheGIF : require("@/assets/TV/Animations/AntenneGauche.gif"),
        antenneGaucheMP3 : new Audio(require("@/audio/metal.mp3")),
        antenneDroitePNG : require("@/assets/TV/Animations/AntenneDroite.png"),
        antenneDroiteGIF : require("@/assets/TV/Animations/AntenneDroite.gif"),
        antenneDroiteMP3 : new Audio(require("@/audio/metal.mp3")),
        boutonRondPNG : require("@/assets/TV/Animations/BoutonRond.png"),
        boutonRondGIF : require("@/assets/TV/Animations/BoutonRond.gif"),
        boutonRondMP3 : new Audio(require("@/audio/metal.mp3")),

        audioHelp : new Audio(require("@/audio/help.mp3")),
        openNoConnect : new Audio(require("@/audio/help.mp3")),
        openConnect : new Audio(require("@/audio/help.mp3")),
        login : new Audio(require("@/audio/help.mp3")),
        openQ1 : new Audio(require("@/audio/help.mp3")),
        openQ2 : new Audio(require("@/audio/help.mp3")),
        openQ3 : new Audio(require("@/audio/help.mp3")),
        openQ4 : new Audio(require("@/audio/help.mp3")),
        endQuiz : new Audio(require("@/audio/help.mp3")),
    },

]