(function(){
  function FormController(){
    var fc = this;
    fc.taskArray = [];

    fc.addItem = function(item){
      fc.taskArray.push(item);
      fc.task = "";
    }
    fc.removeItem = function(index){
      fc.taskArray.splice(index,1);
    }
  }

  angular
    .module("app")
    .controller("FormController", FormController);
})();
