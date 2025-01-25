document.getElementsByTagName("main")[0].style.marginTop = `${document.getElementsByTagName("header")[0].offsetHeight}px`;
document.getElementById("burger").addEventListener('click', () =>{
    document.getElementsByClassName("popup")[0].classList.toggle("flag");
    if(document.getElementsByClassName("popup flag")[0]){
        document.getElementsByClassName("popup flag")[0].style.maxHeight = document.getElementById("popup").scrollHeight + "px";
    }
    else{
        document.getElementsByClassName("popup")[0].style.maxHeight = "0px";
    }
});
if(document.getElementsByClassName("burgerMenu")[0].clientHeight != 0){
    document.getElementsByClassName("burgerMenu")[0].style.margin = document.querySelector(".burgerMenu").getBoundingClientRect().top + "px 25px";
    document.getElementsByClassName("firstLineMenu")[0].style.height = "auto";
}
else{
    document.getElementsByClassName("firstLineMenu")[0].style.height = "75px";
}
window.addEventListener('resize', () => {
    if(document.getElementsByClassName("burgerMenu")[0].clientHeight != 0){
        document.getElementsByClassName("burgerMenu")[0].style.margin = document.querySelector(".burgerMenu").getBoundingClientRect().top + "px 25px";
        document.getElementsByClassName("firstLineMenu")[0].style.height = "auto";
    }
    else{
        document.getElementsByClassName("firstLineMenu")[0].style.height = "75px";
    }
})