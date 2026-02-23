import {
    Tractor, HeartPulse, Briefcase, ShieldCheck, Home,
    Baby, GraduationCap, FileText, LayoutGrid, Building2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const iconMap = {
    Tractor, HeartPulse, Briefcase, ShieldCheck, Home,
    Baby, GraduationCap, FileText, Building2,
};

export default function Sidebar({ categories, activeCategory, setActiveCategory }) {
    const { isDark } = useTheme();

    return (
        <aside className="w-full lg:w-60 xl:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-[84px]">
                <div
                    className={`border-2 border-black shadow-brutal transition-colors duration-500 ${isDark ? 'bg-dm-surface' : 'bg-cream'
                        }`}
                >
                    {/* Header */}
                    <div className="bg-brutal-yellow px-4 py-3 border-b-2 border-black">
                        <h2 className="font-extrabold text-xs sm:text-sm text-stone-900 uppercase tracking-widest flex items-center gap-2">
                            <LayoutGrid className="w-4 h-4" />
                            Categories
                        </h2>
                    </div>

                    {/* Category Buttons */}
                    <nav className="p-1.5 sm:p-2 space-y-1">
                        {/* "All Schemes" button */}
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`w-full flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-2.5 sm:py-3 text-left font-bold text-xs sm:text-sm uppercase tracking-wider border-2 transition-all duration-150 cursor-pointer ${activeCategory === null
                                ? 'bg-brutal-orange text-stone-900 border-black shadow-brutal-sm'
                                : isDark
                                    ? 'bg-dm-surface text-dm-text border-transparent hover:border-black hover:bg-dm-card hover:shadow-brutal-sm'
                                    : 'bg-white text-stone-900 border-transparent hover:border-black hover:shadow-brutal-sm'
                                }`}
                        >
                            <LayoutGrid className="w-4 h-4 flex-shrink-0" />
                            <span>All Schemes</span>
                        </button>

                        {categories.map((cat) => {
                            const Icon = iconMap[cat.icon] || FileText;
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`w-full flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-2.5 sm:py-3 text-left font-bold text-xs sm:text-sm uppercase tracking-wider border-2 transition-all duration-150 cursor-pointer ${isActive
                                        ? 'bg-brutal-orange text-stone-900 border-black shadow-brutal-sm'
                                        : isDark
                                            ? 'bg-dm-surface text-dm-text border-transparent hover:border-black hover:bg-dm-card hover:shadow-brutal-sm'
                                            : 'bg-white text-stone-900 border-transparent hover:border-black hover:shadow-brutal-sm'
                                        }`}
                                >
                                    <Icon className="w-4 h-4 flex-shrink-0" />
                                    <span className="truncate">{cat.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </aside>
    );
}
