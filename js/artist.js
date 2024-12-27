const block = document.getElementsByClassName("art");
function list () {
    for (const elements of block){
        var wid = 0;
        const element = elements.getElementsByClassName("part");
        for (const part of element){
            wid += part.clientWidth;
            console.log(wid);
        }
        elements.style.width = `${wid}px`;
    }
}
list();
window.addEventListener('resize', list);
window.addEventListener('click', list);
