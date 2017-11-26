(function(){

  function DataService(){
    var things=[];

    this.setData = function(item){
      things.push(item);
    };

    this.getData = function(){
      return things;
    };

  }

  angular
    .module("app")
    .service("DataService", DataService)
})();
