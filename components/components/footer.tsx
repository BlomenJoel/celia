import { MapPin, Phone, Mail, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function footer() {
    return (
        <footer className="mt-auto border-t border-gray-700 py-16 text-white">
            <div className="container">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Restaurant Info */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-2xl font-normal">Celia</h2>
                        <p className="max-w-xs text-gray-300">
                            Upplev utsökt mat i en varm och välkomnande atmosfär i hjärtat av Stockholm.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-normal">Kontakta oss</h3>
                        <div className="flex items-start space-x-3">
                            <Phone className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
                            <div>
                                <p>Telefon</p>
                                <a href="tel:+15551234567" className="text-gray-300 hover:text-accent">
                                    (555) 123-4567
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Mail className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
                            <div>
                                <p>E-post</p>
                                <a href="mailto:info@celia.se" className="text-gray-300 hover:text-accent">
                                    info@celia.se
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <MapPin className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
                            <div>
                                <p>Adress</p>
                                <address className="not-italic text-gray-300">
                                    Storgatan 123
                                    <br />
                                    111 23 Stockholm
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-normal">Öppettider</h3>
                        <div className="flex items-start space-x-3">
                            <Clock className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
                            <div>
                                <p>Tider</p>
                                <p className="text-gray-300">Måndag - Fredag: 11:00 - 22:00</p>
                                <p className="text-gray-300">Lördag - Söndag: 10:00 - 23:00</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <Button
                                asChild
                                variant="outline"
                                className="border-accent bg-transparent text-white hover:bg-accent hover:text-primary"
                            >
                                <a
                                    href="/menu.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Ladda ner vår meny i PDF-format"
                                >
                                    <FileText className="mr-2 h-4 w-4" aria-hidden="true" /> Ladda ner meny
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Celia Restaurant. Alla rättigheter förbehållna.
                    </p>
                </div>
            </div>
        </footer>
    )
}