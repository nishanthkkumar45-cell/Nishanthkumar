<script>

  // Show welcome message when the page loads

  window.onload = function() {

    alert("Welcome to my portfolio!");

    displayDate();

  };

  // Display current date in the footer

  function displayDate() {

    const today = new Date();

    const dateString = today.toDateString();

    document.getElementById("date").textContent = dateString;

  }