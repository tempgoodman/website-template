"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/button";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";

import { Wrapper } from "./wrapper";

import { LoginSchema } from "@/schemas";
import { login } from "@/action/login";
import { InputFormField } from "@/components/input-form-field";

export const LoginForm = () => {
  const t = useTranslations("Login");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  type FormData = z.infer<typeof LoginSchema>;
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then((data) => {
        if (data?.error) toast.error(data.error);
        //        setError(data.error);
        //        setSuccess(data.success);
      });
    });
  };

  return (
    <Wrapper
      showSocial
      backButtonHref="/register"
      backButtonLable="Register"
      headerLabel="login"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-wrap mb-6 gap-4 md:pt-4 text-center justify-center">
          <InputFormField
            disabled={isPending}
            error={errors.email}
            id="email"
            label={t("Username")}
            placeholder={t("Please enter the username")}
            register={register}
            type="text"
          />
          <InputFormField
            disabled={isPending}
            error={errors.password}
            id="password"
            label={t("Password")}
            placeholder={t("Please enter the password")}
            register={register}
            type="password"
          />
          <span>{error}</span>
          <Button className="w-full" type="submit">
            {t("confirm")}
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};
