var block = document.getElementById("storage");
var a = 0;
for (var inf in localStorage){
    if (a < localStorage.length){
        const element = document.createElement('li');
        element.innerHTML = localStorage.getItem(inf);
        document.getElementById("storage").appendChild(element);
        a++;
    }
}
for(const element of document.getElementsByClassName("heart")){
    element.addEventListener('click', () => {
        if (localStorage.getItem(element.parentNode.id) != null){
            element.src="https://karmazinwlad.github.io/Oktyabr/img/img.png";
            localStorage.removeItem(element.parentNode.id);
            document.getElementById("storage").removeChild(element.parentNode.parentNode)
        }
    });
}