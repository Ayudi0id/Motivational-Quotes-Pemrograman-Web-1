let quotes = [];

async function getQuote() {
  try {
    if (quotes.length === 0) {
      const res = await fetch("https://type.fit/api/quotes");
      quotes = await res.json();
    }

    const random = Math.floor(Math.random() * quotes.length);
    const quote = quotes[random];

    document.getElementById("quote-box").innerText = `"${quote.text}"`;
    document.getElementById("author").innerText = `— ${
      quote.author || "Unknown"
    }`;
  } catch (error) {
    document.getElementById("quote-box").innerText = "Failed to load quote.";
    document.getElementById("author").innerText = "";
  }
}

getQuote(); // Load quote on page load
