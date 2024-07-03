"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

import { Social } from "./social";
import { BackButton } from "./back-btton";

interface WrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLable: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const Wrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLable,
  showSocial,
}: WrapperProps) => {
  return (
    <div>
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <div className="w-full flex flex-col gap-y-4 items-center jusify-center">
            <h1>{headerLabel}</h1>
          </div>
        </CardHeader>
        <CardBody>{children}</CardBody>
        {showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton href={backButtonHref} label={backButtonLable} />
        </CardFooter>
      </Card>
    </div>
  );
};
