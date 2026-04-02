import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Destination } from "@/types";

interface DestinationCardProps {
    destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
    return (
        <Link
            href={`/destinations/${destination.slug}`}
            className="group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            aria-label={`Khám phá ${destination.name}, ${destination.country}`}
        >
            <div className="relative h-64 w-full">
                <Image
                    src={destination.image}
                    alt={`Cảnh đẹp ${destination.name}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Top badge */}
                <Badge className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                    {destination.country}
                </Badge>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-xl mb-1 group-hover:text-accent transition-colors">
                        {destination.name}
                    </h3>
                    <p className="text-xs text-white/80 mb-2">{destination.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                            {destination.tourCount} tours
                        </span>
                        <span className="text-xs flex items-center gap-1 text-white/80 group-hover:text-white transition-colors">
                            Khám phá ngay
                            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
