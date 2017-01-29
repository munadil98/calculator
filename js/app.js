var	i=-1,
	j=[],
	result=[],
	k=-1,
	operator=[];


$("#n0").click(function(){
	i++;
	j[i]=0; 

	if(operator[k]==="div"){
		result[i]=result[i-1]/j[i];
	} else if(operator[k]==="multiply"){
		result[i]=result[i-1]*j[i];
	} else if(operator[k]==="plus"){
		result[i]=result[i-1]+j[i];
	} else if(operator[k]==="minus"){
		result[i]=result[i-1]-j[i];
	}


		if($("h3.digit1").text()===""){
		$("h3.digit1").text("0");
		result[0]=j[0];
		} else if($("h3.digit2").text()===""){
			$("h3.digit2").text("0");
		}else if($("h3.digit3").text()===""){
			$("h3.digit3").text("0");
		}else if($("h3.digit4").text()===""){
			$("h3.digit4").text("0");
		}else if($("h3.digit5").text()===""){
			$("h3.digit5").text("0");
		}else if($("h3.digit6").text()===""){
			$("h3.digit6").text("0");
		}else if($("h3.digit7").text()===""){
			$("h3.digit7").text("0");
		}else if($("h3.digit8").text()===""){
			$("h3.digit8").text("0");
		}else if($("h3.digit9").text()===""){
			$("h3.digit9").text("0");
		}else if($("h3.digit10").text()===""){
			$("h3.digit10").text("0");
		}

});

$("#n1").click(function(){
	i++;
	j[i]=1;

	if(operator[k]==="div"){
		result[i]=result[i-1]/j[i];
	} else if(operator[k]==="multiply"){
		result[i]=result[i-1]*j[i];
	} else if(operator[k]==="plus"){
		result[i]=result[i-1]+j[i];
	} else if(operator[k]==="minus"){
		result[i]=result[i-1]-j[i];
	}

	if($("h3.digit1").text()===""){
		$("h3.digit1").text("1");
		result[0]=j[0];
		} else if($("h3.digit2").text()===""){
			$("h3.digit2").text("1");
		}else if($("h3.digit3").text()===""){
			$("h3.digit3").text("1");
		}else if($("h3.digit4").text()===""){
			$("h3.digit4").text("1");
		}else if($("h3.digit5").text()===""){
			$("h3.digit5").text("1");
		}else if($("h3.digit6").text()===""){
			$("h3.digit6").text("1");
		}else if($("h3.digit7").text()===""){
			$("h3.digit7").text("1");
		}else if($("h3.digit8").text()===""){
			$("h3.digit8").text("1");
		}else if($("h3.digit9").text()===""){
			$("h3.digit9").text("1");
		}else if($("h3.digit10").text()===""){
			$("h3.digit10").text("1");
		}
});

$("#n2").click(function(){
	i++;
	j[i]=2;	

		if(operator[k]==="div"){
		result[i]=result[i-1]/j[i];
	} else if(operator[k]==="multiply"){
		result[i]=result[i-1]*j[i];
	} else if(operator[k]==="plus"){
		result[i]=result[i-1]+j[i];
	} else if(operator[k]==="minus"){
		result[i]=result[i-1]-j[i];
	}

	if($("h3.digit1").text()===""){
		$("h3.digit1").text("2");
		result[0]=j[0];
		} else if($("h3.digit2").text()===""){
			$("h3.digit2").text("2");
		}else if($("h3.digit3").text()===""){
			$("h3.digit3").text("2");
		}else if($("h3.digit4").text()===""){
			$("h3.digit4").text("2");
		}else if($("h3.digit5").text()===""){
			$("h3.digit5").text("2");
		}else if($("h3.digit6").text()===""){
			$("h3.digit6").text("2");
		}else if($("h3.digit7").text()===""){
			$("h3.digit7").text("2");
		}else if($("h3.digit8").text()===""){
			$("h3.digit8").text("2");
		}else if($("h3.digit9").text()===""){
			$("h3.digit9").text("2");
		}else if($("h3.digit10").text()===""){
			$("h3.digit10").text("2");
		}
});

