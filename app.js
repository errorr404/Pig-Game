/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//var score1=0;
//var score2=0; 
var scores,roundScores,activePlayer,gamePlaying;
/* scores=[0,0];  // array variable for score of player 1 and player 2;
 roundScore=0;  // round score of the player 
activePlayer=0; // 0 for 1st player and 1 for 2nd player.
*/
init();
//console.log(6);
dice=Math.floor(Math.random()*6)+1;// Math.random() function is used as the random number generator between 0 to 1, and here the Math.floor() function used for floor value.
//console.log(dice);

// dom manipulation

document.querySelector('#current-'+activePlayer).textContent=dice;  // here the query selector select the element which we want to select in the html for this we have to put their id in the querySelctor(---) and for id we use #.

/*
document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';  // this is used for generation italic text.
*/
/*
var x=document.querySelector('#score-0').textContent;  // here we read the seore-1 id value.
console.log(x);
*/

document.querySelector('.dice').style.display='none';

//setup Event handler.
/*
function btn(){
    //Do something here.
}

document.querySelector('.btn-roll').addEventListener('click',btn);
*/

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying)
        {
    // 1.Random numbers.
    
    var dice=Math.floor(Math.random()*6)+1;
    
    
    //2. Display the result
   
   var diceDOM= document.querySelector('.dice');
       diceDOM.style.display='block';
    diceDOM.src = 'dice-'+dice+'.png';
    
    //3. Update the round score if the rolled number was not a 1.
    if(dice!==1){
        // Add score
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    
        }
    else{
        //Next player
        
       nextPlayer();
        
    document.querySelector('.dice').style.display='none';
        
    }
        }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    // Add current score to global score
    scores[activePlayer]+=roundScore;
    
    // update the ui .
    
    document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
    
   
    
    //Chcek if player won the game.
    if(scores[activePlayer]>=100){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
         document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }
    else
        {
               nextPlayer();
 
        }
    }
});

function nextPlayer(){
     activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        /*
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        */
        
     // Toggle: if class is present then it removes it and if it is not present then add it.
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
    document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
    
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('#name-0').textContent='Player 1';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}























