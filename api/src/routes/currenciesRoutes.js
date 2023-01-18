const { Router } = require("express");
const { Currencies } = require('../db')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const data = await Currencies.findAll()
    if (data.length === 0) throw ('No se eencuentran divisas en la base de datos')
    res.send(data)
  } catch (error) {
    res.status(500).send(error)
  }
})
module.exports = router
