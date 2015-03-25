'use strict';

angular.module('ProductApp.controllers', []).

    controller('ProductsController', ['$scope','ProductService',
        function($scope, ProductService){
	    	$scope.products = [];
	    
	    	ProductService.getProductsJSON().success(function(response){
	    		$scope.products = response.products;
	    	});
    	}
    ]).
    
    controller('ProductController', ['$scope', '$routeParams', 'ProductService',
        function($scope, $routeParams, ProductService){
    	$scope.product = null;
    	var shortname = $routeParams.shortname;
    
    	ProductService.getProductJSON(shortname).success(function(response){
    		$scope.product = response;
    	});
	}
    ]).
    
    controller('NewProductController', ['$scope', 'ProductService',
        function($scope, ProductService){
    		$scope.addProduct = function(){
    			
    			productJson +=  "{\"shortname\" : \""  + $scope.newProduct.shortname +  "\",";
    			productJson +=  "\"description\" : \""  + $scope.newProduct.description + "\",";
    			productJson +=  "\"id\" : "  + $scope.newProduct.id + ",";
    			productJson +=  "\"price\" : "  + $scope.newProduct.price + ",";
    			productJson +=  "\"brand\" : \""  + $scope.newProduct.brand + "\"}";

    			ProductService.addProduct(productJson);
    		}
    }
    ]);
