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

import { RegisterSchema } from "@/schemas";
import * as registerAction from "@/action/register";
import { InputFormField } from "@/components/input-form-field";
export const RegisterForm = () => {
  const t = useTranslations("Login");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  type FormData = z.infer<typeof RegisterSchema>;
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      registerAction.register(values).then((data) => {
        //        setError(data.error);
        //        setSuccess(data.success);

        if (data.success) toast.success(data.success);
        else toast.error(data.error);
      });
    });
  };

  return (
    <Wrapper
      showSocial
      backButtonHref="/login"
      backButtonLable="Already have an account"
      headerLabel="Register"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-wrap mb-6 gap-4 md:pt-4 text-center justify-center">
          <InputFormField
            disabled={isPending}
            error={errors.name}
            id="name"
            label={t("Name")}
            placeholder={t("Please enter the name")}
            register={register}
            type="text"
          />
          <InputFormField
            disabled={isPending}
            error={errors.email}
            id="email"
            label={t("Email")}
            placeholder={t("Please enter the email")}
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
            {t("CreateAndAccount")}
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};
