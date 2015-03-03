'use strict';

/* App Module */

(function () {

  var app = angular.module('prueba', [
  	'ngRoute', 
    'prueba.services',
    'prueba.controllers'
  ]);

  //el modulo routeProvider esta siendo injectado a la funcion routeProvider
  app.config(['$routeProvider', function($routeProvider){
  	$routeProvider   //lamado de metodos encadenados
  		.when('/books',{  //el  /  => ruta principal
  			templateUrl: 'views/books.html',
        	controller: 'BooksController'
  		})
  		// .when('/product/:name', {  // when me hace match de la ruta  //variable id 
  		// 	templateUrl: 'views/book.html', //objeto de configuracion de la ruta 
  		// 	controller: 'BookController', //injectando el controlador a esta ruta 
  		// })
  		.otherwise({
  			redirectTo: '/books'
  		});
  }]);

})();