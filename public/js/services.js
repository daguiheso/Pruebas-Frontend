'use strict';

/* Services */


(function(){
	angular.module('prueba.services',[])
		.factory('pruebaService', ['$http', '$q', function($http, $q){

			function all(){
				var deferred = $q.defer(); //metodo defer me permite interactuar con la promise
				$http.get('http://fronttest.rds-la.com/books') //esto me devuelve los datos en una promesa, la promesa recibe una function que se llama callback
					.success(function(data){ //esta variable data contiene los datos del array del product obtenido del servidor
						console.log(data);
						deferred.resolve(data)
					});

				return deferred.promise;
			}

			// function byName(name) {
			// 	name = normalize(name);
			// 	var deferred = $q.defer();
				
			// 	all().then(function (data){
			// 		var results = data.filter(function (product){ // .filter => funcionalidad de JS
			// 			return normalize(product.name) === name;
			// 		});

			// 		if (results.length > 0) {
			// 			deferred.resolve(results[0]);
			// 		}else{
			// 			deferred.reject();
			// 		}
			// 	});
			// 	return deferred.promise;
			// }


			//obetos que retorna el servicio tipo factory
			return {
				all : all
				// byName : byName,
			}
		}]);
})();
