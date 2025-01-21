window.scrollTo(0, document.getElementById("13").clientHeight * 2 + 75);
for(const element of document.getElementsByClassName("heart")){
    if(localStorage.getItem(element.parentNode.id) == null){
        element.src="https://karmazinwlad.github.io/Oktyabr/img/img.png";
    }
    else if (localStorage.getItem(element.parentNode.id) != null){
        element.src="https://karmazinwlad.github.io/Oktyabr/img/img1.png";
    }
}
console.log(1);
function scrolling(flag){
    if(flag == true){
        if(document.getElementById("11").clientHeight - document.getElementById("13").clientHeight - document.getElementById("14").clientHeight - 45 <= pageYOffset){
            window.scrollTo(0, document.getElementById("13").clientHeight * 2 + 75);
            window.scrollTo({ top: document.getElementById("13").clientHeight * 2 + 175, left: 0, behavior: 'smooth' });
        }
        else if(document.getElementById("13").clientHeight + 30 >= pageYOffset){
            window.scrollTo(0, document.getElementById("11").clientHeight - document.getElementById("13").clientHeight * 2 - document.getElementById("14").clientHeight - 90);
            window.scrollTo({ top: document.getElementById("11").clientHeight - document.getElementById("13").clientHeight * 2 - document.getElementById("14").clientHeight - 190, left: 0, behavior: 'smooth' });
        }
    }
};
if('ontouchstart' in window || navigator.maxTouchPoints){
    var flag = true;
    window.addEventListener('touchend', () =>{
        flag = true;
        scrolling(flag);
    });
    window.addEventListener('touchstart', () =>{
        flag = false;
    });
    window.addEventListener('scroll', scrolling(flag));
}
else{
    window.addEventListener('scroll', () =>{
        if(document.getElementById("11").clientHeight - document.getElementById("13").clientHeight - document.getElementById("14").clientHeight - 45 <= pageYOffset){
            window.scrollTo(0, document.getElementById("13").clientHeight * 2 + 75);
        }
        else if(document.getElementById("13").clientHeight + 30 >= pageYOffset){
            window.scrollTo(0, document.getElementById("11").clientHeight - document.getElementById("13").clientHeight * 2 - document.getElementById("14").clientHeight - 90);
        }
    });
}
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
