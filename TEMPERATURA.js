
function ConvertirGradosCelciusFahrenheit(Celcius){
var resultado= Celcius* 9 / 5.0 + 32;
return resultado;
}

function ConvertirGradosFahrenheitACelcius(fahrenheit){
    var resultado= (fahrenheit-32)* 5 / 9.0 ;
    return resultado;
    }

let Celcius=32;

let resultado= ConvertirGradosCelciusFahrenheit(Celcius);
console.log('${Celcius}ºC=${resultado}ºF');
console.log();

let fahrenheit=resultado;
let resultado= ConvertirGradosFahrenheitACelcius(fahrenheit);
console.log('${fahrenheit}ºC=${resultado}ºF');
console.log();



    function Celcius(Num){
        for (var i = 1; i <= Num; i++) {
   
    
	if (i==-10,i==-11,i==-12,i==-13,i==-14, i==-15 )
	{
        document.writeln(i+"FRIO"+"<br>");
    }

  else
	if (i==16,i==17,i==18,i==19,i==20,i==21,i==22,i==23,i==24,i==25)
	{
        document.writeln(i+"TEMPLADO"+"<br>");
    }
    else
if(i==26,i==27,i==28,i==29,i==30,i==31,i==32,i==33,i==34,i==35,i==36,i==37,i==38,i==39,i==40)
{
    document.writeln(i+"CALOR"+"<br>");
}
else
	document.write(i + '<br>');
}
return num
    }

