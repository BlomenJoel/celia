import { ChevronRight, FileText } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"


export default function Home() {
    return (
        <section className="relative" aria-labelledby="hero-heading">
            <div className="h-screen w-full bg-muted/30">
            </div>
            <div className="absolute inset-0 flex items-center bg-tertiary/80">
                <div className="container">
                    <div className="max-w-md space-y-4 text-white">
                        <h1 id="hero-heading" className="text-4xl font-normal leading-tight md:text-5xl">
                            Celia Restaurant
                        </h1>
                        <p className="text-xl">Utsökt mat och minnesvärd upplevelse i hjärtat av Stockholm</p>
                        <div className="flex flex-wrap gap-3">
                            <Button asChild size="lg" className="mt-4 bg-accent text-tertiary hover:bg-accent/90">
                                <a href="tel:+15551234567" aria-label="Ring för att boka bord">
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
                    </div>
                </div>
            </div>
        </section>
    )
}