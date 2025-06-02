import { MapPin, Phone, Mail, Clock, FileText, ChevronRight, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function happenings() {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col gap-3 md:py-36 py-24 relative text-center px-4">
                <h2 className="text-xl font-normal">Händer hos oss</h2>
                <div className="pt-4 flex justify-between md:gap-24 gap-8 text-left">
                    <div className="max-w-80">
                        <h3 className="text-lg font-normal">Beer Makers Dinner 26/6 18.30</h3>
                        <p className="text-gray-300">Vi gästas av de lokala bryggeriet från Rönnäng! Olika ölstilar matchas ihop med en 5-rätters middag, hur trevligt?</p>
                    </div>
                    <div className="h-full flex flex-col justify-center">
                        <Button asChild size="lg" variant="outline"
                            className="mt-4 border-accent bg-transparent text-white hover:bg-accent hover:text-tertiary"
                        >
                            <a href="https://app.bokabord.se/reservation/?hash=8fd41fbc7295a70f4ef03bb9ab287a23" target="_blank" aria-label="Ring för att boka bord">
                                Boka här
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="pt-4 flex justify-between md:gap-24 gap-8 text-left">
                    <div className="max-w-80">
                        <h3 className="text-lg font-normal">Bubbelprovning Wildcard 4/7 17.30-18.30</h3>
                        <p className="text-gray-300">En timme utan de klassiska bubblorna! Provning på verandan. 395kr/pp</p>
                    </div>
                    <div className="h-full flex flex-col justify-center">
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="mt-4 border-accent bg-transparent text-white hover:bg-accent hover:text-tertiary"
                        >
                            <a href="https://app.bokabord.se/reservation/?hash=8fd41fbc7295a70f4ef03bb9ab287a23" target="_blank" aria-label="Ring för att boka bord">
                                Boka här
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}