import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { mockDestinations } from "@/constants/navigation";

export function PopularDestinationsSection() {
    const destinations = mockDestinations.slice(0, 5);

    return (
        <section
            className="section-padding"
            style={{ background: "oklch(0.97 0.01 250)" }}
            aria-labelledby="destinations-heading"
        >
            <div className="section-container">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        🗺 Điểm đến phổ biến
                    </p>
                    <h2 id="destinations-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Khám Phá Những Điểm Đến Hàng Đầu
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Từ những vịnh biển huyền ảo đến những bản làng văn hóa đặc sắc — mỗi điểm đến là một câu chuyện.
                    </p>
                </div>

                {/* Masonry-like grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
                    {destinations.map((dest, index) => (
                        <div
                            key={dest.id}
                            className={
                                index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""
                            }
                        >
                            <DestinationCard destination={dest} />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                        <Link href="/destinations">
                            Xem tất cả điểm đến
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
