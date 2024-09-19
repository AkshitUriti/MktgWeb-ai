'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in web development and digital marketing, Jane leads our team with passion and innovation.",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "John Smith",
    role: "Lead Developer",
    bio: "John's expertise in full-stack development ensures our clients receive cutting-edge web solutions tailored to their needs.",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Emily Brown",
    role: "UX/UI Designer",
    bio: "Emily's keen eye for design and user experience helps create visually stunning and highly functional websites for our clients.",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Michael Lee",
    role: "Digital Marketing Specialist",
    bio: "Michael's strategies in SEO and content marketing drive traffic and engagement for our clients' web presence.",
    image: "/placeholder.svg?height=400&width=400"
  }
]

export function OurTeamComponent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Meet the Experts
          </h2>
          <p className="max-w-[900px] text-zinc-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our team of seasoned professionals is dedicated to bringing your digital vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  index: number;
}

function TeamMemberCard({ name, role, bio, image, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <CardHeader className="p-0">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover transition-all duration-300 hover:scale-105"
          />
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-purple-700 mb-2">{name}</h3>
          <p className="text-sm font-medium text-purple-600 mb-4">{role}</p>
          <p className="text-zinc-600 text-sm">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}