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
	}).when('/solution/analytic/collect', {
			templateUrl: 'views/solution/analytic/collect.html',
			controller: 'mainCtrl'
	}).when('/solution/analytic/manage', {
			templateUrl: 'views/solution/analytic/manage.html',
			controller: 'mainCtrl'
	}).when('/solution/analytic/analyze', {
			templateUrl: 'views/solution/analytic/analyze.html',
			controller: 'mainCtrl'	
	}).when('/solution/analytic/act', {
			templateUrl: 'views/solution/analytic/act.html',
			controller: 'mainCtrl'	
	}).when('/solution/capability/advanced-analytic', {
			templateUrl: 'views/solution/capability/advanced-analytic.html',
			controller: 'mainCtrl'
	}).when('/solution/capability/iot', {
			templateUrl: 'views/solution/capability/iot.html',
			controller: 'mainCtrl'
	}).when('/solution/capability/social-media', {
			templateUrl: 'views/solution/capability/social-media.html',
			controller: 'mainCtrl'
	}).when('/solution/capability/bigdata', {
			templateUrl: 'views/solution/capability/bigdata.html',
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