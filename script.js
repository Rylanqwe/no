let ticketCount = 0;
let pool = [];

function addTicket() {
  ticketCount++;
  pool.push(ticketCount);
  document.getElementById("ticketCount").innerHTML = ticketCount;
  document.getElementById("poolSize").innerHTML = pool.length;
}

function drawWinner() {
  if (pool.length > 0) {
    const winner = pool[Math.floor(Math.random() * pool.length)];
    document.getElementById("winner").innerHTML = winner;
    pool = [];
    ticketCount = 0;
    document.getElementById("ticketCount").innerHTML = ticketCount;
    document.getElementById("poolSize").innerHTML = pool.length;
  }
}

setInterval(function() {
  drawWinner();
}, 600000); // 10 minutes in milliseconds

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      drawWinner();
    }
  }, 1000);
}

window.onload = function () {
  var tenMinutes = 60 * 10,
      display = document.querySelector('#time');
  startTimer(tenMinutes, display);
};