$("#n3").click(function(){
	i++;
	j[i]=3;

	if(operator[k]==="div"){
		result[i]=result[i-1]/j[i];
	} else if(operator[k]==="multiply"){
		result[i]=result[i-1]*j[i];
	} else if(operator[k]==="plus"){
		result[i]=result[i-1]+j[i];
	} else if(operator[k]==="minus"){
		result[i]=result[i-1]-j[i];
	}

	if($("h3.digit1").text()===""){
		$("h3.digit1").text("3");
		result[0]=j[0];
		} else if($("h3.digit2").text()===""){
			$("h3.digit2").text("3");
		}else if($("h3.digit3").text()===""){
			$("h3.digit3").text("3");
		}else if($("h3.digit4").text()===""){
			$("h3.digit4").text("3");
		}else if($("h3.digit5").text()===""){
			$("h3.digit5").text("3");
		}else if($("h3.digit6").text()===""){
			$("h3.digit6").text("3");
		}else if($("h3.digit7").text()===""){
			$("h3.digit7").text("3");
		}else if($("h3.digit8").text()===""){
			$("h3.digit8").text("3");
		}else if($("h3.digit9").text()===""){
			$("h3.digit9").text("3");
		}else if($("h3.digit10").text()===""){
			$("h3.digit10").text("3");
		}
});

$("#n4").click(function(){
	i++;
	j[i]=4;

	if(operator[k]==="div"){
		result[i]=result[i-1]/j[i];
	} else if(operator[k]==="multiply"){
		result[i]=result[i-1]*j[i];
	} else if(operator[k]==="plus"){
		result[i]=result[i-1]+j[i];
	} else if(operator[k]==="minus"){
		result[i]=result[i-1]-j[i];
	}

	if($("h3.digit1").text()===""){
		$("h3.digit1").text("4");
		result[0]=j[0];
		} else if($("h3.digit2").text()===""){
			$("h3.digit2").text("4");
		}else if($("h3.digit3").text()===""){
			$("h3.digit3").text("4");
		}else if($("h3.digit4").text()===""){
			$("h3.digit4").text("4");
		}else if($("h3.digit5").text()===""){
			$("h3.digit5").text("4");
		}else if($("h3.digit6").text()===""){
			$("h3.digit6").text("4");
		}else if($("h3.digit7").text()===""){
			$("h3.digit7").text("4");
		}else if($("h3.digit8").text()===""){
			$("h3.digit8").text("4");
		}else if($("h3.digit9").text()===""){
			$("h3.digit9").text("4");
		}else if($("h3.digit10").text()===""){
			$("h3.digit10").text("4");
		}
});

$("#n5").click(function(){
	i++;
	j[i]=5;

	if(operator[k]==="div"){
		result[i]=result[i-1]/j[i];
	} else if(operator[k]==="multiply"){
		result[i]=result[i-1]*j[i];
	} else if(operator[k]==="plus"){
		result[i]=result[i-1]+j[i];
	} else if(operator[k]==="minus"){
		result[i]=result[i-1]-j[i];
	}

	if($("h3.digit1").text()===""){
		$("h3.digit1").text("5");
		result[0]=j[0];
		} else if($("h3.digit2").text()===""){
			$("h3.digit2").text("5");
		}else if($("h3.digit3").text()===""){
			$("h3.digit3").text("5");
		}else if($("h3.digit4").text()===""){
			$("h3.digit4").text("5");
		}else if($("h3.digit5").text()===""){
			$("h3.digit5").text("5");
		}else if($("h3.digit6").text()===""){
			$("h3.digit6").text("5");
		}else if($("h3.digit7").text()===""){
			$("h3.digit7").text("5");
		}else if($("h3.digit8").text()===""){
			$("h3.digit8").text("5");
		}else if($("h3.digit9").text()===""){
			$("h3.digit9").text("5");
		}else if($("h3.digit10").text()===""){
			$("h3.digit10").text("5");
		}
});

