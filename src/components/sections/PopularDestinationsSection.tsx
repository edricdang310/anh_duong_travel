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

                {/* Responsive Gallery Layout */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px] lg:auto-rows-[350px] w-full">
                    {destinations.map((dest, index) => {
                        let spanClass = "";
                        if (index === 0) {
                            // Vịnh Hạ Long (index 0):
                            // Luôn chiếm 2 hàng.
                            // Trên Desktop (lg): rộng 50% (2 cột).
                            spanClass = "row-span-2 lg:col-span-2";
                        } else {
                            // Các ảnh nhỏ gọn 1 ô (50% hoặc 25% chiều ngang tuỳ khung hiển thị).
                            spanClass = "col-span-1 row-span-1";
                        }

                        return (
                            <div
                                key={dest.id}
                                className={`w-full h-full ${spanClass}`}
                            >
                                <DestinationCard destination={dest} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
