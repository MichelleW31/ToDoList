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
        $element.on("mouseenter", function(){
          console.log($element);
          var path = $element["0"].lastElementChild;
          path.style.color="red";
        });
        $element.on("mouseleave", function(){
          console.log($element);
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
