//CONSTRUCTOR DE KANJIS

function Kanji (id, nombre, heisig, numTrazos, img, componentes, categorias, historia) {
  this.id = id;
  this.nombre = nombre;
  this.heisig = heisig;
  this.numTrazos = numTrazos;
  this.img = img;
  this.componentes = componentes;
  this.categorias = categorias;
  this.historia = historia;
}
let arrayKanji = [];
let agua = new Kanji("1", "Agua", "100", "4", "mizu.png", ["gota", "bastón"], ["naturaleza", "cosas"], "Cuando lanzas un bastón al agua, salpican gotas");
arrayKanji.push(agua);
let uno = new Kanji("0001", "Uno", "1", "1", "uno.png", ["suelo", "techo"], ["números"], "Como un uno en números romanos, pero horizontal");
arrayKanji.push(uno);
let dos = new Kanji("0002", "Dos", "2", "2", "dos.png", ["uno"], ["números"], "Como un dos en números romanos, pero horizontal");
arrayKanji.push(dos);
let tres = new Kanji("0003", "Tres", "3", "3", "tres.png", ["uno"], ["números"], "Como un tres en números romanos, pero horizontal");
arrayKanji.push(tres);
let cuatro = new Kanji("0004", "Cuatro", "4", "5", "cuatro.png", ["boca", "piernas"], ["números"], "Si te dan una patada en la boca con las piernas te quedan sólo cuatro dientes");
arrayKanji.push(cuatro);
let cinco = new Kanji("0005", "Cinco", "5", "4", "cinco.png", ["pictograma"], ["números"], "Como un 35 de un reloj digital");
arrayKanji.push(cinco);
let seis = new Kanji("0006", "Seis", "6", "4", "seis.png", ["chistera", "patas"], ["números"], "Un mago tiene dentro de su chistera seis conejos, a los que sólo se les ven las patas");
arrayKanji.push(seis);
let siete = new Kanji("0007", "Siete", "7", "2", "siete.png", ["pictograma"], ["números"], "Es como un siete girado");
arrayKanji.push(siete);
let ocho = new Kanji("0008", "Ocho", "8", "2", "ocho.png", ["pictograma"], ["números"], "En Japón hay ocho montañas que tienen 3100 metros");
arrayKanji.push(ocho);
let nueve = new Kanji("0009", "Nueve", "9", "2", "nueve.png", ["bate de baseball"], ["números"], "En cada equipo de baseball hay ocho jugadores");
arrayKanji.push(nueve);

//VARIABLES

let arrayKanjiComponente = [];
let arrayKanjiFamilia = [];
let contador = 0;
let isAleatorio = false;
let isComponente = false;
let isFamilia = false;
let randomKanji;

//KANJIS ALEATORIOS

function aleatorio() {
  randomKanji = Math.floor(Math.random() * arrayKanji.length );
  isAleatorio = true;
  isComponente = false;
  isFamilia = false;
  arrayKanjiComponente = [];
  arrayKanjiFamilia = [];
  document.getElementById("nombreKanji").innerHTML = arrayKanji[randomKanji].nombre;
  document.getElementById("imagenKanji").src = "interrogacion.png";
  document.getElementById("pista").innerHTML = " ";
  document.getElementById("trazosKanji").innerHTML = "画";
  document.getElementById("heisigKanji").innerHTML = "KPR";
  document.getElementById("siguiente").innerHTML = "";
}

//KANJI POR COMPONENTES

function porComponente (palabra) {
  isAleatorio = false;
  isComponente = true;
  isFamilia = false;
  arrayKanjiFamilia = [];
  for(i=0;i<arrayKanji.length;i++){
    for(j=0;j<arrayKanji[i].componentes.length;j++){
      if(arrayKanji[i].componentes[j] == palabra){
        arrayKanjiComponente.push(arrayKanji[i]);
      }
    }
  }
  document.getElementById("nombreKanji").innerHTML = arrayKanjiComponente[contador].nombre;
  document.getElementById("imagenKanji").src = "interrogacion.png";
  document.getElementById("pista").innerHTML = " ";
  document.getElementById("trazosKanji").innerHTML = "画";
  document.getElementById("heisigKanji").innerHTML = "KPR";
  document.getElementById("siguiente").innerHTML = "";
}

//KANJI POR FAMILIA
function porFamilia (palabra) {
  isAleatorio = false;
  isComponente = false;
  isFamilia = true;
  arrayKanjiComponente = [];
  for(i=0;i<arrayKanji.length;i++){
    for(j=0;j<arrayKanji[i].categorias.length;j++){
      if(arrayKanji[i].categorias[j] == palabra){
        arrayKanjiFamilia.push(arrayKanji[i]);
      }
    }
  }
  document.getElementById("nombreKanji").innerHTML = arrayKanjiFamilia[contador].nombre;
  document.getElementById("imagenKanji").src = "interrogacion.png";
  document.getElementById("pista").innerHTML = " ";
  document.getElementById("trazosKanji").innerHTML = "画";
  document.getElementById("heisigKanji").innerHTML = "KPR";
  document.getElementById("siguiente").innerHTML = "";
}


//VER KANJI

function verKanji() {
  if (isAleatorio) {
    document.getElementById("trazosKanji").innerHTML = arrayKanji[randomKanji].numTrazos;
    document.getElementById("heisigKanji").innerHTML = arrayKanji[randomKanji].heisig;
    document.getElementById("imagenKanji").src = arrayKanji[randomKanji].img;
    verSiguiente();
  }
  if (isComponente) {
    document.getElementById("trazosKanji").innerHTML = arrayKanjiComponente[contador].numTrazos;
    document.getElementById("heisigKanji").innerHTML = arrayKanjiComponente[contador].heisig;
    document.getElementById("imagenKanji").src = arrayKanjiComponente[contador].img;
    verSiguiente();
  }
  if(isFamilia) {
    document.getElementById("trazosKanji").innerHTML = arrayKanjiFamilia[contador].numTrazos;
    document.getElementById("heisigKanji").innerHTML = arrayKanjiFamilia[contador].heisig;
    document.getElementById("imagenKanji").src = arrayKanjiFamilia[contador].img;
    verSiguiente();
  }
}

//VER PISTA

function verPista() {
  if (isAleatorio) {
    document.getElementById("pista").innerHTML = arrayKanji[randomKanji].historia;
  }
  if (isComponente) {
    document.getElementById("pista").innerHTML = arrayKanjiComponente[contador].historia;
  }
  if (isFamilia) {
    document.getElementById("pista").innerHTML = arrayKanjiFamilia[contador].historia;

  }
  
}

// VER BOTÓN DE SIGUIENTE KANJI

function verSiguiente() {
  document.getElementById("siguiente").innerHTML = '<button type="button" onclick="siguiente()" class="btn btn-dark btn-lg btn-block ">Siguiente</button>';
}

//SUIGUIENTE KANJI

function siguiente() {
  if (isAleatorio) {aleatorio()}
  if (isComponente){
    contador += 1;
    porComponente();
  }
  if (isFamilia) {
    contador += 1;
    porFamilia();
  }
}