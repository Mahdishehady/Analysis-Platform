"use client"
import { useRouter } from "next/navigation"



export default function main() {

  const router=useRouter()
  router.push("/login")
   
}