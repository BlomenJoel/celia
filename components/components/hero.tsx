import { ChevronRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Erica } from '../svg/ericahand';
import Image from "next/image";


export default function Home() {
    return (
        <section className="relative" aria-labelledby="hero-heading">
            <div className="h-screen w-full inset-0 flex items-center ">
                <div className="w-full">
                    <div className="mx-auto text-center max-w-3xl space-y-4 text-white">
                        <Image src="/celia-logo.png" alt="Celia Vin och Bar" className="relative w-96 mx-auto px-8" height={10} width={400} />
                        <div className="absolute bottom-0 w-full z-0 right-0">
                            <Erica className="lg:w-1/4 sm:w-1/3 w-2/3 max-w-screen-md ml-auto lg:mr-24 mb-0" />
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
                        <div className="flex flex-col gap-3 md:pt-36 pt-24 relative">
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