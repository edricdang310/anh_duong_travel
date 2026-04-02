import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedToursSection } from "@/components/sections/FeaturedToursSection";
import { PopularDestinationsSection } from "@/components/sections/PopularDestinationsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { OurActivitiesSection } from "@/components/sections/OurActivitiesSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { CTABookingSection } from "@/components/sections/CTABookingSection";

export const metadata: Metadata = {
    title: "Ánh Dương Travel - Khám Phá Thế Giới Cùng Chúng Tôi",
    description:
        "Ánh Dương Travel - Đơn vị du lịch hàng đầu Việt Nam với hơn 20 năm kinh nghiệm. Khám phá hàng trăm tour du lịch trong nước và quốc tế với giá tốt nhất.",
    openGraph: {
        title: "Ánh Dương Travel - Khám Phá Thế Giới Cùng Chúng Tôi",
        description:
            "Đơn vị du lịch hàng đầu Việt Nam với hơn 20 năm kinh nghiệm. Hàng trăm tour trong nước và quốc tế.",
        url: "/",
    },
};

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturedToursSection />
            <PopularDestinationsSection />
            <WhyChooseUsSection />
            <OurActivitiesSection />
            <BlogPreviewSection />
            <CTABookingSection />
        </>
    );
}

