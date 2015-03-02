'use strict';

/* Controllers */


(function() {
	// 2 param es el arreglo de las dependencias 
	angular.module('prueba.controllers', []) //sin  ;  al final para tener chainmethods

		.controller('BooksController', ['$scope', 'pruebaService', function ($scope, pruebaService){

			pruebaService.all().then(function (data){
				console.log(data);
				$scope.books = data;
				$scope.tyu = 5;
			});
		}])
		

		// .controller('ProductController', ['$scope', '$routeParams', 'kinggraficService', function ($scope, $routeParams, kinggraficService) {
		// 	var name = $routeParams.name;

		// 	kinggraficService.byName(name)
		// 		.then(function (data){
		// 			$scope.product = data;
		// 		})
		// }])


		

})();