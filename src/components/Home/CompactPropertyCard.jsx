import { BedDouble, Bath, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Use a regular img tag instead of next/image
export default function CompactPropertyCard({
  imageUrl = "/placeholder.svg?height=120&width=160",
  title = "Modern Apartment",
  price = "$450,000",
  location = "Seattle",
  bedrooms = 3,
  bathrooms = 2,
  publisherName = "Jane Cooper",
  isNew = false,
}) {
  return (
    <Card className="overflow-hidden hover:shadow-sm transition-all">
      <div className="flex h-full">
        <div className="relative w-1/3 min-w-[120px]">
          {isNew && (
            <Badge className="absolute left-2 top-2 z-10" variant="secondary">
              New
            </Badge>
          )}
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={160}
            height={120}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <CardContent className="flex flex-col justify-between p-3 w-2/3">
          <div>
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
              <p className="font-semibold text-sm">{price}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
              <MapPin className="h-3 w-3" />
              <span className="line-clamp-1">{location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1">
                <BedDouble className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{bathrooms}</span>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">{publisherName}</div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
