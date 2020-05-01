/*Máquina de Turing lógica tomando en cuenta las transiciones, estados y sus movimientos en cinta respectivamente
Version 1.0.0
*/

//Los String en Js son Inmutables, por esa razón se hace este subcódigo para reemplazarlos por una copia 
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}


function isEmpty(str) {
    return (!str || 0 === str.length);
}

let cuadro = document.getElementById ('cuadro');
let velocidad = 53;
let mTop = 0;
let mLeft =0;

function logica() {

var expresion= document.getElementById("entrada").value;

/*declaración de variables que operan en la máquina de turing y sus movimientos, n es el encargado de moverse
dentro del String*/
let n=1;
let estado=1;
r=0;
l=0;
sw=1;


//Variables de Movimiento
//Tamaño del String que se ingresó
var y=expresion.length;
mod=7;
//Ciclo que controla todo el movimiento y finaliza en el estado de aceptación//
  if(isEmpty(!expresion)){

    expresion='z'+expresion+'z';
        while(estado!=3){
                        //Controla el esta Q1 y sus movimientos//
                    while( estado==1){
                        
                        if(expresion.charAt(n)=="a"){
                               
                                document.getElementById('cuadro'+mod).innerHTML="<h1>a</h1>"; 
                                expresion=expresion.replaceAt(n, "a");
                                  moverIzquierda();
                                r++;
                                mod++;
                            }else{
                                if(expresion.charAt(n)=="b"){
                                    
                                    document.getElementById('cuadro'+mod).innerHTML="<h1>z</h1>"; 
                                    expresion=expresion.replaceAt(n, "a");
                                    moverIzquierda();
                                    r++;
                                    mod++;
                                    
                                }else{
                                    if(expresion.charAt(n)=="z"){
                                        
                                        expresion=expresion.replaceAt(n, "z");
                                        
                                      
                                            estado=2;
                                            l++;
                                            n--;
                                            
                                            sw=0;
                                            
                                    }
                                }
                            }
                            /*Como hemos restado n, para no tener un movimento de 2 a la derecha y uno a izquierda,
                            se establece un sw*/
                            if (sw==1){
                            n++;
                           
                            }
                            
                    }
                    moverDerecha();
                    sw=1;
                    //Controla el estado Q2 y sus movimientos*/
                    while(estado==2){

                    
                        if(expresion.charAt(n)=="a"){
                           
                            expresion=expresion.replaceAt(n, "a");
                            l++;
                            moverDerecha();
                            
                        }else{
                            if(expresion.charAt(n)=="z"){
                                
                                expresion=expresion.replaceAt(n,"a");
                                estado=3;
                                r++;
                                n++;
                                sw=0;
                                moverIzquierda();
                                
                            }
                        }
                        if(sw==1){
                        n--;
                        
                        }
                        }
                    }

/*console.log('Se movió a la izquierda :'+l);
console.log('Se movió a la derecha :'+r);
palabra=palabra.split('z').join('');
console.log('La palabra resultado es: '+palabra);
document.write('<h2>Se movió a la izquierda :' +l);
document.write('<h2>Se movió a la derecha   :' +r);
document.write('<h2>La palabra resultado es :'+palabra);
document.write('<h2>La posición donde finaliza es :'+n);
*/
    }else{
        alert("No puedes jugar si está vacía la expresión");
    }
}


function moverDerecha(){

    mLeft += velocidad;

    for (x=0; x<=21; x++){
    document.getElementById('cuadro'+x).style.transform='TranslateX('+mLeft+'px)';
    document.getElementById('cuadro'+x).style.transition='transform 1s linear';
    }
}

function moverIzquierda(){
    mLeft -= velocidad;
    for (x=0; x<=21; x++){
    document.getElementById('cuadro'+x).style.transform='TranslateX('+mLeft+'px)';
    document.getElementById('cuadro'+x).style.transition='transform 1s linear';
      
    }

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  


