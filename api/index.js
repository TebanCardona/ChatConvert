const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { postCurrencies } = require('./src/scripts/postCurrencies')
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  // postCurrencies()
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
