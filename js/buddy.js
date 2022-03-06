const lodeBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayShow(data))
}
lodeBuddies();
const displayShow = (buddy) => {
    const buddies = buddy.results;
    const buddiesclass = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy.name.title, buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        p.innerText = `name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email} `
        buddiesclass.appendChild(p);
    }

}