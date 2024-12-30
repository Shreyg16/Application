import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'


export default function ResourcesSection() {
  const resources = [
    {
      image: "/app/Public/more-1.webp",
      title: "The Future of HR for Tech Companies EBOOK",
      cta: "DOWNLOAD NOW",
      href: "#"
    },
    {
      image: "/app/Public/more-2.webp",
      title: "See Namely in action by watching a quick Demo",
      cta: "WATCH NOW",
      href: "#"
    },
    {
      image: "/app/Public/Screen-Shot-2022-02-23-at-2.webp",
      title: "The HR Challenges and Considerations for Tech Industries",
      cta: "DOWNLOAD NOW",
      href: "#"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 md:text-4xl lg:text-5xl">
          Not Ready to Chat but Eager to Learn More?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-6 max-w-[300px]">
                {resource.title}
              </h3>
              <Link
                href={resource.href}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary border-2 border-primary rounded-full transition-colors "
              >
                {resource.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

