(function(){
  function listHover(){
    return{
      restrict:"A",
      link: function($scope, $element, $attrs){
        $element.on("mouseenter", function(){
          $element.css("background-color", "#eee");
        });
        $element.on("mouseleave", function(){
          $element.css("background-color", "white");
        });
      }
    };
  };

  angular
    .module("app")
    .directive("listHover", listHover);
})();
