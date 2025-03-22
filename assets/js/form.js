document.getElementById("mailing-list-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const webAppUrl = "https://script.google.com/macros/s/AKfycbwaKfE5UezzZA25eZgWb24yRyzXE9BKk54sjpVKnBPLXNiKyDeVe9Zbv39mpzDzsM1xlA/exec"; // Your Web App URL

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById("response-message").innerText = "Please enter a valid email address.";
      return; // Stop execution if email is invalid
    }

    // Send data to Google Apps Script
    fetch(webAppUrl, {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      if (data.result === "success") {
        document.getElementById("response-message").innerText = "Thank you for subscribing!";
      } else {
        document.getElementById("response-message").innerText = "Something went wrong. Please try again.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("response-message").innerText = "Something went wrong. Please try again.";
    });
  });