import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().nonempty({ message: "please enter the email" }).email(),
  password: z.string().nonempty({ message: "please enter the password" }),
});

export const RegisterSchema = z.object({
  email: z.string().nonempty({ message: "please enter the email" }).email(),
  name: z.string().nonempty({ message: "please enter the name" }),
  password: z
    .string()
    .min(6, { message: "minimum 6 characters required" })
    .nonempty({ message: "please enter the password" }),
});
