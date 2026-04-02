import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TourCard } from "@/components/ui/TourCard";
import { mockTours } from "@/constants/navigation";

export function FeaturedToursSection() {
    const featuredTours = mockTours.filter((t) => t.featured);

    return (
        <section className="section-padding bg-background border-0" aria-labelledby="featured-tours-heading">
            <div className="section-container">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        ✈ Dịch vụ tour
                    </p>
                    <h2 id="featured-tours-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Chúng Tôi Tổ Chức Những Hành Trình Này
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Ánh Dương Travel nhận tổ chức tour trọn gói cho doanh nghiệp, trường học và các đoàn có nhu cầu. Liên hệ để được tư vấn lịch trình và báo giá.
                    </p>
                </div>

                {/* Tours Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredTours.map((tour) => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>

                {/* View all CTA */}
                <div className="text-center mt-12">
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                        <Link href="/contact">
                            Liên hệ tổ chức tour
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
