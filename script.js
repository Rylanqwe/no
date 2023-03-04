// Initialize variables
let totalTickets = 0;
let winningTickets = [];

// Function to add tickets to the pool
function addTickets() {
  let numTickets = parseInt(document.getElementById("numTickets").value);
  if (isNaN(numTickets)) {
    alert("Please enter a valid number of tickets.");
  } else if (numTickets < 1) {
    alert("Please enter a positive number of tickets.");
  } else {
    totalTickets += numTickets;
    document.getElementById("totalTickets").innerHTML = totalTickets;
  }
}

// Function to start the timer
function startTimer() {
  let timeLeft = 600;
  let minutes, seconds;

  let timerInterval = setInterval(function() {
    minutes = Math.floor(timeLeft / 60);
    seconds = timeLeft % 60;

    document.getElementById("timer").innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      drawWinner();
      startTimer();
    }
  }, 1000);
}

// Function to draw a winner
function drawWinner() {
  let winningTicket = Math.floor(Math.random() * totalTickets) + 1;
  winningTickets.push(winningTicket);

  if (winningTickets.length > 10) {
    winningTickets.shift();
  }

  let winnersList = "";
  for (let i = 0; i < winningTickets.length; i++) {
    winnersList += `<li>${winningTickets[i]}</li>`;
  }

  document.getElementById("winnersList").innerHTML = winnersList;
}

// Add event listeners to buttons
document.getElementById("addTicketsButton").addEventListener("click", addTickets);
document.getElementById("startButton").addEventListener("click", startTimer);
