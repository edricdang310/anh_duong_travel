import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Tour } from "@/types";

interface TourCardProps {
    tour: Tour;
}

const categoryLabels: Record<Tour["category"], string> = {
    cultural: "Văn hóa",
    adventure: "Mạo hiểm",
    beach: "Biển đảo",
    mountain: "Núi rừng",
    city: "Thành phố",
    eco: "Sinh thái",
};

function formatPrice(price: number): string {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0,
    }).format(price);
}

function StarRating({ rating }: { rating: number }) {
    const full = Math.floor(rating);
    const decimal = rating - full;
    return (
        <div className="flex items-center gap-0.5" aria-label={`Đánh giá ${rating} sao`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    className={`w-3.5 h-3.5 ${i < full
                            ? "text-yellow-400 fill-yellow-400"
                            : i === full && decimal >= 0.5
                                ? "text-yellow-400 fill-yellow-200"
                                : "text-gray-300 fill-gray-200"
                        }`}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export function TourCard({ tour }: TourCardProps) {
    return (
        <Card className="group overflow-hidden rounded-2xl border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-0">
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <Badge
                    className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs"
                    aria-label={`Danh mục: ${categoryLabels[tour.category]}`}
                >
                    {categoryLabels[tour.category]}
                </Badge>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    ⏱ {tour.duration}
                </div>
            </div>

            <CardContent className="p-5 space-y-3">
                {/* Title */}
                <h3 className="font-semibold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {tour.title}
                </h3>

                {/* Destination */}
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span aria-hidden="true">📍</span>
                    {tour.destination}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <StarRating rating={tour.rating} />
                    <span className="text-xs text-muted-foreground">
                        {tour.rating} ({tour.reviewCount} đánh giá)
                    </span>
                </div>

                {/* Contact CTA */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div>
                        <p className="text-xs text-muted-foreground">Liên hệ để biết</p>
                        <p className="text-sm font-bold text-primary">Giá & lịch trình</p>
                    </div>
                    <Button asChild size="sm" className="rounded-full text-xs px-4">
                        <Link href="/contact" aria-label={`Liên hệ tư vấn tour ${tour.title}`}>
                            Liên hệ tư vấn
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
