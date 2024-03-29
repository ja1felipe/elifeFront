const express = require('express');
const path = require('path');
const nomeApp = "elifeFront";
const app = express();
 
app.use(express.static(`${__dirname}/dist/${nomeApp}`));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});
 
app.listen(process.env.PORT || 4200);
console.log(`listening for ${nomeApp}`)