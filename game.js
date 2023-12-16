const butterfly = document.getElementById("Butterfly");
const scoren = document.getElementById("scoren");
const timen = document.getElementById("timern");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
let bgm = document.getElementById("bgm");
var sn = 0;
var tn=100;
function random(){
    return Math.floor(Math.random()*70);
}
function timer(){
    if(tn !=0){
        tn = tn -1;
     return   timen.innerHTML="&nbsp"+tn;
}
else{
 alert("Game Over");
 location.reload();
}
}
setInterval(timer,1000);
function tele(){
    if(sn!=100){
    butterfly.style.top=random()+"%";
    butterfly.style.left=random()+"%";
    sn=sn+1;
    scoren.innerHTML= "&nbsp"+sn;}
    else{
        alert("you win");
    }
}
function retry(){
    return location.reload();
}
function sound(){
    console.log(bgm.muted);
    if(bgm.muted==false)
    {bgm.muted = true;}
    else{
        bgm.muted = false;
    }
}
butterfly.addEventListener('click',tele);
b1.addEventListener('click',retry);
b2.addEventListener('click',sound);
