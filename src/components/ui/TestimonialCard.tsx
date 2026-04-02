import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

function StarFill({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${count} sao`} role="img">
            {Array.from({ length: count }).map((_, i) => (
                <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300 p-0">
            <CardContent className="p-6 flex flex-col h-full space-y-4">
                {/* Quote mark */}
                <div className="text-4xl text-primary/20 font-serif leading-none select-none" aria-hidden="true">
                    &ldquo;
                </div>

                {/* Stars */}
                <StarFill count={testimonial.rating} />

                {/* Quote text */}
                <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                    &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Tour badge */}
                <div className="text-xs text-primary bg-primary/8 rounded-full px-3 py-1 w-fit font-medium">
                    ✈ {testimonial.tourName}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                        <Image
                            src={testimonial.avatar}
                            alt={`Ảnh đại diện ${testimonial.name}`}
                            fill
                            className="object-cover"
                            sizes="40px"
                        />
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
