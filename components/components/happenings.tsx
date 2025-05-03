import { MapPin, Phone, Mail, Clock, FileText, ChevronRight, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function happenings() {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col gap-3 md:py-36 py-24 relative text-center px-4">
                <h2 className="text-xl font-normal">Händer hos oss</h2>
                <div className="pt-4 flex justify-between md:gap-24 gap-8 text-left">
                    <div className="max-w-80">
                        <h3 className="text-lg font-normal">Winemakers 27/5 18.30</h3>
                        <p className="text-gray-300">Tyska viner ihop med sparris och annat gott. Katharina Winter från vinhuset Georg Müller i Rheingau gästar oss!</p>
                    </div>
                    <div className="h-full flex flex-col justify-center">
                        <Button asChild size="lg" className="bg-accent text-tertiary hover:bg-accent/90">
                            <a href="https://app.bokabord.se/reservation/?hash=8fd41fbc7295a70f4ef03bb9ab287a23" target="_blank" aria-label="Ring för att boka bord">
                                Mer info
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}