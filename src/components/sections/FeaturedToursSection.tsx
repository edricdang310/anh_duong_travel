"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TourCard } from "@/components/ui/TourCard";
import { mockTours } from "@/constants/navigation";

export function FeaturedToursSection() {
    const featuredTours = mockTours.filter((t) => t.featured);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationId: number;
        let isPaused = false;
        let lastTime = 0;
        const PixelsPerSecond = 40; // Tốc độ trượt (px/s)

        const scroll = (time: number) => {
            if (!container) return;
            
            if (lastTime !== 0 && !isPaused && container.scrollWidth > container.clientWidth) {
                const deltaTime = time - lastTime;
                container.scrollLeft += (PixelsPerSecond * deltaTime) / 1000;
                
                // Quay lại đầu khi cuộn đến sát mép cuối
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
                    container.scrollLeft = 0;
                }
            }
            
            lastTime = time;
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        // Tạm dừng cuộn khi người dùng chạm vào (để cuộn thủ công) hoặc rê chuột
        const handleInteractionStart = () => { isPaused = true; };
        const handleInteractionEnd = () => {
            isPaused = false;
            lastTime = performance.now(); // Tránh bị nhảy khung hình sau khi tạm dừng
        };

        container.addEventListener("mouseenter", handleInteractionStart);
        container.addEventListener("mouseleave", handleInteractionEnd);
        container.addEventListener("touchstart", handleInteractionStart, { passive: true });
        container.addEventListener("touchend", handleInteractionEnd);

        return () => {
            cancelAnimationFrame(animationId);
            container.removeEventListener("mouseenter", handleInteractionStart);
            container.removeEventListener("mouseleave", handleInteractionEnd);
            container.removeEventListener("touchstart", handleInteractionStart);
            container.removeEventListener("touchend", handleInteractionEnd);
        };
    }, []);

    return (
        <section className="section-padding bg-background border-0" aria-labelledby="featured-tours-heading">
            <div className="section-container">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 sm:mb-3">
                        ✈ Dịch vụ tour
                    </p>
                    <h2 id="featured-tours-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                        Hành trình nổi bật
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">
                        Ánh Dương Travel nhận tổ chức tour trọn gói cho doanh nghiệp, trường học và các đoàn có nhu cầu. Liên hệ để được tư vấn lịch trình và báo giá.
                    </p>
                </div>

                {/* Tours Grid */}
                <div 
                    ref={scrollContainerRef}
                    // Bỏ snap-x snap-mandatory để hiệu ứng scrollTo smooth nhất có thể
                    className="flex overflow-x-auto hide-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
                >
                    {featuredTours.map((tour) => (
                        // Thiết lập w-[62vw] để hiển thị chính xác 1.5 phần tử (1 phần tử trọn vẹn và 1 nửa phần tử kế tiếp) trên mobile
                        <div key={tour.id} className="w-[62vw] min-w-[240px] sm:w-auto sm:min-w-[280px] lg:min-w-0 shrink-0 h-full">
                            <TourCard tour={tour} />
                        </div>
                    ))}
                </div>

                {/* View all CTA */}
                <div className="text-center mt-8 sm:mt-12">
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
