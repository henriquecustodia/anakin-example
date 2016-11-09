'use strict';

const router = require('express').Router();
const controller = anakinInjector('controller');

router.get('/my-name-is/:name', controller.myNameIs);

module.exports = router;

