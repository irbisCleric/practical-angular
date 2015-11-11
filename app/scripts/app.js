'use strict';

/**
 * @ngdoc overview
 * @name practicalAngularApp
 * @description
 * # practicalAngularApp
 *
 * Main module of the application.
 */
var mainModule = angular.module('practicalAngularApp', []);

mainModule.service('SmithService', function () {
  this.getName = function (name) {
    return name + ' Smith';
  }
});

mainModule.controller('AppCtrl', function () {
  this.message = 'Hello';
});
