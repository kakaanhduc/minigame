'use strict';
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const curent0EL=document.getElementById('current--0');
const curent1EL=document.getElementById('current--1');

const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const diceEl=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');


// ẩn giá trị 


// tung xúc xắc
 let score=[0,0];
 let curenscore =0;
  let activeplayer =0;
  let playing =true;

const inif=function(){
  score=[0,0];
  curenscore =0;
  activeplayer =0;
  playing =true;
  score0El.textContent= 0;
  score1El.textContent= 0;
  curent0EL.textContent= 0;
  curent1EL.textContent= 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

inif();

const changebuton=function(){
  curenscore=0;
      document.getElementById(`current--${activeplayer}`).textContent=curenscore;
    
      activeplayer= activeplayer ==1 ? 0 : 1;
    if(player0El.classList.contains('player--active')){
      player0El.classList.remove('player--active');
      player1El.classList.add('player--active');
    }else{
      player0El.classList.add('player--active');
      player1El.classList.remove('player--active');
    }
}

btnroll.addEventListener('click', function(){
  if(playing){
    const dice= Math.trunc(Math.random()*6) +1;
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    if(dice !== 1){
       curenscore += dice;
       document.getElementById(`current--${activeplayer}`).textContent=curenscore;
       
    }else{
        changebuton();
    
    }
  }
})

// hold

btnhold.addEventListener('click', function(){
if(playing){

  score[activeplayer]+=curenscore;
  document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer];

  if(score[activeplayer] >= 100){
    diceEl.classList.add('hidden');
     document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
     playing=false;
  }

  changebuton();
}
})

btnnew.addEventListener('click', inif())