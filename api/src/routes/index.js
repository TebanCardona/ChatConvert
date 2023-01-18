const { Router } = require("express");
const router = Router();
const convert = require('./convertRoute')
const currencies = require('./currenciesRoutes')

router.get("/", (req, res) => {
  res.send('que onda pa')
})
router.use("/convert", convert)
router.use("/currencies", currencies)


module.exports = router;
