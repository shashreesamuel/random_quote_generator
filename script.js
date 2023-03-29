import quotes from "../quotes.json" assert { type: "json" };

let randomNumber = Math.random() * (quotes.length + 1);

// console.log( getRandomQuote() )

let button = document.querySelector(".container__button");

let quoteContainer = document.querySelector(".quote-container");

quoteContainer.style.display = "none";

function handleQuotes() {
  let randomNumber = Math.random() * (quotes.length + 1);
  let quote = document.querySelector(".quote");
  let author = document.querySelector(".author");

  quoteContainer.style.display = "block";
  quote.innerHTML = quotes[Math.floor(randomNumber)]["quote"];
  author.innerHTML = quotes[Math.floor(randomNumber)]["author"];
}

button.addEventListener("click", () => {
  handleQuotes();
});
