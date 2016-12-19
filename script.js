/**
 *  script.js - Main JavaScript for Wade Wooldridge portfolio site.
 */

var app = angular.module('portfolioApp',['ngRoute', 'ui.bootstrap']);

app.controller('routeController', function(){
});

app.config(function($routeProvider){
    $routeProvider
        // Main (welcome) page.
        .when('/', {
            templateUrl: 'welcome.html',
            controller: 'welcomeController',
            controllerAs: 'wc'
        })
        // Developer page.
        .when('/developer',{
            templateUrl: 'developer.html',
            controller: 'developerController',
            controllerAs: 'dc'
        })
        // Developer: skills page.
        .when('/skills',{
            templateUrl: 'skills.html',
            controller: 'skillsController',
            controllerAs: 'sc'
        })
        // Developer: projects page.
        .when('/projects',{
            templateUrl: 'projects.html',
            controller: 'projectsController',
            controllerAs: 'pc'
        })
        // Developer: experience page.
        .when('/experience',{
            templateUrl: 'experience.html',
            controller: 'experienceController',
            controllerAs: 'ec'
        })
        // Musician page.
        .when('/musician',{
            templateUrl: 'musician.html',
            controller: 'musicianController',
            controllerAs: 'mc'
        })
        // Actor page.
        .when('/actor',{
            templateUrl: 'actor.html',
            controller: 'actorController',
            controllerAs: 'ac'
        })
        // Foodie page.
        .when('/foodie',{
            templateUrl: 'foodie.html',
            controller: 'foodieController',
            controllerAs: 'fc'
        })
        // Contact page.
        .when('/contact',{
            templateUrl: 'contact.html',
            controller: 'contactController',
            controllerAs: 'cc'
        })
        .otherwise({
            redirectTo: "/"
        })
});

app.controller('headerController', function(){
});

app.controller('welcomeController', function(){
});

app.controller('developerController', function(){
});

app.controller('skillsController', function(){
});

app.controller('projectsController', function(){
});

app.controller('experienceController', function(){
});

app.controller('musicianController', function(){
    // Booleans to toggle album contents.
    this.showImitateTheSun = false;
    this.showBitsOfMe = false;
    this.showDreamscape = false;
});

app.controller('actorController', function(){
});

app.controller('foodieController', function(){
});

app.controller('contactController', function(){
});
