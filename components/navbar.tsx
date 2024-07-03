"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import { useTranslations } from "next-intl";
import NextLink from "next/link";
import clsx from "clsx";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo, Server, ChevronDown } from "@/components/icons";
import { useCurrentUser } from "@/hooks/use-current-user";
import { logout } from "@/action/logout";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
  };
  const user = useCurrentUser();
  const onClickSignOut = () => {
    logout();
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">{t("title")}</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            if (item.type === "link") {
              return (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium",
                      "h-full",
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {t(item.label)}
                  </NextLink>
                </NavbarItem>
              );
            } else {
              return (
                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="data-[active=true]:text-primary data-[active=true]:font-medium"
                        radius="sm"
                        variant="light"
                      >
                        {t(item.label)}
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    key={item.href}
                    aria-label="ACME features"
                    // className="w-[340px]"
                    // itemClasses={{
                    //   base: "gap-4",
                    // }}
                  >
                    {item.sub?.map((s) => {
                      return (
                        <DropdownItem
                          key={s.href}
                          // description="ACME scales apps to meet user demand, automagically, based on load."
                        >
                          <NextLink
                            key={s.href}
                            className={clsx(
                              linkStyles({ color: "foreground" }),
                              "data-[active=true]:text-primary data-[active=true]:font-medium",
                              "h-full",
                              "w-full",
                            )}
                            color="foreground"
                            href={s.href}
                          >
                            {t(s.label)}
                          </NextLink>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </Dropdown>
              );
            }
          })}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <LocaleSwitcher />
          <ThemeSwitch />
          {<Button onClick={onClickSignOut}>{"Sign out"}</Button>}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
        <Button onClick={onClickSignOut}>{"Sign out"}</Button>
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                // size="lg"
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
