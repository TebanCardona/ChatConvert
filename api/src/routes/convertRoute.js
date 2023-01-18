const { Router } = require('express')
const { Convert, Currency } = require("../db")
const { convertAPi } = require('../scripts/convertAPi')
const router = Router()

router.post('/', async (req, res) => {
  try {
    const { amount, from, to } = req.body
    if (!from || !to) return res.status(400).send("Envia toda la informacion. Por favor!")
    const amountNaN = Number(amount)
    if (isNaN(amountNaN)) {
      switch (amount.toLowerCase()) {
        case "hola":
          return res.send("Hola amigo quieres saber el cambio de una divisa... Pues escribe la cantidad que deseas convertir")
        default: return res.send("Hola soy ConvertIO enviame la cantidad que cantidad deseas convertir")
      }

    }
    const data = await convertAPi(to, from, amountNaN)
    await Convert.create({
      amount: amountNaN,
      currencyto: to,
      currencyfrom: from,
      converted: data
    })
    const nameFrom = await Currency.findByPk(from)
    const nameTo = await Currency.findByPk(to)
    return res.send(`ConvertIO ha calculado que ${nameFrom.name} $${amount} a ${nameTo.name} son $${data}.`)
  } catch (error) {
    res.status(500).send(error)
  }
})
module.exports = router