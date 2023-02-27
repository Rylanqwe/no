<!-- HTML form for users to select the number of tickets -->
<form id="ticket-form">
  <label for="num-tickets">Number of tickets:</label>
  <input type="number" id="num-tickets" name="num-tickets" min="1" max="10">
  <button type="submit">Add tickets to pool</button>
</form>

<!-- HTML display for the current number of tickets in the pool -->
<div id="ticket-count"></div>

<!-- HTML display for the winning ticket number -->
<div id="winning-ticket"></div>

<script>
  // Define a global array to store the ticket numbers in the pool
  var ticketPool = [];

  // Define a function to update the display of the ticket count
  function updateTicketCount() {
    var ticketCountDisplay = document.getElementById("ticket-count");
    ticketCountDisplay.innerText = "Number of tickets in pool: " + ticketPool.length;
  }

  // Define an event listener for the form submission
  var ticketForm = document.getElementById("ticket-form");
  ticketForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var numTickets = parseInt(document.getElementById("num-tickets").value);
    for (var i = 0; i < numTickets; i++) {
      // Generate a random ticket number and add it to the pool
      var newTicketNumber = Math.floor(Math.random() * 1000000);
      ticketPool.push(newTicketNumber);
    }
    updateTicketCount();
  });

  // Define a function to conduct the weekly draw
  function conductWeeklyDraw() {
    var winningTicketDisplay = document.getElementById("winning-ticket");
    var winningTicketNumber = ticketPool[Math.floor(Math.random() * ticketPool.length)];
    winningTicketDisplay.innerText = "The winning ticket number is: " + winningTicketNumber;
  }

  // Schedule the weekly draw to occur every Saturday at 8:00 PM
  setInterval(conductWeeklyDraw, 7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
</script>
