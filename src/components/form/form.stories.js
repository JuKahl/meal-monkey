import "./form.css";
import { createRegisterForm } from "./register-form";
import {createLoginForm} from "./login";

export default {
  title: "Components/Form",
  parameters: { layout: "centered" },
};

export const password = () => createRegisterForm();
export const login = () => createLoginForm();
