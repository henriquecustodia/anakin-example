'use strict';

const model = anakinInjector('model');

module.exports.myNameIs = (req, res, next) => {
    res.json({
        message: model.reply(req.params.name)
    });
}