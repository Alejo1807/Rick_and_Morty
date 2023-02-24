let favs = require('../utils/favs.js')

postFavs = (req,res) => {
    
    try{
        const character = req.body;

    if(character){
        favs.favs.push(character)
        return res.status(200).json(character)
    }

    } catch(e){
        return res.status(500).json(e.message)
    }
    
}

module.exports = postFavs