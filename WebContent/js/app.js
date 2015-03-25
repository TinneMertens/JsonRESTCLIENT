'use strict';

angular.module('ProductApp', [
	'ngRoute', 
    'ProductApp.services',
    'ProductApp.controllers'
]).

config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
		when('/products', {templateUrl: 'partials/products.html', controller: 'ProductsController'}).
		when('/products/addproduct', {templateUrl: 'partials/addproduct.html', controller: 'NewProductController'}).
		when('/products/:shortname', {templateUrl: 'partials/product.html', controller: 'ProductController'});
	  //je kan ook verder chainen naar otherwise()
}]);