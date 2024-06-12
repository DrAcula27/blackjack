const API_BASE = 'https://deckofcardsapi.com/api/deck';
let deckId;
let dealerHand = [];
let playerHand = [];
let dealerScore = 0;
let playerScore = 0;

document
  .getElementById('hit-button')
  .addEventListener('click', playerHit);
document
  .getElementById('stand-button')
  .addEventListener('click', playerStand);
document
  .getElementById('reset-button')
  .addEventListener('click', resetGame);

async function initializeGame() {
  const deckResponse = await fetch(`${API_BASE}/new/shuffle/`);
  const deckData = await deckResponse.json();
  deckId = deckData.deck_id;
  await drawCard(playerHand);
  await drawCard(dealerHand);
  await drawCard(playerHand);
  await drawCard(dealerHand);
  updateScores();
  renderHands();
  checkBlackjack();
}

async function drawCard(hand) {
  const cardResponse = await fetch(
    `${API_BASE}/${deckId}/draw/?count=1`
  );
  const cardData = await cardResponse.json();
  hand.push(cardData.cards[0]);
}

function calculateScore(hand) {
  let score = 0;
  let aces = 0;
  hand.forEach((card) => {
    if (card.value === 'ACE') {
      aces += 1;
      score += 11;
    } else if (['KING', 'QUEEN', 'JACK'].includes(card.value)) {
      score += 10;
    } else {
      score += parseInt(card.value);
    }
  });
  while (score > 21 && aces > 0) {
    score -= 10;
    aces -= 1;
  }
  return score;
}

function updateScores() {
  dealerScore = calculateScore(dealerHand);
  playerScore = calculateScore(playerHand);
  document.getElementById(
    'dealer-score'
  ).innerText = `${dealerScore}`;
  document.getElementById(
    'player-score'
  ).innerText = `${playerScore}`;
}

function renderHands() {
  const dealerHandDiv = document.getElementById('dealer-hand');
  const playerHandDiv = document.getElementById('player-hand');
  dealerHandDiv.innerHTML = '';
  playerHandDiv.innerHTML = '';
  dealerHand.forEach((card) => {
    const img = document.createElement('img');
    img.src = card.image;
    img.className = 'card';
    dealerHandDiv.appendChild(img);
  });
  playerHand.forEach((card) => {
    const img = document.createElement('img');
    img.src = card.image;
    img.className = 'card';
    playerHandDiv.appendChild(img);
  });
}

async function playerHit() {
  await drawCard(playerHand);
  updateScores();
  renderHands();
  if (playerScore > 21) {
    endGame('Player busts! Dealer wins.');
  }
}

function playerStand() {
  dealerTurn();
}

async function dealerTurn() {
  while (dealerScore < 17) {
    await drawCard(dealerHand);
    dealerScore = calculateScore(dealerHand);
  }
  renderHands();
  if (dealerScore > 21) {
    endGame('Dealer busts! Player wins.');
  } else {
    updateScores();
    determineWinner();
  }
}

function determineWinner() {
  if (playerScore > dealerScore) {
    endGame('Player wins!');
  } else if (dealerScore > playerScore) {
    endGame('Dealer wins!');
  } else {
    endGame("It's a tie!");
  }
}

function endGame(message) {
  const statusElement = document.getElementById('status');
  const dealerElement = document.getElementById('dealer');
  const playerElement = document.getElementById('player');

  statusElement.innerText = message;

  if (message.includes('Player wins')) {
    statusElement.classList.add('winning');
    dealerElement.classList.remove('winning');
    playerElement.classList.add('winning');
  } else if (message.includes('Dealer wins')) {
    statusElement.classList.remove('winning');
    dealerElement.classList.add('winning');
    playerElement.classList.remove('winning');
  } else {
    statusElement.classList.remove('winning');
    dealerElement.classList.remove('winning');
    playerElement.classList.remove('winning');
  }

  document.getElementById('hit-button').disabled = true;
  document.getElementById('stand-button').disabled = true;
}

function checkBlackjack() {
  if (playerScore === 21) {
    endGame('Blackjack! Player wins.');
  } else if (dealerScore === 21) {
    endGame('Blackjack! Dealer wins.');
  }
}

function resetGame() {
  playerHand = [];
  dealerHand = [];
  playerScore = 0;
  dealerScore = 0;
  const statusElement = document.getElementById('status');
  const dealerElement = document.getElementById('dealer');
  const playerElement = document.getElementById('player');

  statusElement.innerText = '';
  statusElement.classList.remove('winning');
  dealerElement.classList.remove('winning');
  playerElement.classList.remove('winning');

  document.getElementById('hit-button').disabled = false;
  document.getElementById('stand-button').disabled = false;

  initializeGame();
}

initializeGame();
