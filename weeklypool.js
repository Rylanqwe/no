// Set up variables
let ticketCount = 0;
const ticketPrice = 1;

// Set up functions
function addTickets() {
  const input = document.querySelector('input[type="number"]');
  const numTickets = Number(input.value);
  ticketCount += numTickets;
  updateTicketCount();
  input.value = "";
}

function updateTicketCount() {
  const countElement = document.getElementById("ticketCount");
  countElement.textContent = ticketCount;
}

function buyTickets() {
  const totalCost = ticketCount * ticketPrice;
  alert(`Total cost: $${totalCost.toFixed(2)}`);
  ticketCount = 0;
  updateTicketCount();
}

function drawWinner() {
  const winner = Math.floor(Math.random() * ticketCount) + 1;
  alert(`The winner is ticket number ${winner}!`);
  ticketCount = 0;
  updateTicketCount();
}

// Set up DOM event listeners
document.getElementById("addTickets").addEventListener("click", addTickets);
document.getElementById("buyTickets").addEventListener("click", buyTickets);
document.getElementById("drawWinner").addEventListener("click", drawWinner);

// Set up countdown timer
const timerElement = document.getElementById("countdown");
const endTime = new Date("2023-03-01T00:00:00Z").getTime();
const intervalId = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = endTime - now;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (timeRemaining < 0) {
    clearInterval(intervalId);
    timerElement.textContent = "EXPIRED";
  }
}, 1000);
