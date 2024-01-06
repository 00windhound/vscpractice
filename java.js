document.getElementById("submit").onclick = function(){
   const p1 = document.getElementById("p1");
   const p2 = document.getElementById("p2");
   const p3 = document.getElementById("p3");
   const p4 = document.getElementById("p4")
   const p;
   
if(document.getElementById("a").checked){
        document.getElementById("b").innerHTML="true";
 }
    else{document.getElementById("b").innerHTML="false";
}
if(p1.checked){
   // document.getElementById("c").innerHTML="player 1";
}   p= p1;
    else if(p2.checked){
       // document.getElementById("d").innerHTML="player 2";
        p=p2
    }
    else if(p3.checked){
        //document.getElementById("e").innerHTML="player 3";
        p=p3
    }
    else if(p4.checked){
        //document.getElementById("f").innerHTML="player 4";
        p=p4
    }
    else{document.getElementById("c").innerHTML="none chosen"}

}