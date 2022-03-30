'use strict';

var utils = require('../utils/writer.js');
var Family = require('../service/FamilyService');

module.exports.createfamily = function createfamily (req, res, next, body) {
  Family.createfamily(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createfamilysWithArrayInput = function createfamilysWithArrayInput (req, res, next) {
  Family.createfamilysWithArrayInput()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFamilyMember = function getFamilyMember (req, res, next, memberId) {
  Family.getFamilyMember(memberId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
