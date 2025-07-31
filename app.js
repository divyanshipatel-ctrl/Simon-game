let gameSeq =[];
let userSeq =[];

let started = false;
let level = 0;

let highScore = 0;

let btns = ["red","yellow","green","purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
    console.log("Game  is Started");
    started = true;

    levelUp();
    }
});
  
  function gameFlash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },250);
   }
  function userFlash(btn){
     btn.classList.add("userflash");
     setTimeout(function(){
        btn.classList.remove("userflash");
     },250);
   }

function levelUp(){
  level++;
  h2.innerText = `Level ${level}`;
 // random button choose
 let randomIdx = Math.floor(Math.random() * 3);
 let randColor = btns[randomIdx];
 let randBtn = document.querySelector(`.${randColor}`);
 gameSeq.push(randColor);
 console.log(gameSeq);
//  console.log(randomIdx);
//  console.log(randColor);
//  console.log(randBtn);
 gameFlash(randBtn);
}

function checkAns(idx){

    // console.log("curr level :",level);
    if(userSeq[idx] === gameSeq[idx] ){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000); 
        }
    }else{
      if(level > highScore) {
            highScore = level;
      }
        h2.innerHTML = `Game over!Your score was <b>${level}</b> <br>
        Highest Score: <b>${highScore}</b> <br>  
        Press any key to Start`;
        
        document.querySelector("body").style.backgroundcolor ="red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundcolor ="white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
   started = false;
   userSeq = [];
   gameSeq = [];
   level=0;

}
