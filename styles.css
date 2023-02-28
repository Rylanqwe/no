let ticketCount = 0;
let ticketCost = 10;
let poolTotal = 0;

function addTicket() {
  ticketCount++;
  updateTicketCount();
  updatePoolTotal();
}

function addTickets(numTickets) {
  ticketCount += numTickets;
  updateTicketCount();
  updatePoolTotal();
}

function updateTicketCount() {
  document.getElementById("ticket-count").innerHTML = ticketCount;
}

function updatePoolTotal() {
  poolTotal = ticketCount * ticketCost;
  document.getElementById("pool-total").innerHTML = poolTotal;
}

function countdown() {
  let drawDate = new Date("2023-03-06T00:00:00Z"); // Change this to the date and time of the next draw
  let now = new Date();
  let timeLeft = drawDate.getTime() - now.getTime();

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  setTimeout(countdown, 1000);
}

countdown();
