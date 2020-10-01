function enciendeApaga(){
    //var opacidad=document.getElementById('luzVerde').style.opacity;
    if(document.getElementById('luzVerde').style.opacity == 0){
        document.getElementById('luzVerde').style.opacity=1;
    }else{
        document.getElementById('luzVerde').style.opacity=0;
    }
}