const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author-text");
const categoryBadge = document.getElementById("category-badge");
const newQuoteBtn = document.getElementById("new-quote-btn");
const shareBtn = document.getElementById("share-btn");

// API configuration
const url = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'd26f671ce5msh98ce58ed6c84240p112d76jsn250d4779d1b4',
        'x-rapidapi-host': 'quotes-by-api-ninjas.p.rapidapi.com'
    }
};

// Fetch quote from API
const fetchQuote = async () => {
    setLoadingState(true);
    const response = await fetch(url, options);
    const result = await response.json();
    updateQuote(result[0]);
    setLoadingState(false);

};

// Update the UI with a new quote
const updateQuote = (quoteData) => {
    quoteText.innerText = quoteData.quote;
    authorText.innerText = quoteData.author;
    categoryBadge.innerText = quoteData.category;
};

// Set loading state
const setLoadingState = (isLoading) => {
    if (isLoading) {
        newQuoteBtn.disabled = true;
        newQuoteBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    } else {
        newQuoteBtn.disabled = false;
        newQuoteBtn.innerHTML = '<i class="fas fa-sync-alt"></i> New Quote';
    }
};

// Share functionality
const shareQuote = () => {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    
    if (navigator.share) {
        navigator.share({
            title: 'Quote For the Day',
            text: `"${quote}" — ${author}`,
        })
        .catch(console.error);
    } else {
        const msg = `"${quote}" — ${author}`;
        navigator.clipboard.writeText(msg);
    }
};

// Event listeners
newQuoteBtn.addEventListener("click", fetchQuote);
shareBtn.addEventListener("click", shareQuote);

// Initial quote load
document.addEventListener("DOMContentLoaded", fetchQuote);

// Add keyboard shortcuts
document.addEventListener("keydown", (e) => {
    if (e.key === "n" || e.key === "N") {
        fetchQuote();
    }
}); 