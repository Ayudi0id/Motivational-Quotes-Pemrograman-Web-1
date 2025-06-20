async function getQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    document.getElementById("quote-box").innerText = `"${data.content}"`;
    document.getElementById("author").innerText = `— ${data.author}`;
  } catch (error) {
    document.getElementById("quote-box").innerText = "Failed to load quote.";
    document.getElementById("author").innerText = "";
  }
}

getQuote(); // Load quote on page load
