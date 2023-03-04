// Get elements from the DOM
const addTicketBtn = document.getElementById('addTicketBtn');
const ticketCountEl = document.getElementById('ticketCount');
const timeLeftEl = document.getElementById('timeLeft');
const listEl = document.getElementById('list');

// Variables to store state
let ticketCount = 0;
let winningTickets = [];

// Add a ticket to the pool
function addTicket() {
  ticketCount++;
  ticketCountEl.textContent = ticketCount;
}

// Draw a winner and reset the ticket pool and timer
function drawWinner() {
  const winningTicket = Math.floor(Math.random() * ticketCount) + 1;
  winningTickets.unshift(winningTicket);
  if (winningTickets.length > 10) {
    winningTickets.pop();
  }
  listEl.innerHTML = '';
  winningTickets.forEach(ticket => {
    const li = document.createElement('li');
    li.textContent = ticket;
    listEl.appendChild(li);
  });
  ticketCount = 0;
  ticketCountEl.textContent = ticketCount;
  startTimer();
}

// Start the timer
function startTimer() {
  let timeLeft = 600; // 10 minutes in seconds
  const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeLeftEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      drawWinner();
    }
  }, 1000);
}

// Add event listener to the add ticket button
addTicketBtn.addEventListener('click', addTicket);

// Start
