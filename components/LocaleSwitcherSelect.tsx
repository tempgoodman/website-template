"use client";

import { useTransition } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import { Locale } from "@/config";
import { setUserLocale } from "@/services/locale";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;

    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{defaultValue.toUpperCase()}</Button>
        </DropdownTrigger>
        <DropdownMenu>
          {items.map((item) => (
            <DropdownItem key={item.value} onClick={() => onChange(item.value)}>
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

// import {useParams} from 'next/navigation';
// import {useRouter, usePathname} from 'next/navigation';
// import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
// import {useTranslations} from 'next-intl';
// import { ReactNode } from 'react';

// export default function LocaleSwitcher() {
//   const router = useRouter();
//   const { pathname, asPath, query } = router;
//   const { locales, locale: activeLocale } = router;
//   const t = useTranslations("LocaleSwitcher");
//     const otherLocales = (locales || []).filter(
//     (locale) => locale !== activeLocale,
//     );

//     type Props = {
//       children: ReactNode;
//       defaultValue: string;
//       label: string;
//     };

//   const changeLocale = (nextLocale: string) => {
//     router.push({ pathname, query }, asPath, { locale: nextLocale });
//   };

//   return (
//     <Dropdown>
//         <DropdownTrigger>
//         <Button
//           variant="bordered"
//         >
//           {t(router.locale?.toUpperCase() || 'EN')}
//         </Button>

//         </DropdownTrigger>
//       <DropdownMenu>
//         {otherLocales.map((locale) => {
//             return (
//           <DropdownItem key={locale} onClick={() => changeLocale(locale)}>
//             {t(locale.toUpperCase())}
//           </DropdownItem>
//         )}
//         )}
//       </DropdownMenu>
//     </Dropdown>
//   );
// };

// import { useParams } from 'next/navigation';
// import { useRouter } from 'next/router';
// import { ChangeEvent, startTransition, useCallback } from 'react';

// const LocaleSwitcher = () => {
//   const router = useRouter();
//   const { pathname, asPath, query } = router;

//   const params = useParams();
//   const changeLocale = (nextLocale: string) => {
//     router.push({ pathname, query }, asPath, { locale: nextLocale });
//   };

// function changeLocale(event: ChangeEvent<HTMLSelectElement>) {
//   const nextLocale = event.target.value;
//   startTransition(() => {
//     router.replace(
//       // @ts-expect-error -- TypeScript will validate that only known `params`
//       // are used in combination with a given `pathname`. Since the two will
//       // always match for the current route, we can skip runtime checks.
//       {pathname, params},
//       {locale: nextLocale}
//     );
//   });
// }

//   return (
// //    <select onChange={changeLocale} value={router.locale}>

//     <select onChange={() =>changeLocale} value={router.locale}>
//       <option key="en" value="en">English</option>
//       <option key="zh-CN" value="zh-CN">Simplified Chinese</option>
//       <option key="zh-HK" value="zh-HK">Traditional Chinese</option>
//     </select>
//   );
// };

// export default LocaleSwitcher;
