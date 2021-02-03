function createPinInput () {
    const input = document.createElement ("input")
    input.type = "password"
    input.placeholder = "*"
    input.className = "input"
    input.maxLength ="1"


    return input
}

export function createLoginForm() {

const form = document.createElement ("form")
form.className = "form"

const title = document.createElement("h2");
title.innerText = "We have sent an OTP to your Mobile";

const text = document.createElement("p");
text.innerText = "Please check your mobile number 017*71****92 - continue to reset your password.";

const container = document.createElement ("div")
container.className = "pin-form"

const pin1 = createPinInput ()

const pin2 = createPinInput ()

const pin3 = createPinInput ()

const pin4 = createPinInput ()

const button = document.createElement ("button")
button.innerText = "Next"
button.className = "btn"

container.append(pin1, pin2, pin3, pin4)
form.append (title, text, container, button)

return form
}