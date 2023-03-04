// set up variables
let ticketPrice = 1;
let poolTotal = 0;
let ticketsPurchased = 0;
let tickets = [];
let drawTime = 10; // minutes

// set up functions
function buyTickets(numTickets) {
  // add tickets to array
  for (let i = 0; i < numTickets; i++) {
    tickets.push("Ticket " + (ticketsPurchased + 1 + i));
  }
  // update tickets purchased and pool total
  ticketsPurchased += numTickets;
  poolTotal += numTickets * ticketPrice;
  document.getElementById("tickets-purchased").innerHTML = ticketsPurchased;
  document.getElementById("pool-total").innerHTML = "$" + poolTotal;
}

function clearTickets() {
  tickets = [];
  ticketsPurchased = 0;
  document.getElementById("tickets-purchased").innerHTML = ticketsPurchased;
}

function updateDrawTime() {
  let currentTime = new Date();
  let nextDrawTime = new Date();
  nextDrawTime.setMinutes(Math.ceil(currentTime.getMinutes() / drawTime) * drawTime);
  nextDrawTime.setSeconds(0);
  nextDrawTime.setMilliseconds(0);

  let timeRemaining = Math.ceil((nextDrawTime.getTime() - currentTime.getTime()) / 1000);

  let minutesRemaining = Math.floor(timeRemaining / 60);
  let secondsRemaining = timeRemaining % 60;

  document.getElementById("draw-timer").innerHTML = "Next draw in " + minutesRemaining + " minutes and " + secondsRemaining + " seconds";
}

function performDraw() {
  // randomly select winner
  let winnerIndex = Math.floor(Math.random() * ticketsPurchased);
  let winner = tickets[winnerIndex];
  
  // update pool total and tickets purchased
  poolTotal = 0;
  ticketsPurchased = 0;
  document.getElementById("pool-total").innerHTML = "$" + poolTotal;
  document.getElementById("tickets-purchased").innerHTML = ticketsPurchased;
  
  // clear tickets array
  tickets = [];
  
  // update winner display
  document.getElementById("winner").innerHTML = "The winner is " + winner;
}

// set up event listeners
document.getElementById("buy-button").addEventListener("click", function() {
  let numTickets = parseInt(document.getElementById("num-tickets").value);
  buyTickets(numTickets);
});

document.getElementById("clear-button").addEventListener("click", function() {
  clearTickets();
});

// set up draw timer
updateDrawTime();
setInterval(function() {
  updateDrawTime();
  if (new Date().getSeconds() === 0) {
    performDraw();
  }
}, 1000);
