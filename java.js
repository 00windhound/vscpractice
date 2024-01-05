document.getElementById("create").onclick = function(){
   const p1 = document.getElementById("p1");
   const p2 = document.getElementById("p2");
   const p3 = document.getElementById("p3");
   const p4 = document.getElementById("p4")
   
   
if(document.getElementById("a").checked){
        document.getElementById("b").innerHTML="true";
 }
    else{document.getElementById("b").innerHTML="false";
}
if(p1.checked){
    document.getElementById("c").innerHTML="player 1";
}
    else if(p2.checked){
        document.getElementById("c").innerHTML="player 2";
    }
    else if(p3.checked){
        document.getElementById("c").innerHTML="player 3";
    }
    else if(p4.checked){
        document.getElementById("c").innerHTML="player 4";
    }
    else{document.getElementById("c").innerHTML="none chosen"}

}