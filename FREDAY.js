function Fecha ()
 {
 
     let freday = new Date();
      var diaSemana = freday.getDay();
      var dia = freday.getDate();
      var mes = freday.getMonth();
      var year =freday.getFullYear();
 
      let DiaSemana = document.getElementById('mostrarfecha');
             let Dia = document.getElementById('mostrarfecha');
             let Mes = document.getElementById('mostrarfecha');
             let Year = document.getElementById('mostrarfecha');
    
             let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
             DiaSemana = semana[diaSemana];
             Dia = dia;  
             let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Juio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
             Mes = meses[mes];
             Year = year; 
             let resultado= DiaSemana+" "+Dia+" del "+Mes+" "+" del "+ Year;
    
      document.getElementById('mostrarfecha').value= resultado;
 
 }