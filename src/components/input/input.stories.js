import "./input.css";
import emailForm from "./email.html";
import passwordForm from "./password.html"


export default {
  title: "Components/input",
  parameters: { layout: "centered" },
};

export const email = () => emailForm;
export const password = () => passwordForm;
