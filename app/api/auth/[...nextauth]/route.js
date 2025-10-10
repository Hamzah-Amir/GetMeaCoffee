import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {

    adapter: PrismaAdapter(prisma),

    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.name || profile.login,
                    email: profile.email, // GitHub must return email
                    image: profile.avatar_url,
                    username: profile.login
                }
            },
        }),
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            profile(profile) {
                console.log("Google profile:", profile)
                console.log(profile.email.split("@")[0])
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    username: profile.email.split("@")[0]
                }
            }
        })
    ],

    callbacks: {
        async session({ session, user, }) {
            if (session.user) {
                session.user.id = user.id
                session.user.username = user.username
                console.log(session.user) // Add this line to log the session user object
            }
            return session
        },

    },
    events: {
        async createUser({ user }) {
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    username: user.email.split("@")[0] ?? "user_" + user.id,
                },
            })
        },
    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }