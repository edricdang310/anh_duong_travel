import type { Metadata } from "next";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { mockDestinations } from "@/constants/navigation";

export const metadata: Metadata = {
    title: "Điểm Đến Du Lịch",
    description:
        "Khám phá những điểm đến du lịch hàng đầu Việt Nam và thế giới cùng Ánh Dương Travel. Hạ Long, Sapa, Hội An, Phú Quốc và nhiều hơn nữa.",
    openGraph: {
        title: "Điểm Đến Du Lịch | Ánh Dương Travel",
        description: "Những điểm đến du lịch hàng đầu trong nước và quốc tế.",
        url: "/destinations",
    },
};

export default function DestinationsPage() {
    return (
        <div className="section-padding">
            <div className="section-container">
                {/* Page Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">🗺 Điểm đến</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
                        Khám Phá Những Điểm Đến Tuyệt Vời
                    </h1>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Mỗi điểm đến là một câu chuyện riêng, một nền văn hóa độc đáo đang chờ bạn khám phá.
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockDestinations.map((destination) => (
                        <DestinationCard key={destination.id} destination={destination} />
                    ))}
                </div>
            </div>
        </div>
    );
}
