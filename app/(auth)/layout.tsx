import { NavbarLogin } from "@/components/navbar-login";

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarLogin />
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {children}
      </div>
    </>
  );
}
