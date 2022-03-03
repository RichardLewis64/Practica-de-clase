function Fecha ()
 {
 
     let freday = new Date();
      var diaSemana = freday.getDay();
      var dia = freday.getDate();
      var mes = freday.getMonth();
      var year =freday.getFullYear();
 
      let DiaSemana = document.getElementById('fecha'+freday);
      document.write(Fecha)
       let Dia = document.getElementById('day');
       document.write(day)
       let Mes = document.getElementById('mes');
       document.write(mes)
       let Year = document.getElementById('Año');
       document.write(Año)
    
      /* let dia=Fecha.getDay();
       let mes=Fecha.getMonth();
       let year=Fecha.getFullYear();

         console.log("dia : "+dia);
         console.log("mes : "+Mes);
         console.log("year : "+Año);*/
        

             let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
             DiaSemana = semana[diaSemana];
             Dia = dia;  
             let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Juio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
             Mes = meses[mes];
             let = Año = [2022]
             Year = year; 
             let resultado= DiaSemana+" "+Dia+" del "+Mes+" "+" del "+ Year;
    
      document.getElementById('mostrarfecha').value= resultado;
 
 }