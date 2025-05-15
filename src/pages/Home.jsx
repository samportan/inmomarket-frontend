

export default function Home() {
  return (
    <div className="p-4 space-y-12">
      {/* Hero / Featured Carousel */}
      <section>
        {/* Carousel component */}
        {/* TODO: <FeaturedCarousel /> */}
        <div className="h-[400px] bg-muted flex items-center justify-center">
          Carousel Placeholder
        </div>
      </section>

      {/* Popular Properties */}
      <section className="container space-y-4">
        <h2 className="text-2xl font-semibold">Popular Properties</h2>
        {/* TODO: <PopularPropertiesCarousel /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Placeholder cards */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-48 bg-muted rounded-md" />
          ))}
        </div>
      </section>

      {/* New Listings */}
      <section className="container space-y-4">
        <h2 className="text-2xl font-semibold">New Listings</h2>
        {/* TODO: <NewListingsGrid /> */}
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
