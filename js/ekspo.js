const element1 = document.getElementById("area1");
const element2 = document.getElementById("area2");
const element3 = document.getElementById("area3");
const element4 = document.getElementById("area4");
const element5 = document.getElementById("area5");
const element6 = document.getElementById("area6");
const element7 = document.getElementById("area7");
const element8 = document.getElementById("area8");
const element9 = document.getElementById("area9");
const element10 = document.getElementById("area10");
const element11 = document.getElementById("area11");
const element12 = document.getElementById("area12");
const element13 = document.getElementById("area13");
const element14 = document.getElementById("area14");
const element15 = document.getElementById("area15");
const element16 = document.getElementById("area16");
const map = document.getElementById("map");
var h = window.innerHeight-145.67;
var x = map.clientWidth;
var y = map.clientHeight;
const ratio = x / y;
function coords(){
    h = window.innerHeight-145.67;
    w = window.innerWidth;
    console.log(map.clientHeight, h);
    if (map.clientHeight < h){
        map.style.height = `${h}px`;
        map.style.width = `${h*ratio}px`;
    }
    else {
        map.style.width = `${w}px`;
        map.style.height = `${w/ratio}px`;
        console.log(map.style.height, map.style.width);
    }
    x = map.clientWidth;
    y = map.clientHeight;
    element1.coords = `${x*0.049}, ${y*0.02}, ${x*0.213}, ${y*0.3}`;
    element2.coords = `${x*0.243}, ${y*0.091}, ${x*0.389}, ${y*0.31}`;
    element3.coords = `${x*0.052}, ${y*0.347}, ${x*0.168}, ${y*0.535}`;
    element4.coords = `${x*0.187}, ${y*0.358}, ${x*0.239}, ${y*0.41}`;
    element5.coords = `${x*0.177}, ${y*0.445}, ${x*0.251}, ${y*0.515}`;
    element6.coords = `${x*0.259}, ${y*0.355}, ${x*0.388}, ${y*0.534}`;
    element7.coords = `${x*0.06}, ${y*0.57}, ${x*0.165}, ${y*0.675}`;
    element8.coords = `${x*0.188}, ${y*0.545}, ${x*0.242}, ${y*0.595}`;
    element9.coords = `${x*0.31}, ${y*0.541}, ${x*0.34}, ${y*0.578}`;
    element10.coords = `${x*0.434}, ${y*0.065}, ${x*0.755}, ${y*0.558}`;
    element11.coords = `${x*0.792}, ${y*0.087}, ${x*0.873}, ${y*0.166}`;
    element12.coords = `${x*0.762}, ${y*0.219}, ${x*0.91}, ${y*0.503}`;
    element13.coords = `${x*0.65}, ${y*0.585}, ${x*0.755}, ${y*0.638}`;
    element14.coords = `${x*0.791}, ${y*0.532}, ${x*0.889}, ${y*0.635}`;
    element15.coords = `${x*0.669}, ${y*0.655}, ${x*0.738}, ${y*0.723}`;
    element16.coords = `${x*0.788}, ${y*0.678}, ${x*0.894}, ${y*0.788}`;
}
for(var i = 0; i < 2; i++){
    coords();
}
window.addEventListener('resize', coords);
window.addEventListener('click', coords);
