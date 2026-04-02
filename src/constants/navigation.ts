import type { NavItem } from "@/types";
import type { Tour, Destination, BlogPost, Testimonial, Feature } from "@/types";

export const navLinks: NavItem[] = [
    { label: "Trang chủ", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: "Điểm đến", href: "/destinations" },
    { label: "Về chúng tôi", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Liên hệ", href: "/contact" },
];

export const footerQuickLinks = [
    { label: "Trang chủ", href: "/" },
    { label: "Về chúng tôi", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Liên hệ", href: "/contact" },
];

export const footerTourLinks = [
    { label: "Tour trong nước", href: "/tours" },
    { label: "Tour nước ngoài", href: "/tours" },
    { label: "Tour mạo hiểm", href: "/tours" },
    { label: "Tour nghỉ dưỡng", href: "/tours" },
];

export const mockTours: Tour[] = [
    {
        id: "1",
        slug: "ha-long-bay-3n2d",
        title: "Vịnh Hạ Long 3 Ngày 2 Đêm",
        description:
            "Khám phá kỳ quan thiên nhiên thế giới Vịnh Hạ Long với những hang động tuyệt đẹp.",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop",
        price: 3500000,
        duration: "3 ngày 2 đêm",
        rating: 4.9,
        reviewCount: 248,
        destination: "Quảng Ninh",
        category: "beach",
        featured: true,
    },
    {
        id: "2",
        slug: "sapa-trekking-4n3d",
        title: "Sapa Trekking & Khám Phá Bản Làng",
        description:
            "Chinh phục đỉnh Fansipan và khám phá văn hoá các dân tộc thiểu số tại Sapa.",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&auto=format&fit=crop",
        price: 4200000,
        duration: "4 ngày 3 đêm",
        rating: 4.8,
        reviewCount: 182,
        destination: "Lào Cai",
        category: "mountain",
        featured: true,
    },
    {
        id: "3",
        slug: "hoi-an-da-nang-4n3d",
        title: "Hội An - Đà Nẵng Khám Phá Miền Trung",
        description:
            "Dạo phố cổ Hội An lung linh đèn hoa, tắm biển Mỹ Khê và chinh phục Bà Nà Hills.",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&auto=format&fit=crop",
        price: 5800000,
        duration: "4 ngày 3 đêm",
        rating: 4.7,
        reviewCount: 314,
        destination: "Quảng Nam - Đà Nẵng",
        category: "cultural",
        featured: true,
    },
    {
        id: "4",
        slug: "phu-quoc-beach-5n4d",
        title: "Phú Quốc Đảo Ngọc 5 Ngày 4 Đêm",
        description:
            "Nghỉ dưỡng tại đảo ngọc Phú Quốc với biển xanh, cát trắng và resort 5 sao đẳng cấp.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop",
        price: 7500000,
        duration: "5 ngày 4 đêm",
        rating: 4.9,
        reviewCount: 421,
        destination: "Kiên Giang",
        category: "beach",
        featured: true,
    },
    {
        id: "5",
        slug: "ninh-binh-1day",
        title: "Ninh Bình - Tràng An 1 Ngày",
        description:
            "Khám phá Tràng An, Bích Động và cố đô Hoa Lư trong chuyến du lịch 1 ngày.",
        image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&auto=format&fit=crop",
        price: 850000,
        duration: "1 ngày",
        rating: 4.6,
        reviewCount: 527,
        destination: "Ninh Bình",
        category: "cultural",
        featured: false,
    },
    {
        id: "6",
        slug: "bangkok-thailand-5n4d",
        title: "Bangkok - Pattaya Thái Lan 5N4Đ",
        description:
            "Khám phá Bangkok sôi động, tắm biển Pattaya và mua sắm tại xứ sở chùa vàng.",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&auto=format&fit=crop",
        price: 9900000,
        duration: "5 ngày 4 đêm",
        rating: 4.7,
        reviewCount: 289,
        destination: "Thái Lan",
        category: "city",
        featured: false,
    },
];

export const mockDestinations: Destination[] = [
    {
        id: "1",
        slug: "ha-long-bay",
        name: "Vịnh Hạ Long",
        country: "Việt Nam",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format&fit=crop",
        tourCount: 12,
        description: "Kỳ quan thiên nhiên thế giới",
        featured: true,
    },
    {
        id: "2",
        slug: "sapa",
        name: "Sapa",
        country: "Việt Nam",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&auto=format&fit=crop",
        tourCount: 8,
        description: "Thiên đường mây mù và ruộng bậc thang",
        featured: true,
    },
    {
        id: "3",
        slug: "hoi-an",
        name: "Hội An",
        country: "Việt Nam",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&auto=format&fit=crop",
        tourCount: 15,
        description: "Phố cổ lung linh đèn hoa",
        featured: true,
    },
    {
        id: "4",
        slug: "phu-quoc",
        name: "Phú Quốc",
        country: "Việt Nam",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop",
        tourCount: 10,
        description: "Đảo ngọc thiên đường",
        featured: true,
    },
    {
        id: "5",
        slug: "ninh-binh",
        name: "Ninh Bình",
        country: "Việt Nam",
        image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&auto=format&fit=crop",
        tourCount: 6,
        description: "Vịnh Hạ Long trên cạn",
        featured: true,
    },
    {
        id: "6",
        slug: "bangkok",
        name: "Bangkok",
        country: "Thái Lan",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop",
        tourCount: 7,
        description: "Kinh đô Phật giáo sôi động",
        featured: false,
    },
];

export const mockTestimonials: Testimonial[] = [
    {
        id: "1",
        name: "Nguyễn Minh Anh",
        role: "Giáo viên",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=MinAnh",
        rating: 5,
        content:
            "Chuyến đi Hạ Long cùng Ánh Dương Travel thực sự tuyệt vời! Hướng dẫn viên nhiệt tình, khách sạn sạch đẹp. Tôi sẽ chắc chắn quay lại.",
        tourName: "Vịnh Hạ Long 3N2Đ",
    },
    {
        id: "2",
        name: "Trần Văn Hùng",
        role: "Kỹ sư phần mềm",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=VanHung",
        rating: 5,
        content:
            "Tour Sapa rất xứng đáng với giá tiền. Cảnh đẹp, không khí trong lành, đặc biệt buổi sáng sớm ngắm mây từ đỉnh Fansipan – không thể quên!",
        tourName: "Sapa Trekking 4N3Đ",
    },
    {
        id: "3",
        name: "Lê Thị Hoa",
        role: "Nhân viên văn phòng",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=ThiHoa",
        rating: 5,
        content:
            "Đây là lần đầu tôi đi tour nước ngoài và Ánh Dương Travel đã làm cho tôi hoàn toàn an tâm. Mọi dịch vụ đều được sắp xếp rất chuyên nghiệp.",
        tourName: "Bangkok - Pattaya 5N4Đ",
    },
];

export const mockBlogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "kinh-nghiem-du-lich-ha-long",
        title: "Kinh Nghiệm Du Lịch Hạ Long A-Z Cho Người Lần Đầu",
        excerpt:
            "Tổng hợp tất cả những kinh nghiệm quý báu khi đi du lịch Hạ Long, từ lựa chọn tour đến những điểm không thể bỏ qua.",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop",
        category: "Kinh nghiệm",
        author: { name: "Minh Châu", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=MinhChau" },
        publishedAt: "2025-12-15",
        readTime: 8,
    },
    {
        id: "2",
        slug: "top-10-diem-an-ngon-sapa",
        title: "Top 10 Địa Điểm Ăn Ngon Không Thể Bỏ Qua Ở Sapa",
        excerpt:
            "Sapa không chỉ đẹp ở cảnh sắc thiên nhiên mà còn hấp dẫn bởi ẩm thực đặc sắc. Khám phá ngay 10 quán ăn ngon nhất.",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&auto=format&fit=crop",
        category: "Ẩm thực",
        author: { name: "Hương Giang", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=HuongGiang" },
        publishedAt: "2025-12-08",
        readTime: 5,
    },
    {
        id: "3",
        slug: "phu-quoc-4-mua-nen-di-khi-nao",
        title: "Phú Quốc 4 Mùa - Thời Điểm Nào Đẹp Nhất Để Ghé Thăm?",
        excerpt:
            "Phú Quốc đẹp quanh năm nhưng mỗi mùa lại có vẻ đẹp riêng. Nên đi Phú Quốc vào thời điểm nào là lý tưởng nhất?",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop",
        category: "Cẩm nang",
        author: { name: "Tuấn Khang", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=TuanKhang" },
        publishedAt: "2025-11-28",
        readTime: 6,
    },
];

export const whyChooseUsFeatures: Feature[] = [
    {
        id: "1",
        icon: "🏆",
        title: "20+ Năm Kinh Nghiệm",
        description:
            "Hơn 20 năm hoạt động trong ngành du lịch, chúng tôi mang đến trải nghiệm tốt nhất.",
    },
    {
        id: "2",
        icon: "💰",
        title: "Giá Tốt Nhất",
        description:
            "Cam kết giá tốt nhất thị trường. Hoàn tiền 100% nếu tìm được giá thấp hơn.",
    },
    {
        id: "3",
        icon: "🛡️",
        title: "An Toàn & Tin Cậy",
        description:
            "Được cấp phép đầy đủ, bảo hiểm toàn diện và hướng dẫn viên chuyên nghiệp đồng hành.",
    },
    {
        id: "4",
        icon: "📞",
        title: "Hỗ Trợ 24/7",
        description:
            "Đội ngũ hỗ trợ khách hàng sẵn sàng 24/7 để giải đáp mọi thắc mắc.",
    },
];
