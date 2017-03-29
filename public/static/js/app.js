'use strict';
var zoombeiApp = angular.module('zoombei', ['ngRoute']);

zoombeiApp.config(function($routeProvider) {	
	
	$routeProvider.when('/index', {
		templateUrl : 'views/main.html',
		controller : 'mainCtrl'		
	}).when('/home', {
		templateUrl : 'views/main.html',
		controller : 'mainCtrl'		
	}).when('/journey/vision', {
		templateUrl : 'views/journey/vision.html',
		controller : 'mainCtrl'		
	}).when('/journey/mission', {
	    templateUrl: 'views/journey/mission.html',
	    controller: 'mainCtrl'
	}).when('/solution/visual-analytic', {
	    templateUrl: 'views/solution/visual-analytic.html',
	    controller: 'mainCtrl'
	}).when('/solution/employee-engagement', {
	    templateUrl: 'views/solution/employee-engagement.html',
	    controller: 'mainCtrl'
	}).when('/solution/data-management', {
	    templateUrl: 'views/solution/data-management.html',
	    controller: 'mainCtrl'
	}).when('/solution/research-service', {
	    templateUrl: 'views/solution/research-service.html',
	    controller: 'mainCtrl'
	}).when('/solution/risk-management', {
	    templateUrl: 'views/solution/risk-management.html',
	    controller: 'mainCtrl'
	}).when('/about', {
	    templateUrl: 'views/about.html',
	    controller: 'mainCtrl'
	}).when('/people/leadership-team', {
	    templateUrl: 'views/people/leadership-team.html',
	    controller: 'mainCtrl'
	}).when('/people/board-advisor', {
	    templateUrl: 'views/people/board-advisor.html',
	    controller: 'mainCtrl'
	}).when('/people/management-team', {
	    templateUrl: 'views/people/management-team.html',
	    controller: 'mainCtrl'
	}).when('/contact', {
		templateUrl : 'views/contact.html',
		controller : 'mainCtrl'		
	}).when('/', {
		templateUrl : 'views/main.html',
		controller : 'mainCtrl'	
		});	

});