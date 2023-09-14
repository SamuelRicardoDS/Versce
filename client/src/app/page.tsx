import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { VersceCircle } from "@/components/VersceCircle";
import React from "react";

export default function Home() {
  return (
   
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Header />
      <VersceCircle />
      <Services />
      <Projects />
      <Contact />
    </main>
  )
}
