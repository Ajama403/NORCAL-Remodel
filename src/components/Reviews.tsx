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
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Reviews
            <span className="text-gradient"> from {site.baseCity} homeowners</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Rated {site.ratingValue} by Orange County homeowners ({site.reviewCount} reviews).
          </p>
        </div>

        {/* Aggregate Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center bg-card p-8 rounded-2xl shadow-card">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-secondary fill-secondary" />
              ))}
            </div>
            <div className="text-5xl font-bold text-foreground mb-1">{site.ratingValue}</div>
            <div className="text-muted-foreground text-sm">Based on {site.reviewCount} Google reviews</div>
          </div>
        </div>

        {/* Social Proof Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              alt="Google Reviews"
              className="w-10 h-10"
            />
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
              <span className="text-sm font-semibold text-card-foreground">{site.ratingValue}-Star Google Rating</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-card">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <span className="text-lg font-bold text-card-foreground block">{site.businessHours.shortDisplay}</span>
              <span className="text-sm text-muted-foreground">Call/Text {site.phoneDisplay}</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-shadow"
            >
              <Quote className="w-10 h-10 text-secondary/30 mb-4" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">"{review.text}"</p>

              <div className="border-t border-border pt-4">
                <div className="font-bold text-card-foreground">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.location}</div>
                <div className="text-sm text-secondary font-medium mt-1">{review.project}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Show all / See on Google */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {!showAll && allReviews.length > 6 && (
            <Button
              variant="outline"
              className="font-semibold"
              onClick={() => setShowAll(true)}
            >
              See All {allReviews.length} Reviews
            </Button>
          )}
          <Button className="bg-gradient-gold text-primary-foreground hover:opacity-90 font-semibold h-12 px-8" asChild>
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
