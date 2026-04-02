import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Về Chúng Tôi",
    description:
        "Tìm hiểu về Ánh Dương Travel — hơn 20 năm sứ mệnh mang đến những hành trình du lịch đáng nhớ, chuyên nghiệp và giá trị nhất cho khách hàng Việt Nam.",
    openGraph: {
        title: "Về Chúng Tôi | Ánh Dương Travel",
        description: "20 năm mang đến hành trình đáng nhớ cho khách hàng Việt Nam.",
        url: "/about",
    },
};

const stats = [
    { value: "20+", label: "Năm kinh nghiệm" },
    { value: "500K+", label: "Khách hàng" },
    { value: "200+", label: "Tours" },
    { value: "50+", label: "Điểm đến" },
];

const values = [
    {
        icon: "🌟",
        title: "Chất lượng",
        description: "Cam kết cung cấp dịch vụ đạt tiêu chuẩn cao nhất trong mọi hành trình.",
    },
    {
        icon: "❤️",
        title: "Tận tâm",
        description: "Đội ngũ nhân viên luôn sẵn sàng phục vụ và hỗ trợ khách hàng 24/7.",
    },
    {
        icon: "🌱",
        title: "Bền vững",
        description: "Du lịch có trách nhiệm với môi trường và cộng đồng địa phương.",
    },
    {
        icon: "🤝",
        title: "Tin cậy",
        description: "Minh bạch, trung thực và luôn giữ đúng cam kết với khách hàng.",
    },
];

export default function AboutPage() {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative py-32 text-white overflow-hidden"
                aria-label="Về chúng tôi"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner/banner1.jpg"
                        alt="Đội ngũ Ánh Dương Travel"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
                </div>

                <div className="relative z-10 section-container text-center">
                    <p className="font-semibold text-sm uppercase tracking-widest mb-4 opacity-90 drop-shadow-sm">🏢 Về chúng tôi</p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg text-white">
                        Hơn 20 Năm Đồng Hành <br className="hidden sm:block" />
                        Cùng Triệu Du Khách
                    </h1>
                    <p className="text-white/90 text-xl max-w-2xl mx-auto leading-relaxed drop-shadow">
                        Ánh Dương Travel được thành lập với sứ mệnh làm cho những ước mơ du lịch trở thành hiện thực — cho tất cả mọi người.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-background border-b border-border" aria-label="Thống kê">
                <div className="section-container">
                    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <dt className="text-muted-foreground text-sm mt-1">{stat.label}</dt>
                                <dd className="text-4xl font-extrabold text-primary">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding bg-background" aria-labelledby="story-heading">
                <div className="section-container">
                    <div className="max-w-3xl mx-auto">
                        <h2 id="story-heading" className="text-3xl font-bold mb-6 text-center">Câu Chuyện Của Chúng Tôi</h2>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Được thành lập năm 2004, Ánh Dương Travel khởi đầu với một văn phòng nhỏ tại TP. Hồ Chí Minh và niềm đam mê mãnh liệt với du lịch. Qua 20 năm phát triển, chúng tôi đã trở thành một trong những công ty du lịch uy tín nhất Việt Nam.
                            </p>
                            <p>
                                Hơn nửa triệu du khách đã tin tưởng lựa chọn Ánh Dương Travel cho những hành trình đáng nhớ của họ — từ những chuyến du lịch trong nước khám phá vẻ đẹp Việt Nam, đến những chuyến du lịch quốc tế đến các điểm đến xa xôi trên khắp thế giới.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding" style={{ background: "oklch(0.97 0.01 250)" }} aria-labelledby="values-heading">
                <div className="section-container">
                    <h2 id="values-heading" className="text-3xl font-bold text-center mb-12">Giá Trị Cốt Lõi</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val) => (
                            <div key={val.title} className="text-center p-6 rounded-2xl bg-background border border-border hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">{val.icon}</div>
                                <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
