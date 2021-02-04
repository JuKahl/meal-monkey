import "./form.css";
import { createRegisterForm } from "./register-form";
import { createLoginForm } from "./login";
import { createForm } from "./newlogin";

export default {
  title: "Components/Form",
  parameters: { layout: "centered" },
};

export const password = () => createRegisterForm();
export const login = () => createLoginForm();
export const form = () => createForm();
