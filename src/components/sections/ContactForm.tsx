"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/constants/site";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Gửi thành công!</h3>
                <p className="text-muted-foreground">
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                </p>
                <Button className="mt-4" onClick={() => setSubmitted(false)} variant="outline">
                    Gửi tin nhắn khác
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5" aria-label="Form liên hệ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                        Họ và tên <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <Input id="contact-name" placeholder="Nguyễn Văn A" required autoComplete="name" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-sm font-medium text-foreground">
                        Số điện thoại <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <Input id="contact-phone" type="tel" placeholder="0901 234 567" required autoComplete="tel" />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                    Email
                </label>
                <Input id="contact-email" type="email" placeholder="example@email.com" autoComplete="email" />
            </div>
            <div className="space-y-2">
                <label htmlFor="contact-tour" className="text-sm font-medium text-foreground">
                    Tour quan tâm
                </label>
                <Input id="contact-tour" placeholder="VD: Hạ Long 3N2Đ, Sapa Trekking..." />
            </div>
            <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                    Tin nhắn <span className="text-destructive" aria-hidden="true">*</span>
                </label>
                <Textarea
                    id="contact-message"
                    placeholder="Nhập nội dung cần tư vấn, yêu cầu đặc biệt..."
                    rows={5}
                    required
                    className="resize-none"
                />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full">
                Gửi Yêu Cầu Tư Vấn
            </Button>
            <p className="text-xs text-muted-foreground text-center">
                Bằng cách gửi form này, bạn đồng ý với{" "}
                <a href="/chinh-sach-bao-mat" className="underline hover:text-primary">Chính sách bảo mật</a> của chúng tôi.
            </p>

            {/* Quick contact */}
            <div className="pt-4 border-t border-border text-center space-y-1">
                <p className="text-sm text-muted-foreground">Hoặc liên hệ trực tiếp:</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
                    <a href={`tel:${siteConfig.phone}`} className="text-primary hover:underline font-medium">
                        📞 {siteConfig.phone}
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline font-medium">
                        ✉️ {siteConfig.email}
                    </a>
                </div>
            </div>
        </form>
    );
}
