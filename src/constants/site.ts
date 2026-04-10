export const siteConfig = {
    name: "Công ty TNHH Du Lịch Và Dịch Vụ Ánh Dương Travel",
    shortName: "Ánh Dương Travel",
    description:
        "Khám phá những hành trình đẹp nhất Việt Nam và thế giới cùng Ánh Dương Travel. Chúng tôi mang đến trải nghiệm du lịch đáng nhớ với giá tốt nhất.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://anhduongtravel.vn",
    ogImage: "/og-image.jpg",
    phone: "0912039200 / 0974637633",
    email: "anhduongtravelhn.vn@gmail.com",
    address: "Số 28/136 Phố Tây Sơn, Phường Đống Đa, Thành Phố Hà Nội",
    vpMienNam: "A1/31C, Ấp 1, Bình Chánh, Thành Phố Hồ Chí Minh",
    representative: "Bà Nguyễn Thị Sâm",
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
