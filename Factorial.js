function Factorial(num)
{
    if(num==0){
       
        return 1;

    } else {
        return num*Factorial(num-1);
    }
}
console.log(Factorial(5));

/*function Factorial()
{

var num =parseFloat(prompt("INGRESE UN NUMERO"));
var total=1;
for (var i=1;i<=num;i++){
total=total*i
}
}
alert("EL FACTORIAL DEL NUMERO"+num+"ES: "+total)*/


/*
for(i=0;i<=num;i++){

    total=total*i;
    }
    
    if(num=0){
           
           return 1;
    
       } else {
           return num*Factorial(num-1);
       }
      
    }
*/