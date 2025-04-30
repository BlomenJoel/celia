import { MapPin, Phone, Mail, Clock, FileText, ChevronRight, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function happenings() {
    return (
        <footer className="mt-auto py-16 text-white">
            <div className="container">
                <div className="flex flex-col gap-4 items-center">

                    <div className="flex flex-col space-y-4 text-center">
                        <h3 className="text-xl font-normal">Händer hos oss!</h3>
                        <div>
                            <a href="tel:+46702450952" className="text-gray-300 md:hover:text-accent">
                                Vinprovning
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}