const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector("textarea").value;

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (response.ok) {
      statusText.textContent = "✅ Message sent successfully!";
      statusText.style.color = "lightgreen";
      form.reset();
    } else {
      statusText.textContent = "❌ Failed to send message";
      statusText.style.color = "red";
    }
  } catch (error) {
    statusText.textContent = "❌ Server not reachable";
    statusText.style.color = "red";
  }
});
