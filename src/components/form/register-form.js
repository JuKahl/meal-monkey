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

const button = document.createElement ("button");
button.innerText = "Press here!";
button.className = "btn";

function register () {
    alert("Registered");
}
button.addEventListener("click", register)

form.append(title, button);

return form;
}