import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { UserAuthForm } from "./components/user-auth-form"

export const metadata: Metadata = {
  title: "Analytics",
  description: "Anaytics for clients about the users.",
}

export default function AuthenticationPage() {
  return (
    <>

      <div className="container relative hidden h-[100vh] flex-col  items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">

        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-black-900" />
          <div className="relative z-20 flex justify-center items-center text-4xl font-semibold h-[100%] ">

            Analytics Platform
          </div>
         
         
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login
              </h1>

            </div>
            <UserAuthForm />

          </div>
        </div>
      </div>
    </>
  )
}