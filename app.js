let Numero  = Number(prompt("Ingrese el numero que desea analizar"));
let Respuesta = "El numero ingresado es primo" 
function Factorial(Entrada){
    let salida =0;
    while (Entrada>0) {
        salida = Entrada + salida;
        Entrada--;
    }
    console.log(salida);
    alert(salida)
};
for (let i = 2; i<= Numero ; i++){
    if (Numero%i==0 && i!= Numero){
        Respuesta = "El numero ingresado no es primo"
        break;
    }
}

console.log(Respuesta);
alert(Respuesta);

let Usuario =  prompt("Desea calcular la funcion factorial? responda con S/N")
  if(Usuario == "S"){
    Factorial(Numero);
  }


