"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button className="font-narmal w-full" size="sm" variant="faded">
      <Link className={"w-full"} href={href}>
        {label}
      </Link>
    </Button>
  );
};
