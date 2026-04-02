export interface Tour {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    price: number;
    duration: string;
    rating: number;
    reviewCount: number;
    destination: string;
    category: TourCategory;
    featured: boolean;
}

export type TourCategory =
    | "cultural"
    | "adventure"
    | "beach"
    | "mountain"
    | "city"
    | "eco";

export interface Destination {
    id: string;
    slug: string;
    name: string;
    country: string;
    image: string;
    tourCount: number;
    description: string;
    featured: boolean;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    author: {
        name: string;
        avatar: string;
    };
    publishedAt: string;
    readTime: number;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    avatar: string;
    rating: number;
    content: string;
    tourName: string;
}

export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

export interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
}
