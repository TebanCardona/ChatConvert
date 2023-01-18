const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { postCurrencies } = require('./src/scripts/postCurrencies')
// Syncing all the models at once.
const port = process.env.PORT || 3001;

conn.sync({ force: false }).then(() => {
  postCurrencies()
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
