const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');



// Global variable to be available for all functions
let apiQuotes=[];


// Show new quote
function newQuote(){

    // Pick a random quote from apiQuotes array
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

// Check if author field is blank and replave it with Unknown
if(!quote.author){
    authorText.textContent='Unknown';
}   else{
    authorText.textContent=quote.author;
}

// Check quote length to determine the stying - add this if stmt only if you want smaller text for long quotes and change length if want
if(quote.text.length > 120){
    quoteText.classList.add('long-quote');
} else{
    quoteText.classList.remove('long-quote');
}

quoteText.textContent=quote.text;
}


// Get Quotes from API
async function getQuotes(){
    const apiUrl= 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch(error){
    }
}

//Tweet Quote - using the site intent and allowing it to be in a new window
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');

}

// Event Listeners - to make buttons work
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On load
getQuotes();



