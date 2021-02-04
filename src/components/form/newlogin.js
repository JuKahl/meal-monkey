import { createElement } from "../../components/utils/createElement";

function createPinInput() {
  return createElement("input", {
    className: "input",
    placeholder: "*",
    type: "password",
    maxLength: "1",
  });
}

export function createForm() {
  const pin1 = createPinInput();
  const pin2 = createPinInput();
  const pin3 = createPinInput();
  const pin4 = createPinInput();

  const messageElement = createElement("p", {
    type: "text",
    className: "message",
  });

  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", {
        innerText: "We have sent an OTP to your Mobile.",
      }),
      createElement("p", {
        innerText:
          "Please check your mobile number 017*71****92 - continue to reset your password.",
      }),
      messageElement,
      createElement("div", {
        className: "pin-form",
        children: [pin1, pin2, pin3, pin4],
      }),
      createElement("input", {
        type: "submit",
        value: "Next",
        className: "btn",
      }),
      createElement("p", {
        innerText: "Didn't receive?",
        //   className: "TBA"
        children: [
          createElement("a", {
            innerText: "Click here",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();
      const password = `${pin1.value}${pin2.value}${pin3.value}${pin4.value}`;

      if (password === "1337") {
        messageElement.innerText = " ";
      } else {
        messageElement.innerText = "Password is NOT correct!";
      }
    },
  });
}
