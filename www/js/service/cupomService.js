//Cupom and Chave API
//Send requests to BOT-Server

//Creates new Service in "botapp" module
angular.module("botapp").factory("cupomApi", function($http, config){


  //Get Estado of Cupons
  var _getCupom = function(){

    return $http.get(config.baseUrl + "/Cupom");
  }

  //Resolve Captcha and Insert Cupons
  var _postCupom = function(captcha){
    console.log('Chega Aqui')
    return $http.post(config.baseUrl + "/Cupom", captcha);
  };

  //Get Estado of Chaves
  var _getChave = function(){

    return $http.get(config.baseUrl + "/Chave");
  }

  //Resolve Captcha and Insert Chaves
  var _postChave = function(captcha){

    return $http.post(config.baseUrl + "/Chave", captcha);
  };

  //Return functions to be used
  return{
    getCupom:  _getCupom,
    postCupom: _postCupom,
    getChave:  _getChave,
    postChave: _postChave
  };
});
