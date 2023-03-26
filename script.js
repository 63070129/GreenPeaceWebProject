var scrollBefore = 0;
var moveHam = 0;
var winHeight = window.innerHeight;
var time = 0;
var num_pig = 4;
var burHeight = 0;
var time2 = 0;
var run = 0;
var lastHeight = 0;
var sec = 0;
var sec1 = 0;
window.addEventListener('scroll',function(e){
    scrolled = window.scrollY;
    moveHam += 10;
    if (scrolled <= winHeight){
        perHeight = (scrolled*100)/winHeight;
        document.getElementById('ham').style.transform = `translate(-${perHeight*0.5}vw, ${perHeight*1.2}vh)`;
    }
    if ((scrolled/winHeight >= 4.5) && (scrolled/winHeight <= 6)){
        document.getElementById('line1').style.transform = "scaleX(1)";
    }
    else{
        document.getElementById('line1').style.transform = "scaleX(0)";
    }
    if ((scrolled/winHeight >= 5) && (scrolled/winHeight <= 6)){
        document.getElementById('line2').style.transform = "scaleX(1)";
    }
    else{
        document.getElementById('line2').style.transform = "scaleX(0)";
    }
})

setInterval(function(){
    time += 1;
    if ((scrolled/winHeight >= 6) && (scrolled/winHeight <= 7)){
        if (time == 1){
            document.getElementById('burg').style.opacity = '100%';
            document.getElementById('popup').style.transform = "scaleX(1)";
            
        }else if (time == 3){
            document.getElementById('popup').style.transform = "scaleX(0)";
            document.getElementById('character').style.transform = "translateX(100vw)";
            document.getElementById('burg').style.transform = "translateX(100vw)";
    }else if (time > 5){
        time = 0;
        document.getElementById('burg').style.opacity = '0%';
        document.getElementById('character').style.transform = "translateX(10vw)";
        document.getElementById('burg').style.transform = "translateX(10vw)";
    }
    console.log(time)
    }
}, 1000)
function add_pig(){
    num_pig -= 1;
    if (num_pig <= 0){
        return 0;
    }
    const div = document.createElement('div');
    div.className = "child-pig";
    document.getElementById('pigground').appendChild(div);
}
setInterval(function(){
    sec += 1;
    if ((scrolled/winHeight >= 7) && (scrolled/winHeight <= 8)){
        if (sec >= 2){
            document.getElementById('effect').style.filter = "hue-rotate(100deg)"
        }
    }else{
        sec = 0;
        document.getElementById('effect').style.filter = "hue-rotate(0deg)"
    }
}, 1000)
setInterval(function(){
    if (sec1%2 == 0){
        document.getElementById('pig').src = "img/p3.png";
    }else{
        document.getElementById('pig').src = "img/p1.png";
    }
    sec1 += 1;
}, 200)