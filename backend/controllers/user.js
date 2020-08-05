const jwt = require('jsonwebtoken');
const randomInt = require('random-int');
const User = require('../models/User');

const adj1 = ["Abordable","Accompli","Accueillant","Actif","Admirable","Adorable","Adroit","Aérien","Affectueux","Agréable","Aimable","Aimant","Ambitieux","Amical","Amoureux","Amusant","Amusé","Animé","Apaisant","Ardent","Assidu","Astucieux","Attachant","Attentif","Attentionné","Attractif","Attrayant","Audacieux","Autonome","Avenant","Aventureux","Avisé","Béat","Bienfaisant","Bienveillant","Bon","Bouillant","Brave","Brillant","Câlin","Calme","Captivant","Céleste","Chaleureux","Chanceux","Charismatique","Charitable","Charmant","Charmeur","Chatoyant","Chouette","Clément","Cocasse","Colossal","Comblé","Comique","Communicatif","Compétent","Compétitif","Conciliant","Confiant","Consciencieux","Constant","Content","Convivial","Coquin","Cordial","Costaud","Courageux","Courtois","Créatif","Cultivé","Curieux","Débonnaire","Débrouillard","Décidé","Délicat","Délicieux","Désirable","Détendu","Déterminé","Digne","Discret","Disponible","Distingué","Divertissant","Divin","Doué","Doux","Drôle","Dynamique","Éblouissant","Éclairé","Éclatant","Efficace","Élégant","Eloquent","Éloquent","Émouvant","Endurant","Énergique","Enflammé","Engagé","Enjoué","Ensoleillé","Ensorcelant","Enthousiaste","Entreprenant","Envoûtant","Épanoui","Épatant","Époustouflant","Épris","Équilibré","Équitable","Étincelant","Étonnant","Euphorique","Exaltant","Exalté","Excellent","Excentrique","Exceptionnel","Excité","Exemplaire","Expressif","Exquis","Extraordinaire","Extraverti","Exubérant","Fameux","Fantastique","Farceur","Farfelu","Fascinant","Favorable","Festif","Fiable","Fidèle","Fier","Flamboyant","Flatteur","Formidable","Fort","Fortuné","Fougeux","Frétillant","Galant","Généreux","Génial","Gentil","Gracieux","Grandiose","Habile","Hardi","Harmonieux","Héroïque","Heureux","Hospitalier","Idéal","Imaginatif","Impeccable","Impliqué","Impressionnant","Incandescent","Inconnu","Indulgent","Infatigable","Ingénieux","Innovateur","Insouciant","Inspiré","Intelligent","Intrépide","Inventif","Invincible","Invisible","Irremplaçable","Irrésistible","Joli","Jovial","Joyeux","Libre","Loufoque","Loustic","Loyal","Lumineux","Magistral","Magnifique","Malin","Marrant","Mature","Méritant","Merveilleux","Méthodique","Mignon","Modèle","Motivé","Noble","Novateur","Observateur","Optimiste","Original","Ouvert","Pacifique","Paisible","Paradisiaque","Parfait","Passionnant","Passionné","Patient","Persévérant","Perspicace","Persuasif","Pétillant","Phénoménal","Philosophe","Plaisant","Poilant","Poli","Polyvalent","Ponctuel","Positif","Pratique","Présent","Prévenant","Prévoyant","Prodigieux","Productif","Prometteur","Prospère","Protecteur","Prudent","Puissant","Pur","Radieux","Raffiné","Raisonnable","Rare","Rassurant","Rationnel","Ravi","Ravissant","Rayonnant","Réaliste","Réceptif","Reconnaissant","Relaxant","Remarquable","Renversant","Résistant","Résolu","Respectueux","Resplendissant","Responsable","Révolutionnaire","Rieur","Rigolo","Romantique","Rusé","Sage","Savant","Séduisant","Sensible","Sentimental","Serein","Sérieux","Serviable","Sincère","Sociable","Social","Soigneux","Solide","Somptueux","Souriant","Spécial","plendide","Spontané","Sportif","Stable","Stratège","Stupéfiant","Sublime","Succulent","Superbe","Suprême","Surprenant","Sympathique","Talentueux","Tendre","Tolérant","Torride","Touchant","Transi","Truculent","Unique","Vaillant","Valeureux","Vénérable","Vertueux","Vif","Vigoureux","Vital","Zen"];
const virus = ["Adénovirus","Aérovirus","Alphavirus","Anemiavirus","Anginovirus","Angiovirus","Aphthovirus","Aquareovirus","Arbovirus","Arenavirus","Arterivirus","Astrovirus","Aviadenovirus","Bacterovirus","Baculovirus","Begomovirus","Betaretrovirus","Betavirus","Bocavirus","Bronchiovirus","Bunyavirus","Calicivirus","Capillovirus","Carlavirus","Carmovirus","Cellulovirus","Choléravirus","Coronavirus","Cryptovirus","Cucumovirus","Cypovirus","Cytomegalovirus","Cytovirus","Deltaretrovirus","Deltavirus","Densovirus","Dependovirus","Dianthovirus","Drosovirus","Duovirus","Ebolavirus","Echovirus","Eczémavirus","Encephalovirus","Enterovirus","Entérovirus","Fabavirus","Fibrovirus","Filovirus","Furovirus","Gammavirus","Gastrovirus","Geminivirus","Géminivirus","Getahvirus","Gigavirus","Goldenvirus","Granulovirus","Grippovirus","Hantavirus","Hémovirus","Hendravirus","Hepatovirus","Herpesvirus","Hordeivirus","Infectiovirus","Kumbavirus","Lactovirus","Lambdavirus","Laryngovirus","Lentivirus","Leucemovirus","Listériovirus","Luteovirus","Lymphovirus","Lyssavirus","Macrovirus","Mamavirus","Marburgvirus","Mégalovirus","Megavirus","Mengovirus","Méningovirus","Minivirus","Monkeyvirus","Monovirus","Mycosovirus","Myxovirus","Norovirus","Omégavirus","Orbivirus","Orthoreovirus","Pandoravirus","Papillomavirus","Paramyxovirus","Parvovirus","Pestivirus","Phytovirus","Pneumovirus","Poliovirus","Polyomavirus","Poxvirus","Provirus","Pseudovirus","Ratvirus","Reovirus","Réticulovirus","Retrovirus","Rhinovirus","Ribovirus","Rotavirus","Rubivirus","Salmovirus","Sinusovirus","Staphylovirus","Streptovirus","Supervirus","Tenvivirus","Tétanovirus","Thogotovirus","Tobamovirus","Tombamovirus","Tombusvirus","Torovirus","Tospovirus","Toxovirus","Tuberculovirus","Tupanvirus","Tymovirus","Ultravirus","Varicellovirus","Variolavirus","Viralovirus","Yaravirus","Zêtavirus","Zikavirus"];

exports.signup = async (req, res, next) => {
    let user = true, name;
    while (user) {
      name = virus[randomInt(0, 136)] + " " + adj1[randomInt(0, 310)] 
      user = await User.findOne({ uniqueName: name })
    }
    const newUser = new User({ ...req.body.user, uniqueName: name })
    await newUser.save()
    res.status(201).json({
      message: 'User create !',
      uniqueName: newUser.uniqueName,
      token : jwt.sign(
        { uniquename: newUser.uniqueName },
        process.env.SECRET_KEY,
        { expiresIn: '48h' }
      )
  });
}

exports.login = async (req, res, next) => {
    const user = await User.findOne({ uniqueName: req.body.uniqueName })
    if (!user || !req.body.uniqueName) {
        res.status(201).json({ error: 'User don\'t find !' }) 
    } else {
        res.status(200).json({
          user: user,
          token: jwt.sign(
            { uniquename: user.uniqueName },
            process.env.SECRET_KEY,
            { expiresIn: '48h' }
          )
        });
      }
  };

  exports.auth = async (req, res, next) => {
    res.status(200).json({user: req.user});
  };

  exports.edit = async (user) => {
    await User.updateOne({ uniquename: user.uniqueName}, user);
  };