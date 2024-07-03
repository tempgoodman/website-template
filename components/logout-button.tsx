"use client";
import { logout } from "@/action/logout";

interface LogoutButtonProps {
  childern?: React.ReactNode;
}

export const LogoutButton = ({ childern }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };
};
