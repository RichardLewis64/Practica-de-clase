/*function Fecha ()
 {*/
 
     let freday = new Date();
      var diaSemana = freday.getDay();
      var day = freday.getDate();
      var mes = freday.getMonth();
      var Año =freday.getFullYear();
 
     // let DiaSemana = document.getElementById('fecha'+freday);
     // document.write(freday)
       //let Dia = document.getElementById('day');
       //document.write(day)
       //let Mes = document.getElementById('mes');
       //document.write(mes)
       //let Year = document.getElementById('Año');
       //document.write(Año)
    
      /* let dia=Fecha.getDay();
       let mes=Fecha.getMonth();
       let year=Fecha.getFullYear();

         console.log("dia : "+dia);
         console.log("mes : "+Mes);
         console.log("year : "+Año);*/
        

             let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
             let DiaSemana = semana[diaSemana];
            let Dia = day;  
             let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Juio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
             let Mes = meses[mes];
             let = Año = [2022]
             let Year = Año; 
             let resultado= DiaSemana+" "+Dia+" del "+Mes+" "+" del "+ Year;

    document.write(resultado);
     // document.getElementById('fecha').value= resultado;
 
// }