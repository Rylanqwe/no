const ticketCount = document.getElementById("ticket-count");
const ticketNum = document.getElementById("ticket-num");
const addTicketBtn = document.getElementById("add-ticket-btn");
const timerMinutes = document.getElementById("timer-minutes");
const timerSeconds = document.getElementById("timer-seconds");
const lastWinner = document.getElementById("last-winner");
const winnerList = document.getElementById("winner-list");

let totalTickets = 0;
let countdown;

function addTicket() {
  const numTickets = parseInt(ticketNum.value);
  if (numTickets > 0) {
    totalTickets += numTickets;
    ticketCount.innerText = totalTickets;
    ticketNum.value = "";
  }
}

function countdownTimer() {
  let minutes = 10;
  let seconds = 0;
  countdown = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        drawWinner();
        minutes = 10;
      } else {
        minutes--;
        seconds = 59
