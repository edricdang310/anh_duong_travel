import Link from "next/link";
import { whyChooseUsFeatures } from "@/constants/navigation";

const stats = [
    { value: "500K+", label: "Khách hàng" },
    { value: "20+", label: "Năm kinh nghiệm" },
    { value: "200+", label: "Tours đã tổ chức" },
    { value: "98%", label: "Hài lòng" },
];

export function WhyChooseUsSection() {
    return (
        <section
            className="section-padding relative overflow-hidden"
            aria-labelledby="why-us-heading"
            style={{
                background: "linear-gradient(160deg, oklch(0.10 0 0) 0%, oklch(0.14 0 0) 50%, oklch(0.10 0 0) 100%)",
            }}
        >
            {/* Subtle glow accents */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08]"
                    style={{ background: "radial-gradient(circle, oklch(0.82 0.16 88) 0%, transparent 65%)" }} />
                <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full opacity-[0.05]"
                    style={{ background: "radial-gradient(circle, oklch(0.82 0.16 88) 0%, transparent 65%)" }} />
            </div>

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* ── LEFT COLUMN ── */}
                    <div className="sticky top-24">
                        {/* Label */}
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest"
                            style={{ borderColor: "oklch(0.82 0.16 88 / 0.4)", color: "oklch(0.82 0.16 88)", background: "oklch(0.82 0.16 88 / 0.08)" }}>
                            ✨ Tại sao chọn chúng tôi
                        </div>

                        {/* Headline */}
                        <h2 id="why-us-heading" className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                            Hơn 20 Năm{" "}
                            <span
                                className="inline-block"
                                style={{
                                    background: "linear-gradient(90deg, oklch(0.88 0.16 90), oklch(0.78 0.16 80))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Kinh Nghiệm
                            </span>{" "}
                            Tổ Chức Tour
                        </h2>

                        <p className="text-white/60 text-lg leading-relaxed mb-10">
                            Ánh Dương Travel đã và đang đồng hành cùng hàng triệu du khách, mang đến những hành trình đáng nhớ với chất lượng dịch vụ vượt trội.
                        </p>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl p-5 text-center border"
                                    style={{
                                        background: "oklch(1 0 0 / 0.04)",
                                        borderColor: "oklch(0.82 0.16 88 / 0.18)",
                                    }}
                                >
                                    <p className="text-3xl font-extrabold mb-1"
                                        style={{
                                            background: "linear-gradient(90deg, oklch(0.88 0.16 90), oklch(0.74 0.15 78))",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >{stat.value}</p>
                                    <p className="text-white/50 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            style={{
                                background: "linear-gradient(135deg, oklch(0.82 0.16 88), oklch(0.72 0.15 75))",
                                color: "oklch(0.15 0.04 55)",
                            }}
                        >
                            Liên hệ tư vấn ngay
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* ── RIGHT COLUMN — Vertical numbered feature list ── */}
                    <div className="flex flex-col gap-0">
                        {whyChooseUsFeatures.map((feature, index) => (
                            <div key={feature.id} className="flex gap-5 group">
                                {/* Number + connector line */}
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-extrabold border-2 transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            borderColor: "oklch(0.82 0.16 88 / 0.5)",
                                            color: "oklch(0.82 0.16 88)",
                                            background: "oklch(0.82 0.16 88 / 0.08)",
                                        }}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    {index < whyChooseUsFeatures.length - 1 && (
                                        <div className="w-px flex-1 my-1 min-h-[32px]"
                                            style={{ background: "linear-gradient(to bottom, oklch(0.82 0.16 88 / 0.3), transparent)" }} />
                                    )}
                                </div>

                                {/* Content */}
                                <div className={`pb-8 flex-1 ${index < whyChooseUsFeatures.length - 1 ? "" : ""}`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">{feature.icon}</span>
                                        <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors duration-200">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className="text-white/55 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
