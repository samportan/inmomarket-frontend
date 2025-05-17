import { useRef } from "react"
import { HomeHero } from "@/components/Home/HomeHero"
import CompactPropertyCard from "@/components/Home/CompactPropertyCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Carousel with responsive slide (1 card per view on mobile)
function PropertyCarousel({ properties }) {
  const carouselRef = useRef(null)

  // Detect card width based on screen size
  const getScrollAmount = () => {
    if (window.innerWidth < 640) {
      // On mobile, card width is 100vw minus padding/margin (e.g., 1rem)
      return window.innerWidth - 32 // 32px for padding (adjust if needed)
    }
    // On desktop, use fixed card width + gap
    return 340 + 24 // min-w-[340px] + gap-6 (24px)
  }

  const scrollByAmount = (amount) => {
    const scrollAmount = getScrollAmount()
    carouselRef.current.scrollBy({ left: amount * scrollAmount, behavior: "smooth" })
  }

  return (
    <div className="relative">
      {/* Left button */}
      <button
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-black/10 transition rounded-full p-2"
        style={{ pointerEvents: "auto" }}
        onClick={() => scrollByAmount(-1)}
        type="button"
      >
        <ChevronLeft className="h-7 w-7 text-muted-foreground" />
      </button>
      {/* Right button */}
      <button
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-black/10 transition rounded-full p-2"
        style={{ pointerEvents: "auto" }}
        onClick={() => scrollByAmount(1)}
        type="button"
      >
        <ChevronRight className="h-7 w-7 text-muted-foreground" />
      </button>
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {properties.map((property, i) => (
          <div
            key={i}
            className="flex-shrink-0 min-w-full max-w-full sm:min-w-[340px] sm:max-w-sm transition-all"
          >
            <CompactPropertyCard {...property} />
          </div>
        ))}
      </div>
      {/* Hide scrollbar for all browsers */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}

export default function Home() {
  // Example property data
  const popularProperties = [
    {
      imageUrl: "/images/hero1.jpg",
      title: "Luxury Loft",
      price: "$800,000",
      location: "New York, NY",
      bedrooms: 2,
      bathrooms: 2,
      publisherName: "John Doe",
      isNew: true,
    },
    {
      imageUrl: "/images/hero1.jpg",
      title: "Cozy Studio",
      price: "$350,000",
      location: "San Francisco, CA",
      bedrooms: 1,
      bathrooms: 1,
      publisherName: "Alice Smith",
      isNew: false,
    },
    {
      imageUrl: "/images/hero1.jpg",
      title: "Modern Flat",
      price: "$600,000",
      location: "Chicago, IL",
      bedrooms: 3,
      bathrooms: 2,
      publisherName: "Bob Lee",
      isNew: true,
    },
    {
      imageUrl: "/images/hero1.jpg",
      title: "Beach House",
      price: "$1,200,000",
      location: "Miami, FL",
      bedrooms: 4,
      bathrooms: 3,
      publisherName: "Sara Kim",
      isNew: false,
    },
    {
      imageUrl: "/images/hero1.jpg",
      title: "Beach House2",
      price: "$1,200,000",
      location: "Miami, FL",
      bedrooms: 4,
      bathrooms: 3,
      publisherName: "Sara Kim",
      isNew: false,
    },
  ]

  return (
    <div className="p-4 space-y-12">
      <section>
        <div className="h-[400px] bg-muted flex items-center justify-center">
          <HomeHero />
        </div>
      </section>

      {/* Popular Properties */}
      <section className="container space-y-4 mt-10">
        <h2 className="text-2xl font-semibold">Popular Properties</h2>
        <PropertyCarousel properties={popularProperties} />
      </section>

      {/* New Listings */}
      <section className="container space-y-4">
        <h2 className="text-2xl font-semibold">New Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-48 bg-muted rounded-md" />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container text-center space-y-4">
          <h2 className="text-3xl font-bold">List your property today</h2>
          <p className="max-w-xl mx-auto">
            Reach thousands of buyers and renters looking for a home like yours.
          </p>
          {/* TODO: Replace with <Button /> from shadcn */}
          <button className="bg-white text-primary font-medium px-6 py-2 rounded">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-12">
        <div className="container grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>Logo & Copyright</div>
          <div>Links</div>
          <div>Contact Info</div>
        </div>
      </footer>
    </div>
  )
}
