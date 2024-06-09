NoOfDrums=$(".drum").length;
for(var i=0; i<NoOfDrums; i++){
$(".drum").eq(i).click(function (){
    var currentButton=this.innerHTML;
    makeSound(currentButton);
    AddingAnimation(currentButton);
});
}
$(document).keydown(function(event)
{
   console.log(event);
   makeSound(event.key);
   AddingAnimation(event.key);
}
);
function makeSound(Key)
{
    switch(Key){
    case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "s":
        var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d":
        var audio  =new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "k":
        var audio= new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case "l":
        var  audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

    default:
        console.log(currentButton);
}
}
function AddingAnimation(currentKey)
{
    var KeyPressed=document.querySelector("." + currentKey)
    KeyPressed.classList.add("pressed");
    setTimeout(() => {
        KeyPressed.classList.remove("pressed");
        KeyPressed.classList.add("game-over");
    }, 100);
}