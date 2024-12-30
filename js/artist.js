const block = document.getElementsByClassName("art");
document.getElementById("burgerSpisok").style.top = "71px";
function list () {
    for (const elements of block){
        var wid = 0;
        const element = elements.getElementsByClassName("part");
        for (const part of element){
            wid += part.clientWidth;
        }
        elements.style.width = `${wid}px`;
    }
}
function artist_burger () {
    if(pageYOffset > document.getElementsByClassName("spisok")[0].clientHeight - 17) {
        document.getElementById("burgerSpisok").style.display = "block";
    }
    else {
        console.log(document.getElementsByTagName("header")[0].clientHeight + document.getElementsByClassName("ul")[0].clientHeight);
        document.getElementById("burgerSpisok").style.display = "none";
        document.getElementById("burgerSpisok").style.top = "71px";
}
}
for(var i = 0; i < 4; i++){
    list();
}
window.addEventListener('resize', list);
window.addEventListener('scroll', list);
window.addEventListener('click', list);
artist_burger();
window.addEventListener('scroll', artist_burger);
document.getElementById("burgerSpisok").addEventListener('click', () =>{
    if(document.getElementById("burgerSpisok").style.top == "71px"){
        document.getElementById("burgerSpisok").style.top = "145.67px";
    }
    else{
        document.getElementById("burgerSpisok").style.top = "71px";
    }
});