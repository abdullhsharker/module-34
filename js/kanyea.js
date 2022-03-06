const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayShow(data));
}

const displayShow = quote => {
    const quoteElemment = document.getElementById('quote');
    quoteElemment.style.padding = "20px"
    quoteElemment.style.padding = "20px"
    quoteElemment.style.border = '1px solid black';
    quoteElemment.style.borderRadius = "50px";
    quoteElemment.innerText = quote.quote;
}

