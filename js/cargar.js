//llenado de la cinta 
function cargar(){
    expresion= document.getElementById("entrada").value;
    
    if(isEmpty(!expresion)){
    
    limpiador();

    var y=expresion.length;
    n=0;
    aux=7;
    
    while(n<y){
        if(expresion.charAt(n)=="a" || expresion.charAt(n)=="b"){

            document.getElementById('cuadro'+aux).innerHTML='<h1>'+expresion.charAt(n)+'</h1>';
            n++;
            aux++;
            var vector= [n];
            }else{
                for(i=0;i<=20; i++){
                    document.getElementById('cuadro'+i).innerHTML="<h1> </h1>";   
                    }
                    alert("Error en la digitación");
                 break;
                }
    
        } 
    }else{
        alert("No has ingresado ninguna expresión");
    }
    

}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}


function limpiador() {
     
    for(i=0;i<=20; i++){
        document.getElementById('cuadro'+i).innerHTML="";   
        }
       
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}
function isEmpty(str) {
    return (!str || 0 === str.length);
}
