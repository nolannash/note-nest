"use client"
import UserHome from "@/components/home/HomePage"
import { useSession } from "next-auth/react";
import DefaultHome from "@/components/home/DefaultHome";

export default function Home() {
  const session = useSession()


  if (session.data === null || session.data === undefined) {

    return <DefaultHome />;
  }

  return <UserHome />; 
}
 

