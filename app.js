var scores, roundScore, activePlayer, gameplayer;

function initailisation (){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameplayer = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    /*rese score and player names*/
    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";


    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}

initailisation()

document.querySelector('.btn-new').addEventListener('click', initailisation);

document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gameplayer){

        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

       document.getElementById('dice-1').style.display = 'block';
       document.getElementById('dice-2').style.display = 'block';
       document.getElementById('dice-1').src = 'images/dice-'+dice1+'.png';
       document.getElementById('dice-2').src = 'images/dice-'+dice1+'.png';


       if(dice1 !== 1 && dice2 !== 1){
           roundScore += dice1  + dice2;
           document.querySelector('#current-' +activePlayer).textContent = roundScore;


       }else{
           nextPlayer()
       }

    }

})

function nextPlayer(){

    // activePlayer === 0 ? activePlayer =1 : activePlayer = 0
    if(activePlayer === 0){
        activePlayer = 1
    }else{
        activePlayer = 0;
    }

    roundScore =0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('dice-1').style.display = 'none';
    document.querySelector('dice-2').style.display = 'none';
}


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameplayer){
        scores[activePlayer] +=
    }
})