//Captcha API
//Send requests to BOT-Server

//Creates new Service in "botapp" module
angular.module("botapp").factory("captchaApi", function($http, config){

  //Get Captcha URL
  var _getCaptcha  = function(){

    return $http.get(config.baseUrl + "/Captcha");
  }

  //Return functions to be used
  return{
    getCaptcha:  _getCaptcha
  };
});
