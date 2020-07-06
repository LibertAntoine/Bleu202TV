
const Roman = require('../models/Roman');
const User = require('../models/User');

  exports.add = async (req, res, next) => {
    const newRoman = new Roman(req.body.roman)
    await newRoman.save()
    res.status(201).json({
        message: 'Element create !'
    });
  };

  exports.edit = async (req, res, next) => {
    await Roman.updateOne({ state: req.body.roman.state}, req.body.roman);
    res.status(202).json({
        message: 'Element modify !'
    });
  };

  exports.next = async (req, res, next) => {
      console.log(req.body);
    if(req.body.state == 7) {
        User.updateOne({ uniquename: req.user.uniqueName}, {genre: req.body.choix});
    }

    const roman = await Roman.findOne({ state: req.body.state})

    res.status(201).json({
        choix: await giveChoix(roman.next)
    });
  };

  const giveChoix = async (next) => 
  Promise.all(next.map(async element => 
     await Roman.findOne({ state: element })
  ));
