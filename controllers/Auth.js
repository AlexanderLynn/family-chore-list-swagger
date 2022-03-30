'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.getOrderById = function getOrderById (req, res, next, body) {
  Auth.getOrderById(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.placeOrder = function placeOrder (req, res, next, body) {
  Auth.placeOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
