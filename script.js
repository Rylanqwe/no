let totalTickets = 0;
let ticketList = [];
let winnerList = [];

// Function to add tickets to pool
function addTickets() {
  const newTickets = parseInt(document.getElementById('ticketNumber').value);
  if (!isNaN(newTickets)) {
    totalTickets += newTickets;
    ticketList.push(newTickets);
    document.getElementById('ticketNumber').value = '';
    updateTotalTickets();
  }
}

// Function to update the total ticket count on the page
function updateTotalTickets() {
  document.getElementById('totalTickets').innerHTML = totalTickets;
}

// Function to start the timer and schedule the drawing of winners
function startTimer() {
  const timeLeft = 10 * 60; // 10 minutes in seconds
  let timeRemaining = timeLeft;
  let intervalId = setInterval(() => {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    document.getElementById('timer').innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeRemaining--;
    if (timeRemaining < 0) {
      clearInterval(intervalId);
      drawWinner();
      startTimer();
    }
  }, 1000);
}

// Function to draw a winner and reset the timer
function drawWinner() {
  if (ticketList.length > 0) {
    const winnerIndex = Math.floor(Math.random() * ticketList.length);
    const winningTicket = ticketList.splice(winnerIndex, 1)[0];
    winnerList.unshift(winningTicket);
    if (winnerList.length > 10) {
      winnerList.pop();
    }
    displayWinners();
    totalTickets -= winningTicket;
    updateTotalTickets();
    document.getElementById('winner').innerHTML = `Last winner: ${winningTicket} tickets`;
  }
}

// Function to display the list of past winners
function displayWinners() {
  let winnerHtml = '';
  for (let i = 0; i < winnerList.length; i++) {
    winnerHtml += `<li>${winnerList[i]} tickets</li>`;
  }
  document.getElementById('winnerList').innerHTML = winnerHtml;
}

document.getElementById('addTicketsButton').addEventListener('click', addTickets);
startTimer();
