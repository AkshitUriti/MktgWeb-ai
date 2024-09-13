'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Zap, Users, BarChart } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-700 to-indigo-800 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Building Your Online Presence, One Website at a Time
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto lg:mx-0">
                Helping small businesses grow their brand with tailored web solutions.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto lg:mx-0">
              <Button className="bg-white text-purple-700 hover:bg-zinc-100" size="lg">
                Get a Free Consultation
              </Button>
            </div>
          </div>
          <div className="mx-auto flex items-center justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <BenefitCard
                icon={Globe}
                title="Custom Websites"
                description="Tailored to reflect your unique brand identity"
              />
              <BenefitCard
                icon={Zap}
                title="Optimized Performance"
                description="Fast, responsive, and SEO-friendly solutions"
              />
              <BenefitCard
                icon={Users}
                title="Dedicated Support"
                description="Ongoing maintenance and timely updates"
              />
              <BenefitCard
                icon={BarChart}
                title="Increased Visibility"
                description="Boost your online presence and engagement"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <Card className="bg-white/10 border-white/20 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/20">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
        <div className="rounded-full bg-purple-100 p-3 mb-2">
          <Icon className="h-6 w-6 text-purple-700" />
        </div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-200">{description}</p>
      </CardContent>
    </Card>
  )
}