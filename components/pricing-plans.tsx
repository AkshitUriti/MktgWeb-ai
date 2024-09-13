'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPlans() {
  const plans = [
    {
      name: "Basic",
      price: "$999",
      features: [
        "5-page responsive website",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month of support",
      ],
      cta: "Choose Basic",
    },
    {
      name: "Standard",
      price: "$1,999",
      features: [
        "10-page responsive website",
        "Advanced SEO optimization",
        "Social media integration",
        "E-commerce functionality (up to 50 products)",
        "3 months of support",
      ],
      cta: "Choose Standard",
      recommended: true,
    },
    {
      name: "Premium",
      price: "$3,999",
      features: [
        "20-page responsive website",
        "Premium SEO package",
        "Social media & marketing integration",
        "Full e-commerce solution",
        "Custom web application features",
        "6 months of support",
      ],
      cta: "Choose Premium",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-700">Affordable Packages</h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the perfect plan to bring your web presence to life. All packages include our expert design and development services.
          </p>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCard({ plan }: { plan: { name: string; price: string; features: string[]; cta: string; recommended?: boolean } }) {
  return (
    <Card className={`flex flex-col justify-between ${plan.recommended ? 'border-purple-500 shadow-lg' : ''}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-purple-700">{plan.name}</CardTitle>
        {plan.recommended && (
          <span className="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">
            Recommended
          </span>
        )}
      </CardHeader>
      <CardContent>
        <div className="mt-2 mb-4">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className="text-zinc-500 ml-1">/project</span>
        </div>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-zinc-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  )
}