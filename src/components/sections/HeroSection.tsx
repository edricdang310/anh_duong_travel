import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-0"
            aria-label="Hero - Khám phá thế giới cùng Ánh Dương Travel"
        >
            {/* Background image */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <Image
                    src="/images/banner/banner1.jpg"
                    alt="Phong cảnh du lịch Ánh Dương Travel"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
            </div>

            {/* Overlay gradient — xanh dương tươi sáng, nhẹ nhàng */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background:
                        "linear-gradient(160deg, oklch(0.08 0 0 / 0.72) 0%, oklch(0.12 0 0 / 0.60) 50%, oklch(0.08 0 0 / 0.75) 100%)",
                }}
                aria-hidden="true"
            />

            {/* Decorative soft glows */}
            <div className="absolute inset-0 overflow-hidden z-[2]" aria-hidden="true">
                <div
                    className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, oklch(0.88 0.16 90) 0%, transparent 70%)" }}
                />
                <div
                    className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-15"
                    style={{ background: "radial-gradient(circle, oklch(0.82 0.16 88) 0%, transparent 70%)" }}
                />
            </div>


            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6 text-white/95 text-sm font-medium">
                    <span>⭐</span>
                    <span>20+ Năm đồng hành — Hơn 500,000 khách hàng tin tưởng</span>
                </div>

                {/* H1 */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                    Khám Phá{" "}
                    <span
                        className="relative inline-block"
                        style={{
                            background: "linear-gradient(90deg, oklch(0.94 0.15 96), oklch(0.86 0.17 82))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Thế Giới
                    </span>{" "}
                    <br className="hidden sm:block" />
                    Cùng Ánh Dương
                </h1>

                <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
                    Hành trình đáng nhớ bắt đầu từ đây. Từ vịnh Hạ Long huyền ảo đến những điểm đến kỳ bí nhất thế giới — chúng tôi mang ước mơ thành hiện thực.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        asChild
                        size="lg"
                        className="text-base px-8 py-6 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        style={{
                            background: "linear-gradient(135deg, oklch(0.82 0.16 88), oklch(0.72 0.15 75))",
                            color: "oklch(0.15 0.04 55)",
                        }}
                    >
                        <Link href="/tours">Xem Tất Cả Tours</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="text-base px-8 py-6 rounded-full font-semibold bg-white/15 border-white/50 text-white hover:bg-white/25 hover:border-white/70 backdrop-blur-sm transition-all duration-300"
                    >
                        <Link href="/contact">Tư Vấn Miễn Phí</Link>
                    </Button>
                </div>

                {/* Core Services */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                    {[
                        {
                            icon: "🌍",
                            title: "Tổ Chức Tour Chuyên Nghiệp",
                            desc: "Nhà tổ chức tour du lịch Quốc tế và Nội địa uy tín, mang đến những hành trình trọn vẹn.",
                        },
                        {
                            icon: "✈️",
                            title: "Đại Lý Vé Máy Bay",
                            desc: "Đại lý phân phối vé máy bay chính thức của các Hãng hàng không nội địa và quốc tế.",
                        },
                        {
                            icon: "🤝",
                            title: "Dịch Vụ Du Lịch Trọn Gói",
                            desc: "Làm visa, đặt phòng khách sạn, cho thuê xe, tổ chức sự kiện hội nghị (MICE) chuyên nghiệp.",
                        },
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                        >
                            <div className="text-3xl mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-white/85 leading-relaxed drop-shadow-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Wave divider */}
            {/* <div className="absolute bottom-0 left-0 right-0 z-10 border-0" aria-hidden="true">
                <svg
                    viewBox="0 0 1440 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full block border-0"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 80L48 69.3C96 58.7 192 37.3 288 32C384 26.7 480 37.3 576 42.7C672 48 768 48 864 42.7C960 37.3 1056 26.7 1152 26.7C1248 26.7 1344 37.3 1392 42.7L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
                        fill="oklch(1 0 0)"
                    />
                </svg>
            </div> */}
        </section>
    );
}
