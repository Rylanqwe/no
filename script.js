// Get HTML elements
const addTicketBtn = document.getElementById('add-ticket-btn');
const totalTicketsDisplay = document.getElementById('total-tickets');
const timerDisplay = document.getElementById('timer-display');
const winnersList = document.getElementById('winners-list');

// Set up variables
let totalTickets = 0;
let secondsRemaining = 600;
let isTimerRunning = true;
let winners = [];

// Functions
function addTicket() {
	const ticketCount = parseInt(prompt('How many tickets would you like to add?'));
	if (!isNaN(ticketCount)) {
		totalTickets += ticketCount;
		totalTicketsDisplay.textContent = totalTickets;
	}
}

function startTimer() {
	setInterval(function() {
		if (secondsRemaining <= 0) {
			drawWinner();
			resetTimer();
		} else {
			secondsRemaining--;
			const minutes = Math.floor(secondsRemaining / 60);
			const seconds = secondsRemaining % 60;
			timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
		}
	}, 1000);
}

function drawWinner() {
	if (totalTickets > 0) {
		const winningTicket = Math.floor(Math.random() * totalTickets) + 1;
		winners.unshift(winningTicket);
		if (winners.length > 10) {
			winners.pop();
		}
		renderWinners();
		alert(`Winner: Ticket #${winningTicket}`);
	} else {
	
