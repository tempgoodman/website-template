"use client";
import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { FcGoogle } from "react-icons/fc";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
export const Social = () => {
  const onclick = () => {
    signIn("google", {
      callbackURL: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex item-center w-full gap-x-2">
      <Button
        className="w-full"
        size="lg"
        variant="bordered"
        onClick={() => onclick()}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
    </div>
  );
};
