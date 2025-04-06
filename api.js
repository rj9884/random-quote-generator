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
    try {
        // Show loading state
        setLoadingState(true);
        
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result && result.length > 0) {
            updateQuote(result[0]);
        } else {
            throw new Error('No quotes received');
        }
        
    } catch (error) {
        console.error("Failed to fetch quote:", error);
        showError("Failed to load quote. Please try again later.");
    } finally {
        // Hide loading state
        setLoadingState(false);
    }
};

// Update the UI with a new quote
const updateQuote = (quoteData) => {
    quoteText.innerText = quoteData.quote;
    authorText.innerText = quoteData.author;
    categoryBadge.innerText = quoteData.category;
    
    // Add animation class to make the transition smooth
    quoteText.classList.add('fade-in');
    authorText.classList.add('fade-in');
    categoryBadge.classList.add('fade-in');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        quoteText.classList.remove('fade-in');
        authorText.classList.remove('fade-in');
        categoryBadge.classList.remove('fade-in');
    }, 500);
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

// Show error message
const showError = (message) => {
    quoteText.innerText = message;
    authorText.innerText = '';
    categoryBadge.innerText = 'error';
};

// Share functionality
const shareQuote = () => {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    
    if (navigator.share) {
        navigator.share({
            title: 'Quote By Ninja',
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