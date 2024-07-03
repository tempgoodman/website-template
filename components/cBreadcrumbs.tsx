"use client";
// components/Breadcrumbs.tsx
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";

import { title } from "./primitives";

const CBreadcrumbs: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((path) => path);

  const t = useTranslations("Breadcrumbs");
  const breadcrumbs = pathArray.map((path, index) => {
    const href = "/" + pathArray.slice(0, index + 1).join("/");

    return { href, text: path.replace(/-/g, " ") };
  });

  return (
    <Breadcrumbs>
      <BreadcrumbItem key={"home"}>
        <Link passHref href="/">
          <h1 className={title()}>{t("Home")}</h1>
        </Link>
      </BreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => (
        <BreadcrumbItem key={index}>
          <Link passHref href={breadcrumb.href}>
            <h1 className={title()}> {t(breadcrumb.text)}</h1>
          </Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default CBreadcrumbs;
