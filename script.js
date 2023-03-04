// Global variables
var ticketCount = 0;
var tickets = [];

// Function to load tickets from local storage
function loadTickets() {
	if (localStorage.getItem("tickets")) {
		tickets = JSON.parse(localStorage.getItem("tickets"));
		ticketCount = tickets.length;
		updateTicketCount();
	}
}

// Function to add tickets
function addTickets() {
	var input = document.getElementById("ticket-input").value.trim().split("\n");
	for (var i = 0; i < input.length; i++) {
		var ticket = input[i].trim();
		if (ticket != "" && !tickets.includes(ticket)) {
			tickets.push(ticket);
			ticketCount++;
		}
	}
	localStorage.setItem("tickets", JSON.stringify(tickets));
	updateTicketCount();
	document.getElementById("ticket-input").value = "";
}

// Function to clear tickets
function clearTickets() {
	tickets = [];
	ticketCount = 0;
	localStorage.removeItem("tickets");
	updateTicketCount();
}

// Function to update ticket count display
function updateTicketCount() {
	document.getElementById("ticket-count").innerHTML = ticketCount;
}

// Function to start the timer
function startTimer() {
	var minutes = 10;
	var seconds = 0;
	setInterval(function() {
		if (seconds == 0) {
			minutes--;
			seconds = 59;
		} else {
			seconds--;
		}
		var timerDisplay = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
		document.getElementById("timer").innerHTML = timerDisplay;
		if (minutes == 0 && seconds == 0) {
			drawWinner();
			minutes = 10;
			seconds = 0;
		}
	}, 1000);
}

// Function to draw a winner
function drawWinner() {
	var winnerIndex = Math.floor(Math.random() * ticketCount);
	var winnerName = tickets[winnerIndex];
	document.getElementById("winner-name").innerHTML = winnerName;
	clearTickets();
	loadTickets();
}

loadTickets();
