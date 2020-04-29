/*Máquina de Turing lógica tomando en cuenta las transiciones, estados y sus movimientos en cinta respectivamente
Version 1.0.0
*/

//Los String en Js son Inmutables, por esa razón se hace este subcódigo para reemplazarlos por una copia 
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

palabra="bbaba";
console.log('La palabra que ingresó es :'+palabra);
document.write('<h2> La palabra que ingreso es: '+palabra);
palabra='z'+palabra+'z';
document.write('<h2> Modificando para agregar el vacío : '+palabra+'</h2>');

/*declaración de variables que operan en la máquina de turing y sus movimientos, n es el encargado de moverse
dentro del String*/
let n=1;
let estado=1;
r=0;
l=0;
sw=1;
//Ciclo que controla todo el movimiento y finaliza en el estado de aceptación//
while(estado!=3){
    document.write('<h2>La posición donde finaliza es :'+n);
                //Controla el esta Q1 y sus movimientos//
             while( estado==1){
          
             if(palabra.charAt(n)=="a"){
                  
                        palabra=palabra.replaceAt(n, "a");
                        r++;
                    }else{
                        if(palabra.charAt(n)=="b"){
                            palabra=palabra.replaceAt(n, "a");
                             r++;
                        }else{
                            if(palabra.charAt(n)=="z"){
                                
                                palabra=palabra.replaceAt(n, "z");
                                    estado=2;
                                    l++;
                                    n--;
                                    sw=0;
                                    document.write('<h2>La posición donde finaliza es :'+n);
                            }
                        }
                    }
                    /*Como hemos restado n, para no tener un movimento de 2 a la derecha y uno a izquierda,
                    se establece un sw*/
                    if (sw==1){
                    n++;
                    document.write('<h2>La posición donde finaliza es :'+n);
                    }
            }

            sw=1;
            //Controla el estado Q2 y sus movimientos*/
            while(estado==2){

            
                if(palabra.charAt(n)=="a"){
        
                    palabra=palabra.replaceAt(n, "a");
                    l++;
                    
                }else{
                    if(palabra.charAt(n)=="z"){
                        palabra=palabra.replaceAt(n,"z");
                        estado=3;
                        r++;
                        n++;
                        sw=0;
                        document.write('<h2>La posición donde finaliza es :'+n);
                    }
                }
                if(sw==1){
                n--;
                document.write('<h2>La posición donde finaliza es :'+n);
                }
                }
            }

console.log('Se movió a la izquierda :'+l);
console.log('Se movió a la derecha :'+r);
palabra=palabra.split('z').join('');
console.log('La palabra resultado es: '+palabra);
document.write('<h2>Se movió a la izquierda :' +l);
document.write('<h2>Se movió a la derecha   :' +r);
document.write('<h2>La palabra resultado es :'+palabra);
document.write('<h2>La posición donde finaliza es :'+n);

