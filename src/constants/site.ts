export const siteConfig = {
    name: "Ánh Dương Travel",
    shortName: "Ánh Dương",
    description:
        "Khám phá những hành trình đẹp nhất Việt Nam và thế giới cùng Ánh Dương Travel. Chúng tôi mang đến trải nghiệm du lịch đáng nhớ với giá tốt nhất.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://anhdvuongtravel.vn",
    ogImage: "/og-image.jpg",
    phone: "+84 (028) 3822 1234",
    email: "info@anhduongtravel.vn",
    address: "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh, Việt Nam",
    workingHours: "Thứ 2 - Thứ 7: 8:00 - 18:00",
    socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
    },
    keywords: [
        "du lịch",
        "tour du lịch",
        "Việt Nam",
        "Ánh Dương Travel",
        "du lịch trong nước",
        "du lịch nước ngoài",
        "tour giá rẻ",
        "du lịch cao cấp",
    ],
} as const;

export type SiteConfig = typeof siteConfig;