$("#n6").click(function(){
	i++;
	j[i]=6;

	if(operator[k]==="div"){
		result[i]=result[i-1]/j[i];
	} else if(operator[k]==="multiply"){
		result[i]=result[i-1]*j[i];
	} else if(operator[k]==="plus"){
		result[i]=result[i-1]+j[i];
	} else if(operator[k]==="minus"){
		result[i]=result[i-1]-j[i];
	}

	if($("h3.digit1").text()===""){
		$("h3.digit1").text("6");
		result[0]=j[0];
		} else if($("h3.digit2").text()===""){
			$("h3.digit2").text("6");
		}else if($("h3.digit3").text()===""){
			$("h3.digit3").text("6");
		}else if($("h3.digit4").text()===""){
			$("h3.digit4").text("6");
		}else if($("h3.digit5").text()===""){
			$("h3.digit5").text("6");
		}else if($("h3.digit6").text()===""){
			$("h3.digit6").text("6");
		}else if($("h3.digit7").text()===""){
			$("h3.digit7").text("6");
		}else if($("h3.digit8").text()===""){
			$("h3.digit8").text("6");
		}else if($("h3.digit9").text()===""){
			$("h3.digit9").text("6");
		}else if($("h3.digit10").text()===""){
			$("h3.digit10").text("6");
		}
});

$("#n7").click(function(){
	i++;
	j[i]=7;

	if(operator[k]==="div"){
		result[i]=result[i-1]/j[i];
	} else if(operator[k]==="multiply"){
		result[i]=result[i-1]*j[i];
	} else if(operator[k]==="plus"){
		result[i]=result[i-1]+j[i];
	} else if(operator[k]==="minus"){
		result[i]=result[i-1]-j[i];
	}

	if($("h3.digit1").text()===""){
		$("h3.digit1").text("7");
		result[0]=j[0];
		} else if($("h3.digit2").text()===""){
			$("h3.digit2").text("7");
		}else if($("h3.digit3").text()===""){
			$("h3.digit3").text("7");
		}else if($("h3.digit4").text()===""){
			$("h3.digit4").text("7");
		}else if($("h3.digit5").text()===""){
			$("h3.digit5").text("7");
		}else if($("h3.digit6").text()===""){
			$("h3.digit6").text("7");
		}else if($("h3.digit7").text()===""){
			$("h3.digit7").text("7");
		}else if($("h3.digit8").text()===""){
			$("h3.digit8").text("7");
		}else if($("h3.digit9").text()===""){
			$("h3.digit9").text("7");
		}else if($("h3.digit10").text()===""){
			$("h3.digit10").text("7");
		}
});

$("#n8").click(function(){
	i++;
	j[i]=8;

	if(operator[k]==="div"){
		result[i]=result[i-1]/j[i];
	} else if(operator[k]==="multiply"){
		result[i]=result[i-1]*j[i];
	} else if(operator[k]==="plus"){
		result[i]=result[i-1]+j[i];
	} else if(operator[k]==="minus"){
		result[i]=result[i-1]-j[i];
	}

	if($("h3.digit1").text()===""){
		$("h3.digit1").text("8");
		result[0]=j[0];
		} else if($("h3.digit2").text()===""){
			$("h3.digit2").text("8");
		}else if($("h3.digit3").text()===""){
			$("h3.digit3").text("8");
		}else if($("h3.digit4").text()===""){
			$("h3.digit4").text("8");
		}else if($("h3.digit5").text()===""){
			$("h3.digit5").text("8");
		}else if($("h3.digit6").text()===""){
			$("h3.digit6").text("8");
		}else if($("h3.digit7").text()===""){
			$("h3.digit7").text("8");
		}else if($("h3.digit8").text()===""){
			$("h3.digit8").text("8");
		}else if($("h3.digit9").text()===""){
			$("h3.digit9").text("8");
		}else if($("h3.digit10").text()===""){
			$("h3.digit10").text("8");
		}
});

$("#n9").click(function(){
	i++;
	j[i]=9;

	if(operator[k]==="div"){
		result[i]=result[i-1]/j[i];
	} else if(operator[k]==="multiply"){
		result[i]=result[i-1]*j[i];
	} else if(operator[k]==="plus"){
		result[i]=result[i-1]+j[i];
	} else if(operator[k]==="minus"){
		result[i]=result[i-1]-j[i];
	}

	if($("h3.digit1").text()===""){
		$("h3.digit1").text("9");
		result[0]=j[0];
		} else if($("h3.digit2").text()===""){
			$("h3.digit2").text("9");
		}else if($("h3.digit3").text()===""){
			$("h3.digit3").text("9");
		}else if($("h3.digit4").text()===""){
			$("h3.digit4").text("9");
		}else if($("h3.digit5").text()===""){
			$("h3.digit5").text("9");
		}else if($("h3.digit6").text()===""){
			$("h3.digit6").text("9");
		}else if($("h3.digit7").text()===""){
			$("h3.digit7").text("9");
		}else if($("h3.digit8").text()===""){
			$("h3.digit8").text("9");
		}else if($("h3.digit9").text()===""){
			$("h3.digit9").text("9");
		}else if($("h3.digit10").text()===""){
			$("h3.digit10").text("9");
		}
});

