import type { Metadata } from "next";
import Link from "next/link";
import { TourCard } from "@/components/ui/TourCard";
import { mockTours } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Tours Du Lịch",
    description:
        "Khám phá hàng trăm tour du lịch trong nước và quốc tế hấp dẫn cùng Ánh Dương Travel. Tour nội địa, tour nước ngoài, du thuyền, mạo hiểm.",
    openGraph: {
        title: "Tours Du Lịch | Ánh Dương Travel",
        description: "Hàng trăm tour du lịch trong nước và quốc tế với giá tốt nhất.",
        url: "/tours",
    },
};

export default function ToursPage() {
    return (
        <div className="section-padding">
            <div className="section-container">
                {/* Page Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">✈ Danh sách tours</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
                        Khám Phá Tất Cả Tours
                    </h1>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Từ tour trong nước đến quốc tế — hàng trăm lựa chọn phù hợp với mọi nhu cầu và ngân sách.
                    </p>
                </div>

                {/* Filter Bar Placeholder */}
                <div className="flex flex-wrap gap-3 justify-center mb-10">
                    {["Tất cả", "Trong nước", "Nước ngoài", "Biển đảo", "Núi rừng", "Văn hóa", "Mạo hiểm"].map(
                        (cat) => (
                            <Button
                                key={cat}
                                variant={cat === "Tất cả" ? "default" : "outline"}
                                size="sm"
                                className="rounded-full"
                                aria-pressed={cat === "Tất cả"}
                            >
                                {cat}
                            </Button>
                        )
                    )}
                </div>

                {/* Tours Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockTours.map((tour) => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-14 p-8 rounded-2xl bg-muted">
                    <h2 className="text-xl font-bold mb-2">Không tìm thấy tour phù hợp?</h2>
                    <p className="text-muted-foreground mb-4">Hãy liên hệ với chúng tôi để được tư vấn tour theo yêu cầu riêng.</p>
                    <Button asChild>
                        <Link href="/contact">Liên hệ tư vấn ngay</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
