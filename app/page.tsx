import { useTranslations } from "next-intl";

import { title } from "@/components/primitives";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const t = useTranslations("Navbar");

  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Welcom to landing page Dashboard &nbsp;</h1>
        </div>
      </section>
    </div>
  );
}