$("#ce").click(function(){
	i=-1;
	j=[];
	k=-1;
	operator=[];
	result=[];

	$("h3.digit1").empty();
	$("h3.operator1").empty();
	$("h3.digit2").empty();
	$("h3.operator2").empty();
	$("h3.digit3").empty();	
	$("h3.operator3").empty();
	$("h3.digit4").empty();
	$("h3.operator4").empty();
	$("h3.digit5").empty();
	$("h3.operator5").empty();
	$("h3.digit6").empty();
	$("h3.operator6").empty();
	$("h3.digit7").empty();
	$("h3.operator7").empty();
	$("h3.digit8").empty();
	$("h3.operator8").empty();
	$("h3.digit9").empty();
	$("h3.operator9").empty();
	$("h3.digit10").empty();		

	$("h3.equal").empty();
	$("h3#result").empty();
});

$("#c").click(function(){

		if($("h3.digit10").text()!==""){
		$("h3.digit10").empty();
		} else if($("h3.operator9").text()){
			$("h3.operator9").empty();
			} else if($("h3.digit9").text()){
			$("h3.digit9").empty();
			} else if($("h3.operator8").text()){
			$("h3.operator8").empty();
			} else if($("h3.digit8").text()){
			$("h3.digit8").empty();
			} else if($("h3.operator7").text()){
			$("h3.operator7").empty();
			} else if($("h3.digit7").text()){
			$("h3.digit7").empty();
			} else if($("h3.operator6").text()){
			$("h3.operator6").empty();
			} else if($("h3.digit6").text()){
			$("h3.digit6").empty();
			} else if($("h3.operator5").text()){
			$("h3.operator5").empty();
			} else if($("h3.digit5").text()){
			$("h3.digit5").empty();
			} else if($("h3.operator4").text()){
			$("h3.operator4").empty();
			} else if($("h3.digit4").text()){
			$("h3.digit4").empty();
			} else if($("h3.operator3").text()){
			$("h3.operator3").empty();
			} else if($("h3.digit3").text()){
			$("h3.digit3").empty();
			} else if($("h3.operator2").text()){
			$("h3.operator2").empty();
			} else if($("h3.digit2").text()){
			$("h3.digit2").empty();
			} else if($("h3.operator1").text()){
			$("h3.operator1").empty();
			} else if($("h3.digit1").text()){
			$("h3.digit1").empty();
			}		

});

$("#del").click(function(){

	
	if($("h3.digit10").text()!==""){
		$("h3.digit10").empty();
		} else if($("h3.operator9").text()){
			$("h3.operator9").empty();
			} else if($("h3.digit9").text()){
			$("h3.digit9").empty();
			} else if($("h3.operator8").text()){
			$("h3.operator8").empty();
			} else if($("h3.digit8").text()){
			$("h3.digit8").empty();
			} else if($("h3.operator7").text()){
			$("h3.operator7").empty();
			} else if($("h3.digit7").text()){
			$("h3.digit7").empty();
			} else if($("h3.operator6").text()){
			$("h3.operator6").empty();
			} else if($("h3.digit6").text()){
			$("h3.digit6").empty();
			} else if($("h3.operator5").text()){
			$("h3.operator5").empty();
			} else if($("h3.digit5").text()){
			$("h3.digit5").empty();
			} else if($("h3.operator4").text()){
			$("h3.operator4").empty();
			} else if($("h3.digit4").text()){
			$("h3.digit4").empty();
			} else if($("h3.operator3").text()){
			$("h3.operator3").empty();
			} else if($("h3.digit3").text()){
			$("h3.digit3").empty();
			} else if($("h3.operator2").text()){
			$("h3.operator2").empty();
			} else if($("h3.digit2").text()){
			$("h3.digit2").empty();
			} else if($("h3.operator1").text()){
			$("h3.operator1").empty();
			} else if($("h3.digit1").text()){
			$("h3.digit1").empty();
			}	



});

