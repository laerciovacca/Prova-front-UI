    
    app.controller('FilmeCtrl', function($rootScope, $location)
    {
       $rootScope.activetab = $location.path();
       console.log('opa flme!!', $rootScope);



    });

    app.controller('mostrarFilme', ['$rootScope', '$http', function($rootScope, $http) {
        $rootScope.filme;
        var baseUrl2 = 'https://swapi.co/api/films/4/';
        
        $http.get(baseUrl2).then(function(response) {
          // console.log(response);
          $rootScope.filme = response.data;
          // console.log($rootScope.filme);

          $localStorage.solicitacao = solicitacao;
          

          }, function(err) {
            console.log(err);
          });
      
        

    }]);