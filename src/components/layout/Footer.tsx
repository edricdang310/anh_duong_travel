import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/constants/site";
import { footerQuickLinks, footerTourLinks } from "@/constants/navigation";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-background" role="contentinfo">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="lg:col-span-1 space-y-4">
                        <Link href="/" aria-label="Trang chủ Ánh Dương Travel">
                            <Image
                                src="/images/logo/logo_ad.png"
                                alt="Ánh Dương Travel"
                                width={140}
                                height={56}
                                className="h-14 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-sm text-background/70 leading-relaxed">
                            Hơn 20 năm đồng hành cùng hàng triệu du khách trên khắp Việt Nam và thế giới. Chúng tôi mang đến những hành trình đáng nhớ.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <Link
                                href={siteConfig.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </Link>
                            <Link
                                href={siteConfig.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                                </svg>
                            </Link>
                            <Link
                                href={siteConfig.socials.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                                aria-label="YouTube"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-background uppercase tracking-wider">
                            Liên kết nhanh
                        </h3>
                        <ul className="space-y-2" role="list">
                            {footerQuickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                                    >
                                        <span className="text-primary group-hover:translate-x-0.5 transition-transform">›</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tours */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-background uppercase tracking-wider">
                            Dịch vụ tours
                        </h3>
                        <ul className="space-y-2" role="list">
                            {footerTourLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center gap-1 group"
                                    >
                                        <span className="text-primary group-hover:translate-x-0.5 transition-transform">›</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-background uppercase tracking-wider">
                            Liên hệ
                        </h3>
                        <address className="not-italic space-y-3">
                            <div className="flex items-start gap-2 text-sm text-background/70">
                                <span className="mt-0.5" aria-hidden="true">📍</span>
                                <span>{siteConfig.address}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-background/70">
                                <span aria-hidden="true">📞</span>
                                <a href={`tel:${siteConfig.phone}`} className="hover:text-background transition-colors">
                                    {siteConfig.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-background/70">
                                <span aria-hidden="true">✉️</span>
                                <a href={`mailto:${siteConfig.email}`} className="hover:text-background transition-colors">
                                    {siteConfig.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-background/70">
                                <span aria-hidden="true">🕐</span>
                                <span>{siteConfig.workingHours}</span>
                            </div>
                        </address>
                    </div>
                </div>

                <Separator className="my-10 bg-background/20" />

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/50">
                    <p>
                        © {currentYear} {siteConfig.name}. Tất cả quyền được bảo lưu.
                    </p>
                    <nav className="flex items-center gap-4" aria-label="Footer legal links">
                        <Link href="/chinh-sach-bao-mat" className="hover:text-background/80 transition-colors">
                            Chính sách bảo mật
                        </Link>
                        <span aria-hidden="true">·</span>
                        <Link href="/dieu-khoan-dich-vu" className="hover:text-background/80 transition-colors">
                            Điều khoản dịch vụ
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
