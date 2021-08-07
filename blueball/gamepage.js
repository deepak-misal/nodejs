const buttonsContainer = document.getElementById("buttonsContainer");
var blueButton=Math.floor(Math.random()*50+1);
var turns=0;
var isWin=false;

function startGame(){
  for (let i = 1; i <=50; i++) {
      const button = document.createElement("button");
      button.innerText = i;
      button.addEventListener("click",checkBall)
      buttonsContainer.appendChild(button);
  }
  console.log(blueButton)
}
startGame();
function checkBall(e){
    turns++;
    var element=e.target.innerText;
    var ballNo=parseInt(element)+1;
    e.target.style.background=(ballNo==blueButton)?"blue":(ballNo<blueButton)?"red":"green";
    isWin=(ballNo==blueButton)?true:false;
    document.getElementById("result").innerHTML=(isWin==true)?("Correct Guess,You Won The Game!!"):"Wrong Guess";
    buttonsContainer.style.pointerEvents =(isWin==true)?'none':'visible';
    showTurns(turns);

    if(turns==5 && isWin==false){
        buttonsContainer.style.pointerEvents = 'none';
        document.getElementById("result").innerHTML="You loss the Game!"
        setTimeout(goBack,3000);
    }
}
function showTurns(turns){
    document.getElementById('turns').innerHTML="No of turns left:"+(5-turns)
}
function goBack() {
    window.history.back();
}



