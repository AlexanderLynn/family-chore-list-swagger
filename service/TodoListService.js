'use strict';


/**
 * Adds a new todo
 *
 * body Task Created family object
 * no response value expected for this operation
 **/
exports.addtodoList = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets all todos
 * Multiple status values can be provided with comma separated strings
 *
 * no response value expected for this operation
 **/
exports.findtodoListsByStatus = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a todo
 *
 * todoId String ID of todo to delete
 * no response value expected for this operation
 **/
exports.updatetodoList = function(todoId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

