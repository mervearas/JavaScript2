'use strict'
let quotes = [
    {
        quote: "Don't try to be different. Just be good. To be good is different enough.",
        author: "Arthur Freed"  
    },
    {
        quote: "Now is the time to live your ideal life." ,
        author: "Phil Cousineau"  
    },
    {
        quote: "If you wait too long for the perfect moment, the perfect moment will pass you by.",
        author: "Author Unknown"  
    },
    {
        quote: "There's an important difference between giving up and letting go.",
        author: "Jessica Hatchigan"  
    },
    {
        quote: "Every problem has a gift for you in its hands.",
        author: "Richard Bach"  
    },
    {
        quote: "Freedom is the oxygen of the soul.",
        author: "Moshe Dayan"  
    }
]

function displayRandomQuote () {
    let quotesItem = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerText = quotesItem["quote"];
    document.getElementById("author").innerText = quotesItem["author"]
}

document.getElementById("btn").addEventListener("click", displayRandomQuote);

window.onload = () => {
    displayRandomQuote();
};
