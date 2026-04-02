import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CTABookingSection() {
    return (
        <section
            className="relative overflow-hidden py-20"
            aria-labelledby="cta-heading"
        >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/banner/banner1.jpg"
                    alt=""
                    fill
                    className="object-cover object-center"
                    aria-hidden="true"
                />
                {/* Overlay - black dim */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(135deg, oklch(0.08 0 0 / 0.78) 0%, oklch(0.12 0 0 / 0.72) 50%, oklch(0.08 0 0 / 0.80) 100%)",
                    }}
                />
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-10" aria-hidden="true">
                <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-15"
                    style={{ background: "radial-gradient(circle, oklch(0.88 0.16 90) 0%, transparent 70%)" }}
                />
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15"
                    style={{ background: "radial-gradient(circle, oklch(0.88 0.16 90) 0%, transparent 70%)" }}
                />
            </div>

            <div className="relative z-20 section-container text-center">
                {/* Emoji decoration */}
                <div className="text-5xl mb-6" aria-hidden="true">✈️</div>

                <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                    Sẵn Sàng Cho Chuyến Hành Trình
                    <br className="hidden sm:block" /> Đáng Nhớ Của Bạn?
                </h2>

                <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Đừng để những kỳ nghỉ lý tưởng chỉ là ước mơ. Hãy để Ánh Dương Travel biến chúng thành hiện thực với giá tốt nhất và dịch vụ chu đáo nhất.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        asChild
                        size="lg"
                        className="bg-white hover:bg-white/90 text-base px-10 py-6 rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                        style={{ color: "oklch(0.20 0.08 68)" }}
                    >
                        <Link href="/tours">Đặt Tour Ngay</Link>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        className="text-base px-10 py-6 rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300"
                        style={{
                            background: "linear-gradient(135deg, oklch(0.82 0.16 88), oklch(0.72 0.15 75))",
                            color: "oklch(0.15 0.04 55)",
                        }}
                    >
                        <Link href="/contact">
                            <span className="mr-2">📞</span>
                            Gọi Tư Vấn
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
