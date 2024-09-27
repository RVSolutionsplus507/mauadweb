import Carousel from "../components/Globals/Carousel"
import { ChevronRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <section className="relative min-h-screenbg-gradient-to-b from-slate-950 to-zinc-800 text-white">
      <div
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-20"
        style={{
          backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/law-library-zNTwsixgqJxNjnN5ECIxqpoO6aRbUk.jpg')",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto px-4 py-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-32">Our Legal Services</h1>
        <div className="flex flex-col items-center">
          <div className="w-full mb-12 hidden lg:block">
            <Carousel />
          </div>
          <div className="w-full lg:w-5/6 xl:w-2/3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 lg:p-8 rounded-lg shadow-2xl lg:mt-20">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Why Choose Our Firm?</h2>
            <ul className="space-y-4">
              {[
                "Decades of combined legal experience",
                "Personalized attention to every case",
                "Proven track record of success",
                "Comprehensive legal strategies",
                "Transparent communication",
              ].map((item, index) => (
                <li key={index} className="flex">
                  <ChevronRight className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-4">
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Schedule a Consultation
              </button>
              <button className="w-full bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-6 border border-white rounded-lg transition-colors">
                Explore Our Practice Areas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}