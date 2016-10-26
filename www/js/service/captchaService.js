//Captcha API
//Send requests to BOT-Server

//Creates new Service in "botapp" module
angular.module("botapp").factory("captchaApi", function($http, config){

  //Resolve Captcha
  var _postCaptcha = function(captcha){

    return $http.post(config.baseUrl + "/Captcha", captcha);
  };

  //Get Captcha URL
  var _getCaptcha  = function(){

    return $http.get(config.baseUrl + "/Captcha");
  }

  //Return functions to be used
  return{
    postCaptcha: _postCaptcha,
    getCaptcha:  _getCaptcha
  };
});
