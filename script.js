let ticketPool = [];

function addTicket() {
  let ticketNumber = document.getElementById("ticket-input").value;
  if (ticketNumber !== "") {
    ticketPool.push(parseInt(ticketNumber));
    document.getElementById("ticket-pool").innerHTML = "";
    for (let i = 0; i < ticketPool.length; i++) {
      let listItem = document.createElement("li");
      listItem.innerText = ticketPool[i];
      document.getElementById("ticket-pool").appendChild(listItem);
    }
  }
}

function clearTickets() {
  ticketPool = [];
  document.getElementById("ticket-pool").innerHTML = "";
}

function drawWinner() {
  let winner = ticketPool[Math.floor(Math.random() * ticketPool.length)];
  document.getElementById("winner").innerText = winner;
  clearTickets();
}

function updateCountdown() {
  let countdownElement = document.getElementById("countdown");
  let seconds = 600;
  let countdownInterval = setInterval(function() {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    countdownElement.innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    seconds--;
    if (seconds < 0) {
      clearInterval(countdownInterval);
      drawWinner();
      updateCountdown();
    }
  }, 1000);
}

document.getElementById("add-ticket-button").addEventListener("click", addTicket);
document.getElementById("clear-tickets-button").addEventListener("click", clearTickets);

updateCountdown();
