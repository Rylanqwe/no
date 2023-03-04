// define variables
let ticketCount = 0;
let winningTickets = [];
let interval;

// define functions
function addTicket() {
  const input = document.getElementById("numTickets");
  const numTickets = parseInt(input.value);
  if (isNaN(numTickets) || numTickets < 1) {
    alert("Please enter a valid number of tickets.");
    return;
  }
  ticketCount += numTickets;
  document.getElementById("ticketCount").textContent = ticketCount;
  input.value = "";
}

function startTimer() {
  let seconds = 10 * 60;
  interval = setInterval(() => {
    const minutesRemaining = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    document.getElementById("timer").textContent = `${minutesRemaining
      .toString()
      .padStart(2, "0")}:${secondsRemaining.toString().padStart(2, "0")}`;
    seconds--;
    if (seconds < 0) {
      clearInterval(interval);
      drawWinner();
      startTimer();
    }
  }, 1000);
}

function drawWinner() {
  const winner = Math.floor(Math.random() * ticketCount) + 1;
  winningTickets.push(winner);
  if (winningTickets.length > 10) {
    winningTickets.shift();
  }
  const winnerList = document.getElementById("winnerList");
  winnerList.textContent = "";
  for (let i = winningTickets.length - 1; i >= 0; i--) {
    const li = document.createElement("li");
    li.textContent = `#${winningTickets[i]}`;
    winnerList.appendChild(li);
  }
  document.getElementById("winner").textContent = `#${winner}`;
  ticketCount = 0;
  document.getElementById("ticketCount").textContent = ticketCount;
}

// attach event listeners
document.getElementById("addTickets").addEventListener("click", addTicket);
document.getElementById("startTimer").addEventListener("click", startTimer);
