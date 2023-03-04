// Global Variables
let ticketCount = 0;
let poolTotal = 0;
let drawTimer;

// Function to add tickets to the pool
function addTickets() {
  let numTickets = parseInt(prompt("How many tickets would you like to add?"));
  if (numTickets > 0) {
    ticketCount += numTickets;
    poolTotal += numTickets * 10;
    updatePool();
  }
}

// Function to clear all tickets from the pool
function clearTickets() {
  ticketCount = 0;
  poolTotal = 0;
  updatePool();
}

// Function to update the pool total
function updatePool() {
  let poolTotalElem = document.querySelector(".pool-total");
  poolTotalElem.innerText = "$" + poolTotal;
}

// Function to start the draw timer
function startDrawTimer() {
  let now = new Date();
  let drawDate = new Date();
  drawDate.setDate(now.getDate() + 7); // Set draw date to 7 days from now

  let timeDiff = drawDate.getTime() - now.getTime();
  let seconds = Math.floor(timeDiff / 1000);

  drawTimer = setInterval(function () {
    seconds--;
    let timerElem = document.querySelector("#timer");
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    timerElem.innerText = minutes + "m " + remainingSeconds + "s";
    if (seconds <= 0) {
      clearInterval(drawTimer);
      drawWinner();
    }
  }, 1000);
}

// Function to draw the winner
function drawWinner() {
  let winningTicket = Math.floor(Math.random() * ticketCount) + 1;
  alert("Ticket #" + winningTicket + " wins the pool of $" + poolTotal);
  clearTickets();
  startDrawTimer();
}

// Start the draw timer on page load
window.onload = function () {
  startDrawTimer();
};
