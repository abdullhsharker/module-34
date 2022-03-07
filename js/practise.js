const loadQuotes = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayShow(data))
}
const displayShow = (quote) => {
    const lists = quote.results;
    const btn = document.getElementById('quote')
    for (const list of lists) {
        console.log(list.name.title, list.name.first, list.name.last);
        const p = document.createElement('p');
        p.innerText = `name: ${list.name.title} ${list.name.first} ${list.name.last}`
        btn.appendChild(p);
    }
}