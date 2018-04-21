var app = angular.module('formApp', []);
      app.controller('form-controle', function($scope) {
                 
        $scope.usuarios = [];
        $scope.cadastrar = function(){
          $scope.usuarios.push($scope.usuario);
          $scope.usuario = {nome:'',email:'',mensagem:''};
        };
        $scope.validaForm  = function(isvalid){
          if(isvalid)
          {
            $scope.cadastrar();
          }
        }    
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