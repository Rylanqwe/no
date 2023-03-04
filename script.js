// Initialize variables
let ticketPool = 0;
let tickets = [];

// Get HTML elements
const ticketPoolElement = document.getElementById('ticket-pool');
const ticketCountElement = document.getElementById('ticket-count');
const ticketInput = document.getElementById('ticket-input');
const drawTimeElement = document.getElementById('draw-time');

// Function to add tickets to the pool
function addTickets() {
  const newTickets = parseInt(ticketInput.value);
  if (!isNaN(newTickets) && newTickets > 0) {
    tickets = [...tickets, ...Array(newTickets).fill(tickets.length)];
    ticketCountElement.innerText = tickets.length;
    ticketInput.value = "";
    updateTicketPool();
  }
}

// Function to update ticket pool display
function updateTicketPool() {
  ticketPool = tickets.length;
  ticketPoolElement.innerText = ticketPool;
}

// Function to start draw timer
function startDrawTimer() {
  let secondsLeft = 10 * 60;
  let minutes, seconds;

  function countdown() {
    minutes = Math.floor(secondsLeft / 60);
    seconds = secondsLeft % 60;

    drawTimeElement.innerText = `${minutes}m ${seconds}s`;

    if (secondsLeft === 0) {
      drawWinner();
      secondsLeft = 10 * 60;
      updateTicketPool();
    } else {
      secondsLeft--;
      setTimeout(countdown, 1000);
    }
  }

  countdown();
}

// Function to draw a winner
function drawWinner() {
  const winnerIndex = Math.floor(Math.random() * ticketPool);
  const winnerTicket = tickets[winnerIndex];
  alert(`The winner is ticket number ${winnerTicket}!`);
  tickets = [];
  ticketCountElement.innerText = 0;
}

// Add event listeners
document.getElementById('add-tickets-btn').addEventListener('click', addTickets);

// Start draw timer on page load
startDrawTimer();
