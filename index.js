

const element = document.querySelector("h1");
bioParagraph.style.color = 'red';

const users = ["Michael Jackson", "Tupac Shakur", "Nasir Jones", "Aaliyah", "Usher Raymond"];

for (let i = 0; i < users.length; i++) {
    console.log(i, users[i]);
}

let ul = document.createElement("ul");

for (let user of users) {
    let li = document.createElement("li");
    li.innerText = user;
    ul.appendChild(li);
}
document.body.appendChild(ul);

console.log(users);

const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
//event listner for submit button
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
ddocument.addEventListener('DOMContentLoaded', function () {
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