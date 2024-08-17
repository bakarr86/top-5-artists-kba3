alert("hello");
//querySelector
const element = document.querySelector("h1");
element.style.backgroundColor = "red";

const users = ["Michael Jackson", "Tupac Shaukur", "Nasir Jones","Aaliyah", "Usher Raymond"];

for(let i = 0; i <names.length; i++) {
    console.log(i, names[i]);
//unorderd array
}
const users = ["Michael Jackson", "Tupac Shaukur", "Nasir Jones","Aaliyah", "Usher Raymond"];
let ul = document.createElement("ul");{
for (let user of users) {
    let li = document.createElement("li")
    li.innerText = user;
    ul.appendChild(li);
}
document.body.appendChild(ul)}