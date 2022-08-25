let Numero  = prompt("Ingrese el numero que desea analizar");
let Respuesta = "El numero ingresado es primo" 
for (let i = 2; i<= Numero ; i++){
    if (Numero%i==0 && i!= Numero){
        Respuesta = "El numero ingresado no es primo"
        break;
    }
}
console.log(Respuesta);
alert(Respuesta);