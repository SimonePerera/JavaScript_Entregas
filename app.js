function Entrada(fecha,titulo,texto){
    this.fecha = fecha;
    this.titulo = titulo;
    this.texto = texto;
    this.caracteres = texto.length ;
}
const Diario = [];
let F1 ;
let T1 ;
let Tx1 ;

let consulta = prompt("desea crear una entrada ? En caso afirmativo digite S, de lo contrario digite cualquier caracter");
while (consulta.toUpperCase() == "S") { 
    F1 = prompt("Ingrese fecha de hoy");
    T1 = prompt("Ingrese el titulo de la entrada");
    Tx1 = prompt("Ingrese el texto correspondiente a la etrada");
    const Entrada1 = new Entrada(F1,T1,Tx1);
    Diario.push(Entrada1);
    alert(Entrada1.caracteres + " caracteres ingresados")
    consulta = prompt("desea crear una nueva entrada ? En caso afirmativo digite S, de lo contrario cualquier caracter");
}
    console.log(Diario);    
    let consulta2 = prompt("Desea saber cuantas entradas fueron realizadas ? digite S en caso afirmativo, de lo contrario cualquier caracter ")
    if (consulta2.toUpperCase() == "S"){
        alert(Diario.length + " entradas fueron realizadas");
    }
