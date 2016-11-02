angular.module('botapp').controller('botCtrl', function($scope, captchaApi, cupomApi, $window) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function(e) {

    //Update Table when enter Tab
    $scope.updateTable();
  });

  //Update table of Estados
  $scope.updateTable = function(){

    //Estado Information from API
    cupomApi.getCupom().success(cupons =>{
      $scope.cupons = cupons;
    });

    //Estado Information from API
    cupomApi.getChave().success(chaves =>{
      $scope.chaves = chaves;
    });
  }

  //Show the Captcha Image
  $scope.showCaptcha = function(){
    captchaApi.getCaptcha().success(captchaUrl =>{

      //No Captcha to solve
      if(captchaUrl=="No Captcha"){

        //Alow API to Register Cupons
        captchaApi.postCaptcha().success(result =>{
          $scope.result = result;
        });

      //Return Captcha URL
      }else $scope.captcha.url = captchaUrl;
    });
  }

  //Send the Resolved Captcha to the API
  $scope.resolveCaptcha = function(captcha){
    captchaApi.postCaptcha(captcha).success(result =>{
      //Return the result of first register
      $scope.result = result;

      //Reload Page
      $window.location.reload();
    });
  }

  $scope.cancel = function(){
    
    //Reload Page
    $window.location.reload();
  }

  //Captcha
  $scope.captcha = {};
});
