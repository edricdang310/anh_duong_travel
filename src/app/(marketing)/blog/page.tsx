import type { Metadata } from "next";
import { BlogCard } from "@/components/ui/BlogCard";
import { mockBlogPosts } from "@/constants/navigation";

export const metadata: Metadata = {
    title: "Blog Du Lịch",
    description:
        "Cẩm nang du lịch, kinh nghiệm khám phá và những câu chuyện hành trình thú vị từ đội ngũ Ánh Dương Travel.",
    openGraph: {
        title: "Blog Du Lịch | Ánh Dương Travel",
        description: "Cẩm nang du lịch và kinh nghiệm khám phá từ Ánh Dương Travel.",
        url: "/blog",
    },
};

export default function BlogPage() {
    return (
        <div className="section-padding">
            <div className="section-container">
                {/* Page Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">📰 Blog</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
                        Cẩm Nang & Kinh Nghiệm Du Lịch
                    </h1>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Những bài viết hữu ích, kinh nghiệm thực tế và cảm hứng du lịch từ đội ngũ chuyên gia của chúng tôi.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockBlogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
