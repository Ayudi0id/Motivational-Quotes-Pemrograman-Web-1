async function getQuote() {
  try {
    const res = await fetch("https://zenquotes.io/api/random");
    const data = await res.json();
    document.getElementById("quote-box").innerText = `"${data[0].q}"`;
    document.getElementById("author").innerText = `— ${data[0].a}`;
  } catch (error) {
    document.getElementById("quote-box").innerText = "Failed to load quote.";
    document.getElementById("author").innerText = "";
  }
}

// Load quote when the page loads
getQuote();
