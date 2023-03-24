document.getElementById("submit").onclick=function(){
    // when clicked button
    let name = document.getElementById("name").value;

    if(name.length > 0){
        //if there is text then the alert is green 
        document.getElementById("Ok").style.display="block";
        document.getElementById("Error").style.display="none";
    }
    else{
        //if nothing 
        document.getElementById("Error").style.display="block";
        document.getElementById("Ok").style.display="none";
    }
    return false;

}