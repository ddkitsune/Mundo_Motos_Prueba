import Image from "next/image"
import Link from "next/link"

const brands = [
  {
    name: "Yamaha",
    logo: "/images/brands/yamaha-logo.png",
    href: "/marcas/yamaha",
  },
  {
    name: "Honda",
    logo: "/images/brands/honda-logo.png",
    href: "/marcas/honda",
  },
  {
    name: "Kawasaki",
    logo: "/images/brands/kawasaki-logo.png",
    href: "/marcas/kawasaki",
  },
  {
    name: "Suzuki",
    logo: "/images/brands/suzuki-logo.png",
    href: "/marcas/suzuki",
  },
  {
    name: "BMW",
    logo: "/images/brands/bmw-logo.png",
    href: "/marcas/bmw",
  },
  {
    name: "Harley Davidson",
    logo: "/images/brands/harley-logo.png",
    href: "/marcas/harley-davidson",
  },
]

export function BrandsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Marcas Oficiales</h2>
          <p className="text-gray-600">Trabajamos con las mejores marcas del mundo motociclista</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="group flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors duration-300"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} Logo`}
                width={120}
                height={80}
                className="w-full h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
