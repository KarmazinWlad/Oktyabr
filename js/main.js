window.scrollTo(0, document.getElementById("13").clientHeight*2+75);
window.addEventListener('scroll', () =>{
    if(document.getElementById("11").clientHeight-document.getElementById("13").clientHeight-document.getElementById("14").clientHeight - 205.67 <= pageYOffset){
        window.scrollTo(0, document.getElementById("13").clientHeight*2+75);
    }
    else if(160.67+document.getElementById("13").clientHeight+30 >= pageYOffset){
        window.scrollTo(0, document.getElementById("11").clientHeight - document.getElementById("13").clientHeight*2-document.getElementById("14").clientHeight -90);
    }
});
for(const element of document.getElementsByClassName("heart")){
    element.addEventListener('click', () => {
        console.log(element.src);
        if(element.src=="img/img.png"){
            element.src="img/img1.png";
        }
        else if(element.src=="img/img1.png"){
            element.src="img/img.png";
        }
    });
}