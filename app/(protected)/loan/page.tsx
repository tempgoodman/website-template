import Link from "next/link";
import { Button } from "@nextui-org/button";

import { auth, signOut } from "@/auth";
export default async function LoanPage() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      {session?.user.company ?? "asdasd"}
      {session?.user.role}

      <Link href="/loan/search"> Search</Link>
      <Link href="/loan/XXXXX">temp</Link>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">sign out</Button>
      </form>
    </div>
  );
}
