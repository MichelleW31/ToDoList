(function(){
  angular
    .module("app",["ngRoute"])
    .config(function($routeProvider){
      $routeProvider
      .when("/",{
        template:`
          <welcome-component></welcome-component>
        ` ,
        controller: "WelcomeController as welcome"
      })
      .when("/form",{
        template:`
          <task-form></task-form>
        `,
        controller:"FormController as form"
      })
      .otherwise({
        redirectTo: "/"
      });
    });
})();
