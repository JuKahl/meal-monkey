export function createRegisterForm() {
//     return `   
//     <form class="form">
//     <h2>Reset password</h2>
//     <p>Please enter your email to receive a link to create a new password via email.</p>
//     <input placeholder="email" />
//     <input type="submit"/>
//     </form>
//     `;
// }
const form = document.createElement ("form");
form.className = "form";

const title = document.createElement ("h2");
title.innerText = "Reset password";
title.className = "form"

const text = document.createElement ("p")
text.innerText = "Please enter your email to receive a link to create a new password via email"
text.className = "form"

const button = document.createElement ("button");
button.innerText = "Press here!";
button.className = "btn btn-border";

const input = document.createElement ("input")
input.type = "text"
input.placeholder = "email"


function register () {
    alert("Done!");
}
// button.addEventListener("click", register)
button.onclick = register

form.append(title, text, input, button);

return form;
}