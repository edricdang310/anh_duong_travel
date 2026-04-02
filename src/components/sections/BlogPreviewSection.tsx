import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/ui/BlogCard";
import { mockBlogPosts } from "@/constants/navigation";

export function BlogPreviewSection() {
    return (
        <section
            className="section-padding"
            style={{ background: "oklch(0.97 0.01 250)" }}
            aria-labelledby="blog-preview-heading"
        >
            <div className="section-container">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                    <div className="max-w-xl">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                            📰 Blog du lịch
                        </p>
                        <h2 id="blog-preview-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
                            Cẩm Nang & Kinh Nghiệm Du Lịch
                        </h2>
                    </div>
                    <Button asChild variant="outline" className="rounded-full self-start sm:self-auto flex-shrink-0">
                        <Link href="/blog">Xem tất cả bài viết</Link>
                    </Button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockBlogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
