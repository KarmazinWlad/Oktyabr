window.scrollTo(0, document.getElementById("13").clientHeight * 2 + 75);
for(const element of document.getElementsByClassName("heart")){
    if(localStorage.getItem(element.parentNode.id) == null){
        element.src="https://karmazinwlad.github.io/Oktyabr/img/img.png";
    }
    else if (localStorage.getItem(element.parentNode.id) != null){
        element.src="https://karmazinwlad.github.io/Oktyabr/img/img1.png";
    }
}
if('ontouchstart' in window || navigator.maxTouchPoints){
    var flag = true;
    function scrolling(){
        // if(flag == true){
            if(document.getElementById("11").clientHeight - document.getElementById("13").clientHeight - document.getElementById("14").clientHeight - 45 <= pageYOffset){
                window.scrollTo({ top: document.getElementById("13").clientHeight * 2 + 475, left: 0, behavior: 'smooth' });
            }
            else if(document.getElementById("13").clientHeight + 30 >= pageYOffset){
                window.scrollTo({ top: document.getElementById("11").clientHeight - document.getElementById("13").clientHeight * 2 - document.getElementById("14").clientHeight - 490, left: 0, behavior: 'smooth' });
            }
        // }
    }
    window.addEventListener('touchend', () =>{
        flag = true;
        scrolling();
    });
    window.addEventListener('touchcancel', () =>{
        flag = true;
        scrolling();
    });
    window.addEventListener('touchstart', () =>{
        flag = false;
    });
    window.addEventListener('scroll', scrolling());
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
