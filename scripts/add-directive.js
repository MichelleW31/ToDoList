(function(){
  function addDirective(){
    return{
      restrict:"A",
      link: function($scope, $element, $attrs){
        $element.on("mouseenter", function(){
          $element.css("background-color", "#ff1493");
        });
        $element.on("mouseleave",function(){
          $element.css("background-color","#ff69b4");
        });
      }
    };
  };

  angular
    .module("app")
    .directive("addDirective", addDirective);
})();
