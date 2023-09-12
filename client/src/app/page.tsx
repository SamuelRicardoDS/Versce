import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { VersceCircle } from "@/components/VersceCircle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <VersceCircle />
      <Services />
    </main>
  )
}
