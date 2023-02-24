const { Router } = require("express")
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')
const postFavs = require('../controllers/postFavs')
const getFavs = require('../controllers/getFavs')
const deleteFavs = require('../controllers/deleteFavs')


const router = Router();

router.get('/rickandmorty/onsearch/:id',getCharById);
router.get('/rickandmorty/detail/:id',getCharDetail);

router.post('/rickandmorty/fav',postFavs)
router.get('/rickandmorty/fav',getFavs)
router.delete('/rickandmorty/fav/:id',deleteFavs)

module.exports = router;

