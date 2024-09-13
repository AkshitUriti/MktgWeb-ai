'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, PenTool, Code, Rocket, HeadphonesIcon } from "lucide-react"

export function OurProcess() {
  const steps = [
    { icon: Coffee, title: "Initial Consultation", description: "We discuss your goals and vision for the project." },
    { icon: PenTool, title: "Planning", description: "We create a detailed roadmap and strategy for your web solution." },
    { icon: Code, title: "Design & Development", description: "Our team brings your vision to life with cutting-edge technology." },
    { icon: Rocket, title: "Launch", description: "We deploy your website and ensure everything runs smoothly." },
    { icon: HeadphonesIcon, title: "Ongoing Support", description: "We provide continuous assistance and updates post-launch." },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="process">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-700">Our Process</h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From concept to launch, we work closely with you at every step to ensure your web solution exceeds expectations.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="flex flex-col items-center">
            {steps.map((step, index) => (
              <ProcessStep key={index} step={step} isLast={index === steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, isLast }: { step: { icon: React.ElementType; title: string; description: string }; isLast: boolean }) {
  const Icon = step.icon
  return (
    <>
      <Card className="w-full max-w-md flex items-center space-x-4 bg-white shadow-lg border-purple-200 hover:border-purple-300 transition-all duration-300">
        <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg ml-4">
          <Icon className="h-6 w-6 text-purple-700" />
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-semibold text-purple-700">{step.title}</CardTitle>
          <CardContent className="p-0 mt-1">
            <p className="text-sm text-zinc-500">{step.description}</p>
          </CardContent>
        </CardHeader>
      </Card>
      {!isLast && (
        <div className="w-px h-12 bg-purple-200" aria-hidden="true" />
      )}
    </>
  )
}