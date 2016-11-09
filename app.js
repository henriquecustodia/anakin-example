'use strict';

const PORT = 8080;
const app = require('express')();

let anakin = require('anakin')({
    base: __dirname
});

global.anakinInjector = anakin.get;

anakin.map({
    model: 'app/models/model',
    controller: 'app/controllers/controller',
    route: 'app/routes/route'
});

app.use('/api', anakinInjector('route'));

app.listen(PORT, () => {
    console.log(`Look at ${PORT}!`);
});