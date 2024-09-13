'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Paintbrush, DollarSign, Zap, Code, CheckCircle } from "lucide-react"

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-700">Why MktgWeb?</h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're not just another web development company. We're your partners in digital success.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
          <BenefitCard icon={Paintbrush} title="Tailored Solutions" description="Custom-designed websites that perfectly fit your brand and goals" />
          <BenefitCard icon={DollarSign} title="Affordable Pricing" description="High-quality web solutions that don't break the bank" />
          <BenefitCard icon={Zap} title="Fast Turnaround" description="Quick development and deployment to get you online faster" />
          <BenefitCard icon={Code} title="Expert Developers" description="Skilled professionals with years of industry experience" />
          <BenefitCard icon={CheckCircle} title="Ongoing Support" description="We're here for you long after your website goes live" />
        </div>
        <div className="mt-16">
          <TrustIndicators />
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <Card className="flex flex-col items-center text-center p-4 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 flex flex-col items-center space-y-2">
        <div className="rounded-full bg-purple-100 p-3 mb-2">
          <Icon className="h-6 w-6 text-purple-700" />
        </div>
        <h3 className="font-semibold text-purple-700">{title}</h3>
        <p className="text-sm text-zinc-500">{description}</p>
      </CardContent>
    </Card>
  )
}

function TrustIndicators() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h3 className="text-2xl font-bold text-purple-700">Our Track Record</h3>
      <div className="flex flex-wrap justify-center gap-8">
        <Stat number="500+" label="Satisfied Clients" />
        <Stat number="10+" label="Years of Experience" />
        <Stat number="98%" label="Client Retention Rate" />
        <Stat number="1000+" label="Websites Launched" />
      </div>
    </div>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold text-purple-700">{number}</span>
      <span className="text-sm text-zinc-500">{label}</span>
    </div>
  )
}