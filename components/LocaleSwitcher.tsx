import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={t(locale.toUpperCase())}
      items={[
        {
          value: "en",
          label: t("EN"),
        },
        {
          value: "zh-CN",
          label: t("ZH-CN"),
        },
        {
          value: "zh-HK",
          label: t("ZH-HK"),
        },
      ]}
      label={t("label")}
    />
  );
}
