var scrollBefore = 0;
var moveHam = 0;
var winHeight = window.innerHeight;
var time = 0;
var num_pig = 4;
var burHeight = 0;
var time2 = 0;
var run = 0;
window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;
    moveHam += 10;
    if(scrollBefore > scrolled){
        scrollBefore = scrolled;
        moveHam = 0;
        ham.style.transform = `translateX(0%)`;
        ham.style.position = `fixed`;
    }else if((scrollBefore <= scrolled) && (scrolled <= winHeight)){
        scrollBefore = scrolled;
        ham.style.position = `fixed`;
        ham.style.transform = `translateX(-${scrolled}px)`;
    }else{
        ham.style.position = `absolute`;
        ham.style.opcity = "0%";
    }
    if (window.scrollY/winHeight >= 5){
        burger.style.opacity = "100%";
        burger.style.animation = "tohand 3s ease-in-out";
        drug.style.animation = "move 2s ease-in-out";
        pig6.style.filter = "grayscale(100%)";
    }
})

setInterval(function(){
    time += 1;
    if (time%2 == 0){
        page4.style.background = "url(img/bg8.png)";
        page4.style.backgroundPosition = "center";
        page4.style.backgroundRepeat = "no-repeat";
        page4.style.backgroundSize = "cover";
    }else{
        page4.style.background = "url(img/bg7.png)";
        page4.style.backgroundPosition = "center";
        page4.style.backgroundRepeat = "no-repeat";
        page4.style.backgroundSize = "cover";
    }
    if (run == 1){
        burger.style.transition = "all 2s ease-in-out";
        character.style.animation = "run 2s ease-in-out";
        burger.style.transform = "translate(100vw ,80vh)";
    }
    if (window.scrollY >= winHeight*6){
        burger.style.left = "20vw";
        burger.style.top = "580vh";
        this.setInterval(function(){
            time2 += 1;
            if (time2 == 10){
                run = 1;
            }
        }, 1000)
        console.log(run)
    }
    
}, 500)
function add_pig(){
    num_pig -= 1;
    if (num_pig <= 0){
        return 0;
    }
    const div = document.createElement('div');
    div.className = "child-pig";
    document.getElementById('pigground').appendChild(div);
}