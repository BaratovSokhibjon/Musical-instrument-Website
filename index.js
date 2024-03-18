var len = document.querySelectorAll(".drum").length;

for(var i = 0; i < len; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML); 
    });

}

addEventListener("keypress", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "a":
            var wDrum = new Audio("sounds/tom-1.mp3");
            wDrum.play();
            break;
        case "s":
            var aDrum = new Audio("sounds/tom-2.mp3");
            aDrum.play();
            break;
        case "d":
            var sDrum = new Audio("sounds/tom-3.mp3");
            sDrum.play();
            break;
        case "f":
            var dDrum = new Audio("sounds/tom-4.mp3");
            dDrum.play();
            break;
        case "j":
            var jDrum = new Audio("sounds/snare.mp3");
            jDrum.play();
            break;
        case "k":
            var kDrum = new Audio("sounds/crash.mp3");
            kDrum.play();
            break;
        case "l":
            var lDrum = new Audio("sounds/kick-bass.mp3");
            lDrum.play();
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}

