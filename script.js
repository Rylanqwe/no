let ticketCounter = 0;
let poolTickets = [];
let timeLeft = 604800; // 1 week in seconds
let countdownInterval;

function buyTickets() {
  const tickets = parseInt(document.getElementById("ticket-quantity").value);
  if (!isNaN(tickets) && tickets > 0) {
    ticketCounter += tickets;
    poolTickets.push(...new Array(tickets).fill(ticketCounter));
    document.getElementById("ticket-counter").innerHTML = ticketCounter;
    document.getElementById("pool-size").innerHTML = poolTickets.length;
  }
}

function drawWinner() {
  if (poolTickets.length > 0) {
    const winnerIndex = Math.floor(Math.random() * poolTickets.length);
    const winner = poolTickets.splice(winnerIndex, 1)[0];
    document.getElementById("winner-display").innerHTML = winner;
    document.getElementById("pool-size").innerHTML = poolTickets.length;
  }
}

function startCountdown() {
  countdownInterval = setInterval(() => {
    timeLeft -= 1;
    if (timeLeft < 0) {
      timeLeft = 604800;
      drawWinner();
    }
    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;
    document.getElementById("countdown").innerHTML = `Next draw in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
  }, 1000);
}

startCountdown();
