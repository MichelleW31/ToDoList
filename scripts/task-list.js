(function(){
  var taskList ={
    bindings:{
      taskArray: "<",
      filterTry: "<"
    },
    controller: "FormController",
    template:"<li ng-repeat='items in $ctrl.taskArray | filter: $ctrl.filterTry track by $index' list-hover > {{items}} <i ng-click='$ctrl.removeItem($index)' class='material-icons'>clear</i></li>"
  };

  angular
    .module("app")
    .component("taskList", taskList);
})();
