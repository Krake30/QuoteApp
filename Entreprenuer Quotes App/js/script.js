/*****************
    Quote Array
 *****************/

let quotes = [
    {
        quote: 'The only way to do great work is to love what you do.',
        source: 'Steve Jobs',
        citation: 'Stanford University Commencement Speech',
        year: 2005
    },
    {
        quote: 'All our dreams can come true, if we have the courage to pursue them',
        source: 'Walt Disney',
        citation: 'The Wonderful World of Disney / Disneyland-related interview',
        year: 1957
    },
    {
        quote: 'If you never want to be criticized, for goodness’ sake don’t do anything new.',
        source: 'Jeff Bezos',
        citation: 'Princeton University commencement-related remarks',
        year: 2016
    },
    {
        quote: 'It doesn’t matter how many times you fail. You only have to be right once',
        source: 'Mark Cuban',
        citation: 'Interview/conversation about entrepreneurship',
        year: 2011
    },
    {
        quote: 'Failure is not the outcome. Failure is not trying',
        source: 'Sara Blakely',
        citation: 'Interview discussing entrepreneurship and failure',
        year: 2013
    },
    {
        quote: 'Business opportunities are like buses, there’s always another one coming',
        source: 'Richard Branson',
        citation: 'The Virgin Way / interviews about business',
        year: 2014
    },
    {
        quote: 'It’s fine to celebrate success, but it is more important to heed the lessons of failure',
        source: 'Bill Gates',
        citation: 'Interview/speech discussing success and failure',
        year: 2013
    },
];

/*****************
    getRandomQuote Function
 *****************/

function getRandomQuote() {
    let randomNum = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNum];
    return randomQuote;
}

/*****************
    printQuote Function
 *****************/

function printQuote() {
    let randomQuote = getRandomQuote();
    let quoteBox = document.getElementById('quote-box');

    let html = `<p class="quote">${randomQuote.quote}</p>
                <p class="source">${randomQuote.source}
                <span class="citation">${randomQuote.citation}</span>`;

    if (randomQuote.year != 'unknown') {
        html += `<span class="year">${randomQuote.year}</span>`;
    }

    html += `</p>`;

    quoteBox.innerHTML = html;

    document.body.style.backgroundColor = getColor();
}

/*****************
    Random Background Color
 *****************/

function getColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgbColor = `rgb(${r}, ${g}, ${b})`;

    return rgbColor;
}

/*****************
    Automatic Timer
 *****************/

let timer = setInterval(printQuote, 5000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);