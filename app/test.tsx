'use client'


export default function Test() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
      <Navbar />
      <main className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <HeroSection />
        <WhyChooseUsSection />
        <ServicesOverview />
        <OurProcess />
        <PricingPlans />
      </main>
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-purple-700">MktgWeb</a>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-700 hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </a>
  )
}

function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Your Online Presence, One Website at a Time
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Helping small businesses grow their brand with tailored web solutions.
            </p>
            <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-purple-100 transition duration-300">
              Get a Free Consultation
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="/placeholder.svg" alt="Web Design Illustration" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-12">Why Choose MktgWeb?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon="🎨"
            title="Custom Design"
            description="Tailored websites that perfectly reflect your brand identity."
          />
          <FeatureCard
            icon="💰"
            title="Affordable Pricing"
            description="High-quality web solutions that fit your budget."
          />
          <FeatureCard
            icon="⚡"
            title="Fast Turnaround"
            description="Quick development and deployment to get you online faster."
          />
          <FeatureCard
            icon="🛠️"
            title="Ongoing Support"
            description="We're here for you long after your website goes live."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-purple-50 rounded-lg p-6 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-100" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Website Design"
            description="Create stunning, responsive websites that captivate your audience."
          />
          <ServiceCard
            title="E-commerce Solutions"
            description="Build powerful online stores with secure payment gateways."
          />
          <ServiceCard
            title="Custom Web Apps"
            description="Develop bespoke web applications tailored to your business needs."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-purple-700 font-semibold hover:text-purple-900">Learn More →</button>
    </div>
  )
}

function OurProcess() {
  return (
    <section className="py-20 bg-white" id="process">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-12">Our Process</h2>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-4">
          <ProcessStep number="1" title="Consultation" description="We discuss your goals and vision." />
          <ProcessStep number="2" title="Planning" description="We create a detailed project roadmap." />
          <ProcessStep number="3" title="Design" description="We craft the perfect look for your site." />
          <ProcessStep number="4" title="Development" description="We bring your website to life." />
          <ProcessStep number="5" title="Launch" description="We deploy and celebrate your new site!" />
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function PricingPlans() {
  return (
    <section className="py-20 bg-gray-100" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-12">Affordable Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price="$999"
            features={[
              "5-page responsive website",
              "Basic SEO optimization",
              "Contact form integration",
              "1 month of support",
            ]}
          />
          <PricingCard
            title="Standard"
            price="$1,999"
            features={[
              "10-page responsive website",
              "Advanced SEO optimization",
              "Social media integration",
              "E-commerce functionality (up to 50 products)",
              "3 months of support",
            ]}
            highlighted={true}
          />
          <PricingCard
            title="Premium"
            price="$3,999"
            features={[
              "20-page responsive website",
              "Premium SEO package",
              "Social media & marketing integration",
              "Full e-commerce solution",
              "Custom web application features",
              "6 months of support",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function PricingCard({ title, price, features, highlighted = false }: { title: string; price: string; features: string[]; highlighted?: boolean }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${highlighted ? 'border-2 border-purple-500' : ''}`}>
      <h3 className="text-2xl font-bold text-purple-700 mb-4">{title}</h3>
      <p className="text-4xl font-bold text-gray-800 mb-6">{price}</p>
      <ul className="mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 px-4 rounded ${highlighted ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-700'} font-semibold hover:bg-purple-600 hover:text-white transition duration-300`}>
        Choose Plan
      </button>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">MktgWeb</h3>
            <p className="text-purple-200">Building your online presence, one website at a time.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-purple-200 hover:text-white">Services</a></li>
              <li><a href="#process" className="text-purple-200 hover:text-white">Process</a></li>
              <li><a href="#pricing" className="text-purple-200 hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-purple-200">Email: info@mktgweb.com</p>
            <p className="text-purple-200">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-purple-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-purple-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-800 mt-8 pt-8 text-center">
          <p className="text-purple-200">&copy; 2023 MktgWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}