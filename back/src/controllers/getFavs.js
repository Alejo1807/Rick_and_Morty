let favs = require('../utils/favs.js')

getFavs = (req,res) => {
  
    return res.status(200).json(favs.favs)

}

module.exports = getFavs