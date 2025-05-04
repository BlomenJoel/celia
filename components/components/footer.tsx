import { MapPin, Phone, Mail, Clock, FileText, ChevronRight, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function footer() {
    return (
        <footer className="mt-auto py-16 text-white bg-foreground">
            <div className="container">
                <div className="flex flex-col gap-4 items-center">

                    {/* Contact Info */}
                    <div className="flex flex-col space-y-4 text-center">
                        <h3 className="text-xl font-normal">Kontakt</h3>
                        <div>
                            <a href="tel:+46702450952" className="text-gray-300 md:hover:text-accent">
                                +46 702-450952
                            </a>
                        </div>
                        <div>
                            <a href="mailto:hej@celiavinochbar.se" className="text-gray-300 hover:text-accent">
                                hej@celiavinochbar.se
                            </a>
                        </div>
                        <address className="not-italic text-gray-300">
                            Södra Hamnen 12, 471 32 Skärhamn
                        </address>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://www.facebook.com/Celiavinochbar" rel="noopener" target="_blank" className="h-6 w-6 text-gray-300 hover:text-accent">
                            <Facebook />
                        </a>
                        <a href="https://www.instagram.com/celiavinochbar/" target="_blank" rel="noopener" className="h-6 w-6 text-gray-300 hover:text-accent" >
                            <Instagram />
                        </a>
                    </div>
                </div>

                <div className="mt-12  pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Celia Vin och Bar. Alla rättigheter förbehållna.
                    </p>
                </div>
            </div>
        </footer>
    )
}