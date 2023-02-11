'use script';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const currentscore = document.getElementById('current--1');
const tscore = document.getElementById('score--1');
const btnHold = document.querySelector('.btn--hold');
function swapplayer() {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  totalscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
let scores = [0, 0];
score1.textContent = 0;
score2.textContent = 0;
diceElement.classList.add('hidden');
let totalscore = 0;
let activeplayer = 0;
btnRoll.addEventListener('click', function () {
  const dicenum = Math.trunc(Math.random() * 6) + 1;
  // currentscore.textContent = dicenum;
  console.log(dicenum);
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dicenum}.png`;
  if (dicenum !== 1) {
    totalscore = totalscore + dicenum;
    document.getElementById(`current--${activeplayer}`).textContent =
      totalscore;
  } else {
    swapplayer();
  }
});

btnHold.addEventListener('click', function () {
  scores[activeplayer] += totalscore;
  // alert(`scors are ${scores[0]} and ${scores[1]}`);
  document.getElementById(`score--${activeplayer}`).textContent =
    scores[activeplayer];
  if (scores[activeplayer] >= 10) {
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove('player--active');
  } else swapplayer();
});

btnNew.addEventListener('click', function () {
  document.getElementById('score--1').textContent = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  activeplayer = 0;
  totalscore = 0;
  scores[0] = 0;
  scores[1] = 0;
});
