let pool = [];

function addTicket() {
  let ticketInput = document.getElementById("ticket-input");
  let ticketError = document.getElementById("ticket-error");

  if (isNaN(ticketInput.value) || ticketInput.value == "") {
    ticketError.innerHTML = "Please enter a valid ticket number.";
    return;
  }

  let ticketNumber = parseInt(ticketInput.value);

  if (pool.includes(ticketNumber)) {
    ticketError.innerHTML = "This ticket number is already in the pool.";
    return;
  }

  pool.push(ticketNumber);
  ticketInput.value = "";
  ticketError.innerHTML = "";
  document.getElementById("pool-size").innerHTML = pool.length;
}

function drawWinner() {
  if (pool.length == 0) {
    document.getElementById("winner").innerHTML = "No tickets in the pool.";
    return;
  }

  let winnerIndex = Math.floor(Math.random() * pool.length);
  let winner = pool[winnerIndex];
  pool = [];

  document.getElementById("winner").innerHTML = "The winner is ticket number " + winner + "!";
  document.getElementById("pool-size").innerHTML = pool.length;

  let countDownDate = new Date().getTime() + 600000; // 10 minutes from now

  let x = setInterval(function() {
   
