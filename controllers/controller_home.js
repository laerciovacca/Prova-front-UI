
    app.controller('HomeCtrl', function($rootScope, $location)
    {
       $rootScope.activetab = $location.path();
       console.log('opa!!');

    });
    app.controller('listaFilmes', ['$scope', '$http', function($scope, $http) {
        $scope.filmes;
        var baseUrl = 'https://swapi.co/api/films';

        $http.get(baseUrl).then(function(response) {
          $scope.filmes = response.data.results;
          console.log($scope.filmes);
          

          }, function(err) {
            console.log(err);
          });
      
        
    }]);







      