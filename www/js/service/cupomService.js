//Cupom and Chave API
//Send requests to BOT-Server

//Creates new Service in "botapp" module
angular.module("botapp").factory("cupomApi", function($http, config){


  //Get Estado of Cupons
  var _getCupom = function(){

    return $http.get(config.baseUrl + "/Cupom");
  }

  //Get Estado of Chaves
  var _getChave = function(){

    return $http.get(config.baseUrl + "/Chave");
  }

  //Return functions to be used
  return{
    getCupom: _getCupom,
    getChave: _getChave,
  };
});
