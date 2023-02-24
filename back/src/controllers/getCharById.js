var axios = require("axios")


const URL = "https://rickandmortyapi.com/api/character/"

getCharById = (req,res)=>{

    const {id} = req.params

    axios(`${URL}${id}`)
    .then(response => response.data)
    .then(data => {
        const character = {
            id:data.id,
            data:data.image,
            name:data.name,
            gender:data.gender,
            species:data.species,
            image:data.image
        }

        return res.status(200).json(character)
    })
    .catch(error => {
        return res.status(500).json(error.message)
    })
}

module.exports = getCharById;