$("#div").click(function(){
	k++;
	operator[k]="div";
	// $("h3.operator1").text("/");

		if($("h3.operator1").text()===""){
		$("h3.operator1").text("/");
		} else if($("h3.operator2").text()===""){
			$("h3.operator2").text("/");
		}else if($("h3.operator3").text()===""){
			$("h3.operator3").text("/");
		}else if($("h3.operator4").text()===""){
			$("h3.operator4").text("/");
		}else if($("h3.operator5").text()===""){
			$("h3.operator5").text("/");
		}else if($("h3.operator6").text()===""){
			$("h3.operator6").text("/");
		}else if($("h3.operator7").text()===""){
			$("h3.operator7").text("/");
		}else if($("h3.operator8").text()===""){
			$("h3.operator8").text("/");
		}else if($("h3.operator9").text()===""){
			$("h3.operator9").text("/");
		}
});

$("#multiply").click(function(){

	k++;
	operator[k]="multiply";	

		if($("h3.operator1").text()===""){
		$("h3.operator1").text("*");
		} else if($("h3.operator2").text()===""){
			$("h3.operator2").text("*");
		}else if($("h3.operator3").text()===""){
			$("h3.operator3").text("*");
		}else if($("h3.operator4").text()===""){
			$("h3.operator4").text("*");
		}else if($("h3.operator5").text()===""){
			$("h3.operator5").text("*");
		}else if($("h3.operator6").text()===""){
			$("h3.operator6").text("*");
		}else if($("h3.operator7").text()===""){
			$("h3.operator7").text("*");
		}else if($("h3.operator8").text()===""){
			$("h3.operator8").text("*");
		}else if($("h3.operator9").text()===""){
			$("h3.operator9").text("*");
		}
});

$("#minus").click(function(){
	k++;
	operator[k]="minus";

			if($("h3.operator1").text()===""){
		$("h3.operator1").text("-");
		} else if($("h3.operator2").text()===""){
			$("h3.operator2").text("-");
		}else if($("h3.operator3").text()===""){
			$("h3.operator3").text("-");
		}else if($("h3.operator4").text()===""){
			$("h3.operator4").text("-");
		}else if($("h3.operator5").text()===""){
			$("h3.operator5").text("-");
		}else if($("h3.operator6").text()===""){
			$("h3.operator6").text("-");
		}else if($("h3.operator7").text()===""){
			$("h3.operator7").text("-");
		}else if($("h3.operator8").text()===""){
			$("h3.operator8").text("-");
		}else if($("h3.operator9").text()===""){
			$("h3.operator9").text("-");
		}
});

$("#plus").click(function(){

	k++;
	operator[k]="plus";

			if($("h3.operator1").text()===""){
		$("h3.operator1").text("+");
		} else if($("h3.operator2").text()===""){
			$("h3.operator2").text("+");
		}else if($("h3.operator3").text()===""){
			$("h3.operator3").text("+");
		}else if($("h3.operator4").text()===""){
			$("h3.operator4").text("+");
		}else if($("h3.operator5").text()===""){
			$("h3.operator5").text("+");
		}else if($("h3.operator6").text()===""){
			$("h3.operator6").text("+");
		}else if($("h3.operator7").text()===""){
			$("h3.operator7").text("+");
		}else if($("h3.operator8").text()===""){
			$("h3.operator8").text("+");
		}else if($("h3.operator9").text()===""){
			$("h3.operator9").text("+");
		}
});

$("#equal").click(function(){

	$("h3.equal").text("=");

	
	
	// $("h3.result").parseInt(n1);
	document.getElementById("result").innerHTML = result[i];
	// $("h3.result").innerHTML=sum;
});

// $("#dot").click(function(){

// 	var dot = $("#dot").val();

// 	$("h3.digit1").text(".");
// });

// $("#pm").click(function(){

// 	var pm = $("#pm").val();

// 	$("h3.operator1").text("+-");
// });