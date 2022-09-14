function Entrada(id,fecha,titulo,texto){
    this.id=id
    this.fecha = fecha;
    this.titulo = titulo;
    this.texto = texto;
    this.caracteres = texto.length ;
}
const Diario = [];
let F1 ;
let T1 ;
let Tx1 ;
let Id=1;
let existe=false;
while (confirm("Desea crear una nueva entrada ?")) { 
    F1 = prompt("Ingrese fecha de hoy");
    T1 = prompt("Ingrese el titulo de la entrada (Recuerde que este NO puede repetirse)");
    existe = Diario.some( (E) => E.titulo == T1);
    if (existe == true ){
        alert("ya existe una entrada con este titulo ");
    } else {
    Tx1 = prompt("Ingrese el texto correspondiente a la entrada");
    const Entrada1 = new Entrada(Id,F1,T1,Tx1);
    Diario.push(Entrada1);
    Id=Id +1;
    alert(Entrada1.caracteres + " caracteres ingresados");}
    }  
if (confirm("Desea saber cuantas entradas fueron realizadas ? ")){
    alert(Diario.length + " entradas fueron realizadas");
}
if (confirm("Desea ver sus entradas en pantalla?")){
    for (Entrada of Diario) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3>${Entrada.id}</h3>
        <h4>${Entrada.titulo}</h4>
        <p>${Entrada.texto}</p>
        <p style="color:grey id = ${Entrada.id};">${Entrada.fecha}</p>
        <hr>
        `;
        document.body.appendChild(contenedor);
    }
}
if(confirm("Desea personalizar el titulo de su bitacora ?")){
    const Bita = (document.querySelector("h1").textContent = prompt("Ingrese el nombre de su bitacora"));
}