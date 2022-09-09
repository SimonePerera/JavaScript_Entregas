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
let existe;
let consulta = prompt("desea crear una entrada ? En caso afirmativo digite S, de lo contrario digite cualquier caracter");
while (consulta.toUpperCase() == "S") { 
    F1 = prompt("Ingrese fecha de hoy");
    T1 = prompt("Ingrese el titulo de la entrada (Recuerde que este NO puede repetirse)");
    existe = Diario.some( (E) => E.titulo = T1);
    if (existe == true ){
        alert("ya existe una entrada con este titulo ");
    } else {
    Tx1 = prompt("Ingrese el texto correspondiente a la entrada");
    const Entrada1 = new Entrada(F1,T1,Tx1);
    Diario.push(Entrada1);
    alert(Entrada1.caracteres + " caracteres ingresados");}
    consulta = prompt("desea crear una nueva entrada ? En caso afirmativo digite S, de lo contrario cualquier caracter");
}  
    let consulta2 = prompt("Desea saber cuantas entradas fueron realizadas ? digite S en caso afirmativo, de lo contrario cualquier caracter ")
    if (consulta2.toUpperCase() == "S"){
        alert(Diario.length + " entradas fueron realizadas");
    }
    if (confirm("Desea er en la consola sus entradas ?")){
        Diario.forEach( (Entrada) => {
            console.log (Entrada.titulo)
        });
    }


