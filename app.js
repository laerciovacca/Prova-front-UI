
  
    var app = angular.module('App',['ngRoute']);

    app.config(function($routeProvider, $locationProvider)
    {
      console.log('opa02');
       // remove o # da url
       // $locationProvider.html5Mode(true);
       $locationProvider.hashPrefix('');

       $routeProvider

       // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
       .when('/', {
          templateUrl : '/views/home.html',
          controller     : 'HomeCtrl',
       })

       .when('/filme', {
          templateUrl : '/views/filme.html',
          controller     : 'FilmeCtrl',
       })
       
       // caso não seja nenhum desses, redirecione para a rota '/'
       .otherwise ({ redirectTo: '/' });
    });

    
    


        