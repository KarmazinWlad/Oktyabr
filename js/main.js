window.scrollTo(0, document.getElementById("13").clientHeight*2+75);
for(const element of document.getElementsByClassName("heart")){
    if(localStorage.getItem(element.parentNode.id) == null){
        element.src="https://karmazinwlad.github.io/Oktyabr/img/img.png";
    }
    else if (localStorage.getItem(element.parentNode.id) != null){
        element.src="https://karmazinwlad.github.io/Oktyabr/img/img1.png";
    }
}
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
        if(localStorage.getItem(element.parentNode.id) == null){
            element.src="https://karmazinwlad.github.io/Oktyabr/img/img1.png";
            localStorage.setItem(element.parentNode.id, element.parentNode.outerHTML);
        }
        else if (localStorage.getItem(element.parentNode.id) != null){
            element.src="https://karmazinwlad.github.io/Oktyabr/img/img.png";
            localStorage.removeItem(element.parentNode.id);
        }
    });
}
