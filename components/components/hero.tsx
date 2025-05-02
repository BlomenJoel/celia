import { ChevronRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Erica } from '../svg/ericahand';


export default function Home() {
    return (
        <section className="relative" aria-labelledby="hero-heading">
            <div className="h-screen w-full inset-0 flex items-center ">
                <div className="w-full">
                    <div className="mx-auto text-center max-w-3xl space-y-4 text-white">
                        <h1 id="hero-heading" className="z-10 relative text-4xl font-normal leading-tight md:text-5xl">
                            Celia Vin och Bar
                        </h1>
                        <div className="absolute right-4 md:right-24 top-12 h-96 z-0">
                            <Erica className="h-96" />
                        </div>
                        <p className="text-xl relative">En modern vinbar för alla.</p>
                        <div className="flex flex-wrap gap-3 justify-center relative">
                            <Button asChild size="lg" className="mt-4 bg-accent text-tertiary hover:bg-accent/90">
                                <a href="https://app.bokabord.se/reservation/?hash=8fd41fbc7295a70f4ef03bb9ab287a23" target="_blank" aria-label="Ring för att boka bord">
                                    Boka bord <ChevronRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="mt-4 border-accent bg-transparent text-white hover:bg-accent hover:text-tertiary"
                            >
                                <a
                                    href="/menu.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Öppna vår meny i PDF-format"
                                >
                                    <FileText className="mr-2 h-4 w-4" /> Se meny
                                </a>
                            </Button>
                        </div>
                        <div className="flex flex-col gap-3 pt-48 relative">
                            <h2 className="text-xl font-normal">Öppettider</h2>
                            <p className="text-gray-300">Fredag kl.17-sent</p>
                            <p className="text-gray-300">Lördag  kl.12-sent</p>
                            <p className="text-gray-300">Söndag  kl.12-17</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}