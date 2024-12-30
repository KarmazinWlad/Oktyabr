document.getElementById("burger").addEventListener('click', () =>{
    if(document.getElementById("popup").style.display == "none"){
        document.getElementById("popup").style.display = "block";
        document.getElementsByTagName("main")[0].style.marginTop = "203.3px";
    }
    else if(document.getElementById("popup").style.display == "block"){
        document.getElementById("popup").style.display = "none";
        document.getElementsByTagName("main")[0].style.marginTop = "145.67px";
    }
});