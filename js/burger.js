document.getElementById("burger").addEventListener('click', () =>{
    if(document.getElementById("popup").style.display == "none"){
        document.getElementById("popup").style.display = "block";
    }
    else if(document.getElementById("popup").style.display == "block"){
        document.getElementById("popup").style.display = "none";
    }
});