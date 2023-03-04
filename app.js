var ticketCount = 0;
var tickets = [];
var timer;

function addTicket() {
	var numTickets = parseInt(document.getElementById("numTickets").value);
	for (var i = 0; i < numTickets; i++) {
		tickets.push(++ticketCount);
	}
	document.getElementById("ticketCount").innerHTML = ticketCount;
	document.getElementById("numTickets").value = "";
}

function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.querySelector("#minutes").innerHTML = minutes;
		display.querySelector("#seconds").innerHTML = seconds;

		if (--timer < 0
