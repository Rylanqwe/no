// Set up variables
let poolTotal = 0;
let ticketsSold = 0;
let countdownIntervalId;
let nextDrawTime = Date.now() + 10 * 60 * 1000; // 10 minutes from now

// Get elements from HTML
const poolTotalElem = document.getElementById('pool-total');
const ticketForm = document.getElementById('ticket-form');
const buyBtn = document.getElementById('buy-btn');
const winnerNameElem = document.getElementById('winner-name');
const countdownTimerElem = document.getElementById('countdown-timer');

// Function to handle buying tickets
function buyTickets(event) {
  event.preventDefault();
  const numTickets = parseInt(document.getElementById('num-tickets').value);
  if (numTickets) {
    poolTotal += numTickets;
    ticketsSold += numTickets;
    updatePoolTotal();
    document.getElementById('num-tickets').value = '';
  }
}

// Function to update pool total on HTML
function updatePoolTotal() {
  poolTotalElem.innerText = '$' + poolTotal;
}

// Function to choose a random winner
function chooseWinner() {
  const winnerNumber = Math.floor(Math.random() * ticketsSold) + 1;
  winnerNameElem.innerText = 'Ticket ' + winnerNumber;
  resetPool();
}

// Function to reset pool and clear tickets
function resetPool() {
  poolTotal = 0;
  ticketsSold = 0;
  updatePoolTotal();
}

// Function to update countdown timer
function updateCountdown() {
  const currentTime = Date.now();
  const timeDifference = nextDrawTime - currentTime;
  if (timeDifference <= 0) {
    chooseWinner();
    nextDrawTime = currentTime + 10 * 60 * 1000;
  }
  const minutes = Math.floor(timeDifference / 60000);
  const seconds = Math.floor((timeDifference % 60000) / 1000);
  countdownTimerElem.innerText = minutes + 'm ' + seconds + 's';
}

// Add event listeners
ticketForm.addEventListener('submit', buyTickets);

// Start countdown timer
countdownIntervalId = setInterval(updateCountdown, 1000);
