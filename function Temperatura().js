/*(function()
{
    alert('Hola');

}());*/

 // Ejercicio 1
 
 function Temperatura()
 {
     var numero1 = parseFloat(document.getElementById('Temper').value);
     if (numero1<15 ) {
          resultado = "Frio";
     } 
     else if (numero1>15 || numero1<25) {
         resultado = "Templado";
     } 
      if (numero1>=26) {
         resultado = "Calor";
     } 
     document.getElementById('result').value = resultado
 }
 
 
 // Ejercicio 2
 
 function factorial (){
     var factorial = 1;
  
         for (var i=1; i <= document.getElementById ('nume1').value; i++){
             factorial *= i;
         }
  
         document.getElementById ('resp').value = factorial;
     }