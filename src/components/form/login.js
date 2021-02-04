import { createElement } from "../../components/utils/createElement";

function createPinInput() {
  // const input = document.createElement ("input")
  // const input = document.createElement
  // input.type = "password"
  // input.placeholder = "*"
  // input.className = "input"
  // input.maxLength ="1"
  const input = createElement("input", {
    className: "input",
    placeholder: "*",
    type: "password",
    maxLenght: "1",
  });

  return input;
}

function createTitle() {
  const title = createElement("h2", {
    innerText: "We have sent an OTP to your Mobile",
  });

  return title;
}

function createText() {
  const text = createElement("p", {
    innerText:
      "Please check your mobile number 017*71****92 - continue to reset your password.",
  });

  return text;
}

const pin1 = createPinInput();

const pin2 = createPinInput();

const pin3 = createPinInput();

const pin4 = createPinInput();

function createContainer() {
  const container = createElement("div", {
    className: "pin-form",
    children: [pin1, pin2, pin3, pin4],
  });

  return container;
}

export function createLoginForm() {
  const form = createElement("form", {
    className: "form",
    onsubmit: function (event) {
      event.preventDefault();
      const secretPassword = "1337";
      const password = `${pin1.value}${pin2.value}${pin3.value}${pin4.value}`;

      if (password === secretPassword)
        alert(
          `Your OTP - ${pin1.value}${pin2.value}${pin3.value}${pin4.value} - is correct.`
        );
      else {
        alert("Your OTP is not correct.");
      }
    },
  });
  //   form.addEventListener("submit", function (event) {
  //     event.preventDefault();
  //     const secretPassword = "1337"
  //     alert(
  //       `Your OTP - ${pin1.value}${pin2.value}${pin3.value}${pin4.value} - is correct.`
  //     );
  //   });

  const title = createTitle();
  // const title = document.createElement("h2");
  // title.innerText = "We have sent an OTP to your Mobile";

  const text = createText();
  // const text = document.createElement("p");
  // text.innerText = "Please check your mobile number 017*71****92 - continue to reset your password.";

  const container = createContainer();
  // const container = document.createElement ("div")
  // container.className = "pin-form"

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  // container.append(pin1, pin2, pin3, pin4)
  form.append(title, text, container, button);

  return form;
}
