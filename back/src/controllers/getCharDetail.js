var axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character/"

getCharDetail = (req,res)=>{

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
            image:data.image,
            origin:data.origin
        }

        return res.status(200).json(character)
    })
    .catch(error => {
        return res.status(500).json(error.message)
    })
}

module.exports = getCharDetail

a= {id:1,
    data:"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name:"Rick Sanchez",
    gender:"Male",
    species:"Human",
    image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    origin:{name:"Earth (C-137)",url:"https://rickandmortyapi.com/api/location/1"}}