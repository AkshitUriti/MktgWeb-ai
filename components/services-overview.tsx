'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, ShoppingCart, Code, Megaphone } from "lucide-react"

export function ServicesOverview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="services">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-700">Our Services</h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            MktgWeb empowers businesses with cutting-edge web solutions. From stunning designs to powerful e-commerce platforms,
            we deliver tailored services to elevate your online presence and drive growth.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4 mt-8">
          <ServiceCard
            icon={Palette}
            title="Website Design"
            description="Create stunning, responsive websites that captivate your audience and reflect your brand identity."
          />
          <ServiceCard
            icon={ShoppingCart}
            title="E-commerce Solutions"
            description="Build powerful online stores with secure payment gateways and intuitive user experiences."
          />
          <ServiceCard
            icon={Code}
            title="Custom Web Apps"
            description="Develop bespoke web applications tailored to your unique business needs and processes."
          />
          <ServiceCard
            icon={Megaphone}
            title="Digital Marketing"
            description="Boost your online visibility with SEO optimization, content strategy, and social media marketing."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <Card className="flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="rounded-full bg-purple-100 p-3 mb-2">
          <Icon className="h-6 w-6 text-purple-700" />
        </div>
        <CardTitle className="text-xl font-bold text-purple-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-500">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="mt-4 w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
}