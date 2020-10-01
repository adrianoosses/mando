function enciendeApaga(){
    //var opacidad=document.getElementById('luzVerde').style.opacity;
    if(document.getElementById('luzVerde').style.opacity == 0){
        document.getElementById('luzVerde').style.opacity=1;
    }else{
        document.getElementById('luzVerde').style.opacity=0;
    }
}
function bajaBotonI(){
    /*document.getElementById('botonSuperiorI').style.top="7em"*/
    //var opacidad=document.getElementById('luzVerde').style.opacity;
    
    if(document.getElementById('botonSuperiorI').style.top == "6.5em"){
        document.getElementById('botonSuperiorI').style.top="7.2em";
    }else{
        document.getElementById('botonSuperiorI').style.top="6.5em";
    }
}