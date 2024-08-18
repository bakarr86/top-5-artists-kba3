
//appended child
const element = document.querySelector("h1");
bioParagraph.style.color = 'red';

const users = ["Michael Jackson", "Tupac Shakur", "Nasir Jones", "Aaliyah", "Usher Raymond"];
document.addEventListener('DOMContentLoaded', () => {
    const users = ["Michael Jackson", "Tupac Shakur", "Nasir Jones", "Aaliyah", "Usher Raymond"];

    const categories = {
        'rappers-list': ["Tupac Shakur", "Nasir Jones"],
        'singers-list': ["Michael Jackson", "Aaliyah", "Usher Raymond"]
    };

    function populateList(listId, items) {
        const listElement = document.getElementById(listId);
        if (listElement) {
            items.forEach(item => {
                if (users.includes(item)) {
                    const li = document.createElement("li");
                    li.textContent = item;
                    listElement.appendChild(li);
                }
            });
        } else {
            console.error(`Element with ID "${listId}" not found.`);
        }
    }

    Object.entries(categories).forEach(([listId, items]) => {
        populateList(listId, items);
    });
});
for (let i = 0; i < users.length; i++) {
    console.log(i, users[i]);
}
//cre
let ul = document.createElement("ul");

for (let user of users) {
    let li = document.createElement("li");
    li.innerText = user;
    ul.appendChild(li);
}

document.body.appendChild(ul);

console.log(users);
//catch by element .getelement id
const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
//event listner for submit button for form
form.addEventListener("submit", (e) => {
    let messages = [];

    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters');
    }

    if (password.value === 'password') {
        messages.push('Password cannot be "password"');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const bioParagraph = document.getElementById('bio');
    console.log('Script loaded');
    if (bioParagraph) {
        console.log('Element found');
        bioParagraph.addEventListener('mouseenter', function () {
            console.log('Mouse entered');
            bioParagraph.style.color = 'red';
        });

        bioParagraph.addEventListener('mouseleave', function () {
            console.log('Mouse left');
            bioParagraph.style.color = 'gray';
        });
    } else {
        console.error('Element with ID "bio" not found.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const artists = [
        { name: "Michael Jackson", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Michael_Jackson_1984.jpg/315px-Michael_Jackson_1984.jpg", bio: "Michael Jackson, often hailed as the 'King of Pop,' revolutionized the music industry with his groundbreaking achievements." },
        { name: "Tupac Shakur", image: "https://i.pinimg.com/236x/94/a9/cf/94a9cf72386a639be83fd1fb5dbc4b10.jpg", bio: "Tupac Shakur was a pivotal figure in hip-hop, known for his raw lyricism and exploration of social issues." },
        { name: "Nasir Jones", image: "https://www.billboard.com/wp-content/uploads/media/nas-performing-2014-billboard-650.jpg?w=650", bio: "Nasir Jones, known as Nas, is a seminal figure in hip-hop with groundbreaking albums and impactful lyrics." },
        { name: "Aaliyah", image: "https://www.musicmaniarecords.be/media/artist-photo/130941-aaliyah-artist-pic.jpg", bio: "Aaliyah was a groundbreaking R&B and pop artist known for her smooth vocals and innovative sound." },
        { name: "Usher Raymond", image: "https://www.revolt.tv/article/media_16ae9685f06b78f209a7ec6cd93c581e5682b311c.jpeg?width=800&format=jpeg&optimize=high", bio: "Usher Raymond is a key figure in contemporary R&B, celebrated for his vocal talent and dynamic performances." }
    ];

    const template = document.getElementById('artist-template').content;
    const container = document.getElementById('artist-container');

    artists.forEach(artist => {
        const clone = document.importNode(template, true);
        clone.querySelector('.artist-name').textContent = artist.name;
        clone.querySelector('.artist-image').src = artist.image;
        clone.querySelector('.artist-bio').textContent = artist.bio;
        container.appendChild(clone);
    });
});
