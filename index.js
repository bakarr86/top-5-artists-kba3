alert("hello");
//querySelector
const element = document.querySelector("h1");
element.style.backgroundColor = "red";

const users = ["Michael Jackson", "Tupac Shaukur", "Nasir Jones","Aaliyah", "Usher Raymond"];

for(let i = 0; i <names.length; i++) {
    console.log(i, names[i]);
//unorderd array
}

let ul = document.createElement("ul");{
for (let user of users) {
    let li = documentcreateElement("li")
    li.innerText = user;
    ul.appendChild(li);
}
document.body.appendChild(ul)}
console.log(users)

const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")

form.addEventListener("submit" , (e) => {
    let messages = []
    if (name.value=== ''   || name.value ==null) {
        messages.push('Name is require')
}

if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
}

if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
    }

    if (password.value === 'password' ) {
        messages.push('Password cannot be password')
        }

        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(' , ')
        }
    })
        
        