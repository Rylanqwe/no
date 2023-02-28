// Define variables
let ticketPrice = 1;
let ticketCount = 0;
let totalPool = 0;
let ticketsBought = 0;
let timerInterval = null;

// Get HTML elements
const buyButton = document.getElementById("buy-button");
const ticketCountDisplay = document.getElementById("ticket-count");
const totalPoolDisplay = document.getElementById("total-pool");
const countdownDisplay = document.getElementById("countdown");
const drawWinnerButton = document.getElementById("draw-winner-button");

// Function to add tickets to the pool
function addTickets(numTickets) {
  ticketCount += numTickets;
  totalPool += ticketPrice * numTickets;
  ticketsBought += numTickets;
  updateDisplays();
}

// Function to update HTML displays
function updateDisplays() {
  ticketCountDisplay.innerHTML = ticketCount;
  totalPoolDisplay.innerHTML = totalPool.toFixed(2);
}

// Function to start the countdown timer
function startTimer() {
  const oneWeek = 604800000;
  let drawDate = new Date().getTime() + oneWeek;

  timerInterval = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = drawDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownDisplay.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      countdownDisplay.innerHTML = "EXPIRED";
      drawWinner();
    }
  }, 1000);
}

// Function to draw the winner
function drawWinner() {
  let winningTicket = Math.floor(Math.random() * ticketCount) + 1;
  alert("The winner is ticket number " + winningTicket);
}

// Event listener for buy button
buyButton.addEventListener("click", function() {
  addTickets(1);
});

// Start the timer on page load
window.onload = startTimer;
