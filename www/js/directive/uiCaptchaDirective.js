//captcha mask directive
//Ex: A9A9

//Creates new Directive in "botapp" module
angular.module("botapp").directive("uiCaptcha",function(){
  return{
    //Requires the ngModel Directive
    require: "ngModel",

    link: function(scope, element, attrs, ctrl){
      //Function to format the captcha
      var _formatCaptcha = function(captcha){

        //if empty return empty
        if(!captcha) return captcha;

        //live only numbers
        captcha = captcha.replace(/[^a-z0-9]+/g,"");

        //limit length to 4 digits
        if(captcha.length>4){
          captcha = captcha.substring(0,4);
        };

        //return formated captcha
        return captcha;
      };

      //When a key is pressed do
      element.bind("keyup", function(){
        //change the value to the new formated value
        ctrl.$setViewValue(_formatCaptcha(ctrl.$viewValue));
        //render the formated value
        ctrl.$render();
      });
    },
  };
});
