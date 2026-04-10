"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ActivityPost {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    location: string;
    category: string;
    participants: string;
    slug: string;
}

const activityPosts: ActivityPost[] = [
    {
        id: "1",
        title: "Tổ chức đoàn 120 khách tham quan vịnh Hạ Long 3N2Đ",
        description:
            "Chúng tôi đã hoàn thành xuất sắc chuyến tham quan Vịnh Hạ Long cho đoàn doanh nghiệp 120 người, với lịch trình linh hoạt, du thuyền cao cấp và dịch vụ hậu cần chuyên nghiệp.",
        image: "/images/banner/banner1.jpg",
        date: "15/02/2025",
        location: "Vịnh Hạ Long, Quảng Ninh",
        category: "Trong nước",
        participants: "120 khách",
        slug: "doan-ha-long-3n2d",
    },
    {
        id: "2",
        title: "Hành trình khám phá Đà Nẵng - Hội An cho đoàn gia đình",
        description:
            "Tổ chức thành công chuyến du lịch hè cho 80 thành viên gia đình, bao gồm cả trẻ em, với các hoạt động phù hợp mọi lứa tuổi tại Đà Nẵng và phố cổ Hội An.",
        image: "/images/banner/banner1.jpg",
        date: "10/06/2024",
        location: "Đà Nẵng - Hội An",
        category: "Trong nước",
        participants: "80 khách",
        slug: "doan-da-nang-hoi-an",
    },
    {
        id: "3",
        title: "Tour team-building Phú Quốc kết hợp hội nghị",
        description:
            "Lên kế hoạch và tổ chức trọn gói hội nghị kết hợp nghỉ dưỡng 4 ngày tại Phú Quốc cho tập đoàn 200 nhân viên, bao gồm không gian sự kiện, hoạt động ngoài trời và gala dinner.",
        image: "/images/banner/banner1.jpg",
        date: "20/11/2024",
        location: "Phú Quốc, Kiên Giang",
        category: "MICE",
        participants: "200 khách",
        slug: "team-building-phu-quoc",
    },
    {
        id: "4",
        title: "Đoàn tham quan Ninh Bình - Tràng An cho trường học",
        description:
            "Tổ chức chuyến tham quan giáo dục cho 300 học sinh tại khu di sản Tràng An và cố đô Hoa Lư, với chương trình học tập thú vị, an toàn và gắn kết với văn hóa lịch sử dân tộc.",
        image: "/images/banner/banner1.jpg",
        date: "05/04/2024",
        location: "Ninh Bình",
        category: "Trường học",
        participants: "300 học sinh",
        slug: "truong-hoc-ninh-binh",
    },
    {
        id: "5",
        title: "Hành trình Sapa - thung lũng mây 4N3Đ mùa lúa chín",
        description:
            "Đưa đoàn 60 khách trải nghiệm Sapa mùa lúa chín với những thửa ruộng bậc thang vàng óng, chinh phục đỉnh Fansipan và giao lưu văn hóa cùng đồng bào dân tộc.",
        image: "/images/banner/banner1.jpg",
        date: "28/09/2024",
        location: "Sapa, Lào Cai",
        category: "Trong nước",
        participants: "60 khách",
        slug: "doan-sapa-lua-chin",
    },
    {
        id: "6",
        title: "Khám phá Thái Lan - Bangkok & Pattaya cho đoàn doanh nghiệp",
        description:
            "Tổ chức thành công chuyến xuất ngoại 5 ngày tại Thái Lan cho 50 lãnh đạo và nhân viên xuất sắc, tham quan các điểm nổi tiếng tại Bangkok và nghỉ dưỡng tại Pattaya.",
        image: "/images/banner/banner1.jpg",
        date: "12/01/2025",
        location: "Bangkok - Pattaya, Thái Lan",
        category: "Quốc tế",
        participants: "50 khách",
        slug: "doan-thai-lan",
    },
];

const categoryColors: Record<string, string> = {
    "Trong nước": "bg-primary/10 text-primary",
    "Quốc tế": "bg-blue-100 text-blue-700",
    "MICE": "bg-purple-100 text-purple-700",
    "Trường học": "bg-green-100 text-green-700",
};

function ActivityCard({ post }: { post: ActivityPost }) {
    return (
        <article className="group bg-white rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full w-full">
            {/* Thumbnail */}
            <div className="relative h-52 overflow-hidden flex-shrink-0">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Category badge */}
                <span
                    className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}
                >
                    {post.category}
                </span>
                {/* Participants */}
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    👥 {post.participants}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>📅 {post.date}</span>
                    <span>•</span>
                    <span>📍 {post.location}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors min-h-[3rem]">
                    {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    {post.description}
                </p>

                {/* CTA */}
                <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <Link
                        href={`/hoat-dong/${post.slug}`}
                        className="text-sm font-semibold text-primary hover:underline underline-offset-4 transition-colors"
                    >
                        Xem chi tiết →
                    </Link>
                    <Button asChild size="sm" variant="outline" className="rounded-full text-xs px-4">
                        <Link href="/contact">Liên hệ tổ chức</Link>
                    </Button>
                </div>
            </div>
        </article>
    );
}

export function OurActivitiesSection() {
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
        <section className="section-padding bg-muted/40" aria-labelledby="activities-heading">
            <div className="section-container">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 sm:mb-3">
                        🗺 Hoạt động của chúng tôi
                    </p>
                    <h2 id="activities-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                        Những Chuyến Đi Chúng Tôi Đã Tổ Chức
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">
                        Ánh Dương Travel chuyên nhận tổ chức tour trọn gói cho doanh nghiệp, trường học và các đoàn có nhu cầu. Dưới đây là một số hành trình tiêu biểu mà chúng tôi đã thực hiện.
                    </p>
                </div>

                {/* Carousel wrapper */}
                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto hide-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
                >
                    {activityPosts.map((post) => (
                        <div
                            key={post.id}
                            className="w-[62vw] min-w-[240px] sm:w-auto sm:min-w-[280px] lg:min-w-0 shrink-0 h-full flex flex-col"
                        >
                            <ActivityCard post={post} />
                        </div>
                    ))}
                </div>

                {/* View more */}
                <div className="text-center mt-8 sm:mt-12">
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                        <Link href="/hoat-dong">
                            Xem tất cả hoạt động
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
