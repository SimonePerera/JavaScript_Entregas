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
let entry = document.querySelector("#Realizar");
entry.onclick= () => {
    T1 = document.querySelector("#titulo").value;
    F1 = document.querySelector("#fecha").value ;
    Tx1 = document.querySelector("#Entr").value ;
    const Entrada1 = new Entrada(F1,T1,Tx1);
    Diario.push(Entrada1);
    console.log(T1);
    console.log(Diario[0]);
};

