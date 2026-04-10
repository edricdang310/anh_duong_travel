"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/ui/BlogCard";
import { mockBlogPosts } from "@/constants/navigation";

export function BlogPreviewSection() {
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
        <section
            className="section-padding"
            style={{ background: "oklch(0.97 0.01 250)" }}
            aria-labelledby="blog-preview-heading"
        >
            <div className="section-container">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
                    <div className="max-w-xl">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 sm:mb-3">
                            📰 Blog du lịch
                        </p>
                        <h2 id="blog-preview-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                            Cẩm Nang & Kinh Nghiệm Du Lịch
                        </h2>
                    </div>
                    <Button asChild variant="outline" className="rounded-full self-start sm:self-auto flex-shrink-0">
                        <Link href="/blog">Xem tất cả bài viết</Link>
                    </Button>
                </div>

                {/* Blog Grid */}
                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto hide-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
                >
                    {mockBlogPosts.map((post) => (
                        <div key={post.id} className="w-[62vw] min-w-[240px] sm:w-auto sm:min-w-[280px] lg:min-w-0 shrink-0 h-full flex flex-col">
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
