import { useState } from "react";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/content/siteConfig";

const Reviews = () => {
  const [showAll, setShowAll] = useState(false);

  const allReviews = site.reviews.map((review) => ({
    ...review,
    location: site.baseCity,
    rating: review.stars,
  }));

  const visibleReviews = showAll ? allReviews : allReviews.slice(0, 6);

  return (
    <section id="reviews" className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2ECC71] font-semibold uppercase tracking-wider text-sm">Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-white/70 text-lg">
            Rated {site.ratingValue} by homeowners across {site.baseCity} and surrounding areas.
          </p>
        </div>

        {/* Aggregate Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#2ECC71] fill-[#2ECC71]" />
              ))}
            </div>
            <div className="text-5xl font-bold text-white mb-1">{site.ratingValue}</div>
            <div className="text-white/60 text-sm">Based on {site.reviewCount} reviews</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#2ECC71]/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-[#2ECC71]/30 mb-4" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#2ECC71] fill-[#2ECC71]" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-6">"{review.text}"</p>

              <div className="border-t border-white/10 pt-4">
                <div className="font-bold text-white">{review.name}</div>
                <div className="text-sm text-white/50">{review.location}</div>
                <div className="text-sm text-[#2ECC71] font-medium mt-1">{review.project}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Show all / See on Google */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {!showAll && allReviews.length > 6 && (
            <Button
              variant="outline"
              className="font-semibold border-white/30 text-white hover:bg-white/10"
              onClick={() => setShowAll(true)}
            >
              See All {allReviews.length} Reviews
            </Button>
          )}
          <Button className="bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold h-12 px-8" asChild>
            <a
              href={site.links.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              See all reviews on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
