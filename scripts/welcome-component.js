(function(){

  var welcomeComponent = {
    template:`
      <div id = "welcomeinfo">
        <h1>Welcome to TODO</h1>
        <p>Do more. Increase your productivity with a simple to do app.</p>
        <a href="#!/form">Enter<i class="material-icons md-18">arrow_forward</i></a>
      </div>
    `,
    controller: "WelcomeController"
  }

  angular
    .module("app")
    .component("welcomeComponent", welcomeComponent)
})();
