   
function frames(variable){
        document.getElementById("enframe").src="pages/home.html";
        document.getElementById("enframe").height="635";
    if (variable==1){
        document.getElementById("enframe").src="pages/home.html";
        document.getElementById("enframe").height="635";
    }
    else if (variable==2){
        document.getElementById("enframe").src="pages/programa.html";
        document.getElementById("enframe").height="1100";
    } 
    else if (variable==3){
        document.getElementById("enframe").src="pages/postulacion.html";
        document.getElementById("enframe").height="635";
    }
    else if (variable==4){
        document.getElementById("enframe").src="pages/patrocinadores.html";
        document.getElementById("enframe").height="550";
    }
    else if (variable==5){
        document.getElementById("enframe").src="pages/galeria.html";  
        document.getElementById("enframe").height="550";
    }   
} 
