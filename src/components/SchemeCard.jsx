import { ArrowRight } from 'lucide-react';

/* Badge colors — always pastel, always black text via CSS .brutal-badge */
const categoryColors = {
    agriculture: 'bg-green-200',
    health: 'bg-red-200',
    business: 'bg-blue-200',
    social: 'bg-purple-200',
    housing: 'bg-amber-200',
    women: 'bg-pink-200',
    education: 'bg-cyan-200',
    documents: 'bg-gray-200',
};

export default function SchemeCard({ scheme, onSelect }) {
    return (
        <div className="brutal-card flex flex-col gap-2.5 sm:gap-3 h-full">
            {/* Category Badge + Mode */}
            <div className="flex items-start justify-between gap-2">
                <span className={`brutal-badge ${categoryColors[scheme.category] || 'bg-gray-200'}`}>
                    {scheme.category}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider opacity-60">
                    {scheme.applicationMode}
                </span>
            </div>

            {/* Title — inherits color from .brutal-card (black in light, white in dark) */}
            <h3 className="text-base sm:text-lg font-extrabold leading-tight">
                {scheme.title}
            </h3>

            {/* Ministry */}
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-50">
                {scheme.ministry}
            </p>

            {/* Benefit summary */}
            <p className="text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3 opacity-80">
                {scheme.benefits}
            </p>

            {/* CTA */}
            <button
                onClick={() => onSelect(scheme)}
                className="brutal-btn-orange w-full mt-auto text-[10px] sm:text-xs py-2.5"
            >
                View Full Details <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
        </div>
    );
}
