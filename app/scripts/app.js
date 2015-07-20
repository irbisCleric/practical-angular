'use strict';

/**
 * @ngdoc overview
 * @name angularPracticeApp
 * @description
 * # angularPracticeApp
 *
 * Main module of the application.
 */

"use strict";

require('./vendors')();

var mainApp = angular.module('angularPracticeApp', [
        'ui.router',
        'ngResource'
]);

mainApp.config(function ($stateProvider, $urlRouterProvider) {

    // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
    // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
    // Here we are just setting up some convenience urls.
    $urlRouterProvider.otherwise("/home");


    // Use $stateProvider to configure your states.
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: '../templates/welcome.html'
        })
        .state("contacts", {
            url: "/contacts",
            templateUrl: "../templates/contacts.list.html",
            controller: "UsersListCtrl"
        })
        .state("detail", {
            url: "/contacts/:itemId",
            templateUrl: "../templates/contacts.detail.html",
            controller: "SingleUserCtrl"
        })
        .state("404", {
            url: "/404",
            templateUrl: "../404.html"
        });
});

require('./users_list')(mainApp);
require('./user_detail')(mainApp);
require('./header')(mainApp);