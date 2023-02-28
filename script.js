// Define variables
let totalTickets = 0;
let poolSize = 0;
let timeLeft = 604800; // 1 week in seconds
let countdownInterval;

// Function to update total tickets
function updateTotalTickets(numTickets) {
  totalTickets += numTickets;
  document.getElementById("total-tickets").innerHTML = totalTickets;
}

// Function to update pool size
function updatePoolSize(numTickets) {
  poolSize += numTickets;
  document.getElementById("pool-size").innerHTML = poolSize + " ETH";
}

// Function to start countdown
function startCountdown() {
  countdownInterval = setInterval(function() {
    timeLeft--;
    const days = Math.floor(timeLeft / 86400);
    const hours = Math.floor((timeLeft % 86400) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = Math.floor(timeLeft % 60);
    const timeLeftStr = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    document.getElementById("time-left").innerHTML = timeLeftStr;
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      drawWinner();
    }
  }, 1000);
}

// Function to draw winner
function drawWinner() {
  const winningTicket = Math.floor(Math.random() * totalTickets) + 1;
  const winner = `Ticket ${winningTicket}`;
  document.getElementById("winner").innerHTML = winner;
}

// Event listener for buy tickets button
document.getElementById("buy-tickets-btn").addEventListener("click", function() {
  const numTickets = parseInt(document.getElementById("num-tickets").value);
  if (isNaN(numTickets) || numTickets < 1 || numTickets > 10) {
    alert("Please enter a valid number of tickets (1-10).");
    return;
  }
  const ticketCost = numTickets;
  const totalCost = ticketCost * numTickets;
  if (totalCost > 0) {
    updateTotalTickets(numTickets);
    updatePoolSize(totalCost);
  }
});

// Start countdown on page load
window.onload = function() {
  startCountdown();
};
