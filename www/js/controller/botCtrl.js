angular.module('botapp').controller('botCtrl', function($scope, captchaApi) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //Show the Captcha Image
  $scope.showCaptcha = function(){
    captchaApi.getCaptcha().success(captchaUrl =>{

      console.log(captchaUrl);

      //No Captcha to solve
      if(captchaUrl=="No Captcha"){

        //Alow API to Register Cupons
        captchaApi.postCaptcha().success(result =>{
          $scope.result = result;
        });

      //Retorna URL do Captcha
      }else $scope.captcha.url = captchaUrl;
    });
  }

  //Send the Resolved Captcha to the API
  $scope.resolveCaptcha = function(captcha){
    captchaApi.postCaptcha(captcha).success(result =>{
      //Retorna o resultado do primeiro cadastro
      $scope.result = result;

      //Limpa o Captcha Antigo
      $scope.captcha = {};
    });
  }

  //Captcha
  $scope.captcha = {};
});
