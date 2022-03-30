'use strict';

var utils = require('../utils/writer.js');
var TodoList = require('../service/TodoListService');

module.exports.addtodoList = function addtodoList (req, res, next, body) {
  TodoList.addtodoList(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findtodoListsByStatus = function findtodoListsByStatus (req, res, next) {
  TodoList.findtodoListsByStatus()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatetodoList = function updatetodoList (req, res, next, todoId) {
  TodoList.updatetodoList(todoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
