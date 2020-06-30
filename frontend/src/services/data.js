export default [
    {
        active : true,
        name : "Défilé de Gustavio",
        gif : require("@/assets/gif_channel1.gif"),
        background : require("@/assets/Defilee3.jpg"),
        videoId : "424188401",
        ambiance : new Audio(require('@/audio/DéfileAmbiance.mp3'))
    }, {
        active : true,
        name : "Coroméo et Juliettovid",
        gif : require("@/assets/gif_channel2.gif"),
        background : require("@/assets/PlateauTV.jpg"),
        videoId : "396458662",
        ambiance : new Audio(require('@/audio/EmissionAmbianceSalon.mp3'))
    }, {
        active : true,
        name : "Roman-Photo",
        gif : require("@/assets/gif_channel3.gif"),
        background : require("@/assets/Roman2.jpg"),
        videoId : "428175533",
        ambiance : new Audio(require('@/audio/RomanPhotoAmbianceSalon.mp3'))
    }, {
        active : true,
        name : "Zapping TV",
        gif : require("@/assets/gif_channel4.gif"),
        background : require("@/assets/Zapping.jpg"),
        videoId : "396458662",
        ambiance : new Audio(require('@/audio/ZappingAmbiance.mp3'))
    }, {
        active : false,
        name : "Emission de Virus",
        gif : require("@/assets/gif_channel5.gif"),
        background : require("@/assets/loge4.jpg"),
        videoId : "422248221",
        ambiance : new Audio(require('@/audio/RomanPhotoAmbianceSalon.mp3'))
    },
]