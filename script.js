// Lottery game logic

const TICKET_PRICE = 1;

let tickets = [];
let totalTickets = 0;
let winners = [];

let countdown;

function addTicket() {
  const count = parseInt(document.getElementById("ticketCount").value);
  if (!isNaN(count) && count > 0) {
    for (let i = 0; i < count; i++) {
      tickets.push(Math.floor(Math.random() * 1000));
    }
    totalTickets += count;
    document.getElementById("totalTickets").innerText = totalTickets;
    document.getElementById("ticketCount").value = "";
  }
}

function startTimer() {
  const TEN_MINUTES = 600;
  let timeLeft = TEN_MINUTES;
  countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("timer").innerText = `${minutes}:${seconds}`;
    timeLeft--;
    if (timeLeft < 0) {
      drawWinner();
      timeLeft = TEN_MINUTES;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
}

function drawWinner() {
  if (tickets.length > 0) {
    const winnerIndex = Math.floor(Math.random() * tickets.length);
    const winner = tickets[winnerIndex];
    winners.push(winner);
    if (winners.length > 10) {
      winners.shift();
    }
    document.getElementById("winners").innerText = winners.join(", ");
    tickets = [];
    totalTickets = 0;
    document.getElementById("totalTickets").innerText = totalTickets;
    document.getElementById("ticketCount").value = "";
    stopTimer();
    startTimer();
    document.getElementById("winner").innerText = winner;
  }
}

// Event listeners

document.getElementById("addTicketBtn").addEventListener("click", addTicket);
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
