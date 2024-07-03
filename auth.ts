import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";

import { getUserById } from "./data/user";

import authConfig from "@/auth.config";
import { db } from "@/lib/db";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  pages: {
    signIn: "/login",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
          role: UserRole.USER,
          company: "rich",
        },
      });
    },
  },
  callbacks: {
    // async signIn({user}){
    //     const existingUser = await getUserById(user.id);
    //     if (!existingUser || !existingUser.emailVerified){
    //         return false;
    //     }
    //     return true;
    // },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.company = token.company as string;
        session.user.role = token.role as UserRole;
      }
      console.log({ sessionToken: token });
      console.log({ session });

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      console.log({ token });
      const user = await getUserById(token.sub);

      if (!user) return token;
      token.company = user.company;
      token.role = user.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
