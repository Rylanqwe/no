let ticketCount = 0;
let ticketCost = 10;
let poolTotal = 0;

function addTicket() {
  ticketCount++;
  updateTicketCount();
  updatePoolTotal();
}

function addTickets(numTickets) {
  ticketCount += numTickets;
  updateTicketCount();
  updatePoolTotal();
}

function updateTicketCount() {
  document.getElementById("ticket-count").innerHTML = ticketCount;
}

function updatePoolTotal() {
  poolTotal = ticketCount * ticketCost;
  document.getElementById("pool-total").innerHTML = poolTotal;
}

function countdown() {
  let drawDate = new Date("2023-03-06T00:00:00Z"); // Change this to the date and time of the next draw
  let now = new Date();
  let timeLeft = drawDate.getTime() - now.getTime();

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  setTimeout(countdown, 1000);
}

countdown();

// Other existing code can go here



// get DOM elements
const ticketCountEl = document.getElementById('ticket-count');
const ticketFormEl = document.getElementById('ticket-form');
const ticketInputEl = document.getElementById('ticket-input');
const poolTotalEl = document.getElementById('pool-total');
const winnerDisplayEl = document.getElementById('winner-display');
const timerDisplayEl = document.getElementById('timer-display');

// initialize variables
let ticketCount = 0;
let poolTotal = 0;
let ticketsBought = [];

// function to update ticket count and pool total
function updateTicketCountAndPoolTotal() {
  ticketCountEl.innerText = ticketCount;
  poolTotalEl.innerText = `$${poolTotal.toFixed(2)}`;
}

// function to add tickets to pool
function addTicketsToPool(ticketNumber) {
  ticketsBought = ticketsBought.concat(Array.from({ length: ticketNumber }, (_, i) => i + ticketCount + 1));
  ticketCount += ticketNumber;
  poolTotal += ticketNumber * 2;
  updateTicketCountAndPoolTotal();
}

// function to select a winner
function selectWinner() {
  const winningTicketIndex = Math.floor(Math.random() * ticketsBought.length);
  const winningTicketNumber = ticketsBought[winningTicketIndex];
  winnerDisplayEl.innerText = `The winner is ticket number ${winningTicketNumber}!`;
}

// function to start timer
function startTimer() {
  const now = new Date();
  const nextDraw = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 20, 0, 0); // every 7 days at 8pm
  const timeUntilNextDraw = nextDraw - now;
  
  let secondsLeft = Math.floor(timeUntilNextDraw / 1000);
  let minutesLeft = Math.floor(secondsLeft / 60);
  let hoursLeft = Math.floor(minutesLeft / 60);
  let daysLeft = Math.floor(hoursLeft / 24);

  hoursLeft %= 24;
  minutesLeft %= 60;
  secondsLeft %= 60;

  timerDisplayEl.innerText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;

  setInterval(() => {
    secondsLeft--;
    if (secondsLeft < 0) {
      secondsLeft = 59;
      minutesLeft--;
      if (minutesLeft < 0) {
        minutesLeft = 59;
        hoursLeft--;
        if (hoursLeft < 0) {
          hoursLeft = 23;
          daysLeft--;
          if (daysLeft < 0) {
            clearInterval(timer);
            timerDisplayEl.innerText = 'Draw over!';
          }
        }
      }
    }
    timerDisplayEl.innerText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  }, 1000);
}

// handle form submission
ticketFormEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const ticketNumber = parseInt(ticketInputEl.value);
  if (!isNaN(ticketNumber) && ticketNumber > 0) {
    addTicketsToPool(ticketNumber);
    ticketInputEl.value = '';
  }
});

// select winner on click
setInterval(() => {
  const now = new Date();
  if (now.getDay() === 4 && now.getHours() === 20 && now.getMinutes() === 0 && now.getSeconds() === 0) { // every Thursday at 8pm
    selectWinner();
    startTimer();
  }
}, 1000);
// get DOM elements
const ticketCountEl = document.getElementById('ticket-count');
const ticketFormEl = document.getElementById('ticket-form');
const ticketInputEl = document.getElementById('ticket-input');
const poolTotalEl = document.getElementById('pool-total');
const winnerDisplayEl = document.getElementById('winner-display');
const timerDisplayEl = document.getElementById('timer-display');

// initialize variables
let ticketCount = 0;
let poolTotal = 0;
let ticketsBought = [];

// function to update ticket count and pool total
function updateTicketCountAndPoolTotal() {
  ticketCountEl.innerText = ticketCount;
  poolTotalEl.innerText = `$${poolTotal.toFixed(2)}`;
}

// function to add tickets to pool
function addTicketsToPool(ticketNumber) {
  ticketsBought = ticketsBought.concat(Array.from({ length: ticketNumber }, (_, i) => i + ticketCount + 1));
  ticketCount += ticketNumber;
  poolTotal += ticketNumber * 2;
  updateTicketCountAndPoolTotal();
}

// function to select a winner
function selectWinner() {
  const winningTicketIndex = Math.floor(Math.random() * ticketsBought.length);
  const winningTicketNumber = ticketsBought[winningTicketIndex];
  winnerDisplayEl.innerText = `The winner is ticket number ${winningTicketNumber}!`;
}

// function to start timer
function startTimer() {
  const now = new Date();
  const nextDraw = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 20, 0, 0); // every 7 days at 8pm
  const timeUntilNextDraw = nextDraw - now;
  
  let secondsLeft = Math.floor(timeUntilNextDraw / 1000);
  let minutesLeft = Math.floor(secondsLeft / 60);
  let hoursLeft = Math.floor(minutesLeft / 60);
  let daysLeft = Math.floor(hoursLeft / 24);

  hoursLeft %= 24;
  minutesLeft %= 60;
  secondsLeft %= 60;

  timerDisplayEl.innerText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;

  setInterval(() => {
    secondsLeft--;
    if (secondsLeft < 0) {
      secondsLeft = 59;
      minutesLeft--;
      if (minutesLeft < 0) {
        minutesLeft = 59;
        hoursLeft--;
        if (hoursLeft < 0) {
          hoursLeft = 23;
          daysLeft--;
          if (daysLeft < 0) {
            clearInterval(timer);
            timerDisplayEl.innerText = 'Draw over!';
          }
        }
      }
    }
    timerDisplayEl.innerText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  }, 1000);
}

// handle form submission
ticketFormEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const ticketNumber = parseInt(ticketInputEl.value);
  if (!isNaN(ticketNumber) && ticketNumber > 0) {
    addTicketsToPool(ticketNumber);
    ticketInputEl.value = '';
  }
});

// select winner on click
setInterval(() => {
  const now = new Date();
  if (now.getDay() === 4 && now.getHours() === 20 && now.getMinutes() === 0 && now.getSeconds() === 0) { // every Thursday at 8pm
    selectWinner();
    startTimer();
  }
}, 1000);
