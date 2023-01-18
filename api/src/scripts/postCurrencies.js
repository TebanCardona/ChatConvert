require("dotenv").config();
const axios = require("axios")
const { Currency } = require('../db')
const { apikey } = process.env
const options = {
  method: 'GET',
  url: 'https://api.apilayer.com/currency_data/list',
  params: { apikey }
};
const postCurrencies = async () => {
  try {
    const res = await axios.request(options)
    if (!res.data) throw res.error
    const ids = Object.keys(res.data.currencies)
    ids.forEach(async (el) => {
      await Currency.create({
        id: el,
        name: res.data.currencies[el]
      })
    })
  } catch (error) {
    console.error(error);
  }
}
module.exports = { postCurrencies }