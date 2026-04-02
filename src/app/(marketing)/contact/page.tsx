import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
    title: "Liên Hệ",
    description:
        "Liên hệ với Ánh Dương Travel để được tư vấn miễn phí về tour du lịch. Đội ngũ chuyên nghiệp sẵn sàng hỗ trợ bạn 24/7.",
    openGraph: {
        title: "Liên Hệ | Ánh Dương Travel",
        description: "Tư vấn tour du lịch miễn phí từ đội ngũ chuyên nghiệp của Ánh Dương Travel.",
        url: "/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="section-padding">
            <div className="section-container">
                {/* Page Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        📞 Liên hệ
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
                        Chúng Tôi Luôn Sẵn Sàng Hỗ Trợ
                    </h1>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Hãy để lại thông tin hoặc liên hệ trực tiếp — đội ngũ chuyên gia của chúng tôi sẽ tư vấn miễn phí cho bạn.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <aside className="space-y-6" aria-label="Thông tin liên hệ">
                        <div className="p-6 rounded-2xl border border-border bg-muted/30 space-y-5">
                            <h2 className="text-lg font-bold text-foreground">Thông Tin Văn Phòng</h2>
                            <address className="not-italic space-y-4">
                                {[
                                    { icon: "📍", label: "Địa chỉ", value: siteConfig.address },
                                    { icon: "📞", label: "Điện thoại", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                                    { icon: "✉️", label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                                    { icon: "🕐", label: "Giờ làm việc", value: siteConfig.workingHours },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-3">
                                        <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">{item.icon}</span>
                                        <div>
                                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-sm text-foreground hover:text-primary transition-colors">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-sm text-foreground">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </address>
                        </div>

                        {/* Map placeholder */}
                        <div
                            className="rounded-2xl overflow-hidden h-48 flex items-center justify-center text-white text-sm font-medium"
                            style={{ background: "linear-gradient(135deg, oklch(0.35 0.12 250), oklch(0.45 0.15 240))" }}
                            aria-label="Bản đồ văn phòng Ánh Dương Travel"
                        >
                            <div className="text-center">
                                <div className="text-3xl mb-2" aria-hidden="true">🗺️</div>
                                <p className="text-white/80 text-xs">Bản đồ sẽ được tích hợp</p>
                            </div>
                        </div>
                    </aside>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl border border-border bg-background shadow-sm">
                        <h2 className="text-xl font-bold text-foreground mb-6">Gửi Yêu Cầu Tư Vấn</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
