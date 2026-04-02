import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { mockTestimonials } from "@/constants/navigation";

export function TestimonialsSection() {
    return (
        <section className="section-padding bg-background" aria-labelledby="testimonials-heading">
            <div className="section-container">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        💬 Khách hàng nói gì
                    </p>
                    <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Hàng Nghìn Khách Hàng Hài Lòng
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Những câu chuyện thực tế từ du khách đã trải nghiệm dịch vụ của Ánh Dương Travel.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mockTestimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>

                {/* Trust badges */}
                <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-center">
                    {[
                        { value: "4.9/5", label: "Điểm đánh giá", icon: "⭐" },
                        { value: "500K+", label: "Khách hàng hài lòng", icon: "😊" },
                        { value: "98%", label: "Tỷ lệ quay lại", icon: "🔄" },
                    ].map((badge) => (
                        <div key={badge.label} className="flex flex-col items-center gap-1">
                            <div className="text-2xl">{badge.icon}</div>
                            <p className="text-2xl font-bold text-primary">{badge.value}</p>
                            <p className="text-xs text-muted-foreground">{badge.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
