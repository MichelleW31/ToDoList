(function(){
  function listHover(){
    return{
      restrict:"A",
      link: function($scope, $element, $attrs){
        $element.on("mouseenter", function(){
          $element.css("background-color", "#eee").css("cursor","pointer");
        });
        $element.on("mouseleave", function(){
          $element.css("background-color", "white");
        });
        $element.on("mouseenter", function(){
          var path = $element["0"].lastElementChild;
          path.style.color="red";
        });
        $element.on("mouseleave", function(){
          var path = $element["0"].lastElementChild;
          path.style.color="black";
        });
      }
    };
  };

  angular
    .module("app")
    .directive("listHover", listHover);
})();
