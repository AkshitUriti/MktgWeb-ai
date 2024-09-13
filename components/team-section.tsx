'use client'

import Image from "next/image"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Lead Developer",
      bio: "10+ years of experience in full-stack development. Passionate about creating scalable web applications.",
      imageUrl: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "John Smith",
      role: "UX Designer",
      bio: "Expert in user-centered design with a keen eye for creating intuitive and engaging interfaces.",
      imageUrl: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Emily Johnson",
      role: "Project Manager",
      bio: "Certified PMP with a track record of delivering complex projects on time and within budget.",
      imageUrl: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Michael Brown",
      role: "Data Scientist",
      bio: "PhD in Machine Learning, specializing in predictive analytics and natural language processing.",
      imageUrl: "/placeholder.svg?height=400&width=400"
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-[#2581f3] to-[#fcfcfd]"> {/* {{ edit_1 }} */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Meet the Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#0a274c]">{member.name}</h3>
                <p className="text-[#2581f3] mb-4">{member.role}</p>
                <p className="text-[#0a274c] text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}