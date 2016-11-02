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
  $scope.showCaptcha = function(cupom){

    //Cupom or Chave
    $scope.cupom = cupom;

    captchaApi.getCaptcha().success(captchaUrl =>{

      console.log(captchaUrl);

      //No Captcha to solve
      if(captchaUrl=="No Captcha"){

        //Register Cupom or Chave
        if(cupom) $scope.registerCupom();
        else      $scope.registerChave();
      }
      else $scope.captcha.url = captchaUrl;
    });
  }

  //Register Cupom with Captcha
  $scope.registerCupom = function(captcha){

    //Send the Resolved Captcha to the API
    cupomApi.postCupom(captcha).success(result =>{
      //Return the result of first register
      $scope.result = result;

      //Reload Page
      $window.location.reload();
    });
  }

  //Register Chave with Captcha
  $scope.registerChave = function(captcha){

    //Send the Resolved Captcha to the API
    cupomApi.postChave(captcha).success(result =>{

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

  //Cupom or Chave
  $scope.cupom = true;
});
