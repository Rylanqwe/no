// Define variables
let poolSize = 0;
let tickets = [];
let weeklyDraw = null;
let timerInterval = null;
const drawDay = 5; // Friday
const drawHour = 20; // 8pm
const ticketPrice = 10;
const poolDisplay = document.getElementById('pool-size');
const timerDisplay = document.getElementById('timer');
const ticketCountDisplay = document.getElementById('ticket-count');
const buyForm = document.getElementById('buy-form');
const buyInput = document.getElementById('buy-input');
const buyButton = document.getElementById('buy-button');

// Function to update pool size display
function updatePoolDisplay() {
  poolDisplay.textContent = `$${poolSize}`;
}

// Function to add tickets to the pool
function addTickets(count) {
  const newTickets = Array(count).fill().map((_, index) => ({
    number: tickets.length + index + 1,
  }));
  tickets.push(...newTickets);
  poolSize += count * ticketPrice;
  updatePoolDisplay();
}

// Function to update ticket count display
function updateTicketCountDisplay() {
  ticketCountDisplay.textContent = tickets.length;
}

// Function to handle buying form submission
function handleBuyFormSubmit(event) {
  event.preventDefault();
  const count = parseInt(buyInput.value, 10);
  if (isNaN(count) || count <= 0) {
    alert('Please enter a valid ticket count.');
    return;
  }
  addTickets(count);
  updateTicketCountDisplay();
  buyInput.value = '';
}

// Function to pick a random winner and reset the pool
function pickWinner() {
  const winnerIndex = Math.floor(Math.random() * tickets.length);
  const winner = tickets[winnerIndex];
  alert(`The winner is ticket number ${winner.number}!`);
  tickets = [];
  poolSize = 0;
  updatePoolDisplay();
  updateTicketCountDisplay();
}

// Function to check if it's time for the weekly draw
function checkWeeklyDraw() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // Sunday is 0, Saturday is 6
  const hourOfDay = now.getHours();
  if (dayOfWeek === drawDay && hourOfDay >= drawHour) {
    clearInterval(timerInterval);
    pickWinner();
    scheduleNextWeeklyDraw();
  } else {
    const nextDrawDate = getNextWeeklyDrawDate();
    const timeLeft = nextDrawDate - now;
    const secondsLeft = Math.floor(timeLeft / 1000);
    const minutesLeft = Math.floor(secondsLeft / 60);
    const hoursLeft = Math.floor(minutesLeft / 60);
    const daysLeft = Math.floor(hoursLeft / 24);
    const remainingTime = `${daysLeft} days, ${hoursLeft % 24} hours, ${minutesLeft % 60} minutes, ${secondsLeft % 60} seconds`;
    timerDisplay.textContent = `Next draw in: ${remainingTime}`;
  }
}

// Function to schedule the next weekly draw
function scheduleNextWeeklyDraw() {
  const nextDrawDate = getNextWeeklyDrawDate();
  const timeUntilDraw = nextDrawDate - Date.now();
  timerInterval = setInterval(checkWeeklyDraw, 1000);
  setTimeout(pickWinner, timeUntilDraw);
}

// Function to get the date of the next weekly draw
function getNextWeeklyDrawDate() {
  const now = new Date();
  let nextDrawDate = new Date(now);
  if (now.getDay() > drawDay || (now.getDay() === drawDay && now.getHours() >= drawHour)) {
    nextDrawDate.setDate(now.getDate() + (7 - now.getDay() + draw
