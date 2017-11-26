(function(){
  var taskForm = {
    controller:"FormController",
    template: `<form>
      <div id='formlist'>
      <a href="#!/welcome"><i class="material-icons md-18">arrow_back</i>Go back</a>
      <h1>TODO List</h1>
      <p>A place to store the things you have to do!</p>
      <input type='text' ng-model='$ctrl.filterTry' placeholder='Filter your to-dos'/>
      <ol>
        <task-list filter-try='$ctrl.filterTry' task-array='$ctrl.taskArray'></task-list>
      </ol>
      <input type='text' ng-model='$ctrl.task' placeholder='Add your to do'>
      <button ng-click = '$ctrl.addItem($ctrl.task)' add-directive>Add</button>
      </div>
      </form>`
  };

  angular
    .module("app")
    .component("taskForm", taskForm);
})();
