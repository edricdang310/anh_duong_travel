import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/types";

interface BlogCardProps {
    post: BlogPost;
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Card className="group overflow-hidden rounded-2xl border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-0">
            {/* Thumbnail */}
            <Link href={`/blog/${post.slug}`} aria-label={`Đọc bài viết: ${post.title}`} tabIndex={-1}>
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={post.image}
                        alt={`Hình ảnh bài viết: ${post.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs">
                        {post.category}
                    </Badge>
                </div>
            </Link>

            <CardContent className="p-5 space-y-3">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime} phút đọc</span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>

                {/* Author */}
                <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden bg-muted flex-shrink-0">
                        <Image
                            src={post.author.avatar}
                            alt={`Tác giả: ${post.author.name}`}
                            fill
                            className="object-cover"
                            sizes="28px"
                        />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{post.author.name}</span>
                </div>
            </CardContent>
        </Card>
    );
}
