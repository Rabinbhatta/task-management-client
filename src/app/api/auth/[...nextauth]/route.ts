import axios from "axios";
import NextAuth, {NextAuthOptions} from "next-auth"
import { User } from "next-auth"
import {JWT} from "next-auth/jwt"
import { AuthResponse } from "@/types/type";
import CredentialsProvider from "next-auth/providers/credentials";


const authOptions : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            credentials: {
              identifier: { label: "Email", type: "email" },
              password: { label: "Password", type: "password" }
            },
             authorize: async(credentials)=> {
               if(!credentials){
                     return null
               }
               try {
                const res = await axios.post<AuthResponse>(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,{
                    email: credentials.identifier,
                    password: credentials.password
                })

                const user = res.data.user
                if(user){
                    return user
                                       
                  }
                    return null
               } catch (error) {
                     console.error(error)
                   return null
               }
            }
          })
        ],
    callbacks: {
        async session({session,token}:{session: any, token: JWT}){
            if (token) {
                session.user = {
                  id: token.id,
                  name: token.name,
                  email: token.email,
                  jwt: token.jwt,
                };
              }
              return session
        },
        async jwt({token, user}: {token: JWT, user: User}) {
            if(user){
                token.id = user.id
                token.name = user.name
                token.email = user.email
                token.jwt = (user as any).jwt
        
        }
        return token
    }
},
pages: {
    signIn: '/',
    signOut: '/login',
}
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }