import Hero from "@/components/components/hero"
import Footer from "@/components/components/footer"
import Happenings from "@/components/components/happenings"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col font-alice bg-primary text-white">
        <Hero />
        <Happenings />
        <Footer />
      </main>
    </>
  )
}
