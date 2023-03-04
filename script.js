// Initialize variables
let totalTickets = 0;
let ticketsInPool = 0;
let ticketsThisRound = 0;
let drawInterval = 600000; // 10 minutes in milliseconds
let timeToDraw = drawInterval;

// Initialize HTML elements
const buyBtn = document.querySelector(".buy-btn");
const ticketCount = document.querySelector(".ticket-count");
const totalPool = document.querySelector(".total-pool");
const drawTimer = document.querySelector(".draw-timer");

// Add event listener to buy button
buyBtn.addEventListener("click", () => {
  const input = prompt("How many tickets would you like to buy?");
  const numTickets = parseInt(input);

  // Verify input is a number
  if (isNaN(numTickets)) {
    alert("Please enter a valid number.");
    return;
  }

  // Add tickets to total ticket count
  totalTickets += numTickets;

  // Add tickets to pool and update tickets in pool display
  ticketsInPool += numTickets;
  ticketCount.textContent = ticketsInPool;

  // Update total pool display
  totalPool.textContent = `$${ticketsInPool}`;

  // Clear ticket count for next round
  ticketsThisRound = 0;
});

// Function to update draw timer
function updateDrawTimer() {
  // Decrement time to draw
  timeToDraw -= 1000;

  // Check if it's time to draw
  if (timeToDraw <= 0) {
    // Randomly select a winner
    const winner = Math.floor(Math.random() * ticketsInPool) + 1;
    alert(`Congratulations to ticket number ${winner}!`);

    // Clear tickets and update displays
    ticketsInPool = 0;
    ticketCount.textContent = 0;
    totalPool.textContent = "$0";

    // Reset time to draw
    timeToDraw = drawInterval;
  }

  // Update draw timer display
  const minutes = Math.floor(timeToDraw / 60000);
  const seconds = Math.floor((timeToDraw % 60000) / 1000);
  drawTimer.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Update draw timer every second
setInterval(updateDrawTimer, 1000);
