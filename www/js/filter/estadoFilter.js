//Estado filter
//Estado Number --> Estado Text

angular.module("botapp").filter("estado", function () {
	return function (input) {

    //Return empty when empty
    if(!input) return input;

    //Turn Number to Text
		switch(input){
      case "0":  return "Não Cadastrado";

      case "1": return "Cadastro Sucesso";

      case "2": return "Cadastro Erro";

      case "3": return "Captcha Erro";
    }
	};
});
