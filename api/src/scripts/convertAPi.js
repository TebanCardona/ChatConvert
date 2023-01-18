require("dotenv").config();
const axios = require('axios')
const { apikey } = process.env

const convertAPi = async (to, from, amount) => {
  const options = {
    method: 'GET',
    url: 'https://api.apilayer.com/currency_data/convert',
    params: { to, from, amount },
    headers: { apikey }
  };
  const res = await axios.request(options)
  if (!res.data.success) throw (res.data.error)
  return res.data.result
}

module.exports = { convertAPi }