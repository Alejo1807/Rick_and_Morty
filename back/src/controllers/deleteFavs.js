let favs = require('../utils/favs.js')

deleteFavs = (req,res) => {
    const {id} = req.params;

    if(id){
        const characterFiltered = favs.favs.filter(fav => fav.id !== parseInt(id))

        if(characterFiltered.length !== favs.favs.length){
            favs.favs=characterFiltered;
            return res.status(200).json(id);
        }
        
    }

}

module.exports = deleteFavs