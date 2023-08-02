//MAth floor para redondear hacia abajo, para que existan mas posibilidades de CERO y CIEN
let numeroAzar=Math.floor(Math.random()*100)+1

let numeroEntrada=document.getElementById('numeroEntrada')

let mensaje= document.getElementById('mensaje')

let intento=document.getElementById('intento')
let intentos= 0


function revisarResultado(){
    intentos ++
    intento.textContent=intentos
   let numeroIngresado=parseInt(numeroEntrada.value)

   if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
       mensaje.textContent='Ingresa un Numero entre 1 y 100'
       mensaje.style.color='red';
       return
   }
   if(numeroIngresado === numeroAzar){
       mensaje.textContent='!!!!  FELICIDADES ¡¡¡¡¡¡';
       intento.style.color='red'
       mensaje.style.color='green';
       numeroEntrada.disabled=true;
   }else if( numeroIngresado < numeroAzar){
       mensaje.textContent = 'Ingresa un numero MAYOR'
       mensaje.style.color='purple';  
   }else {
    mensaje.textContent = 'Ingresa un numero MENOR'
    mensaje.style.color='purple';
   }

   
}