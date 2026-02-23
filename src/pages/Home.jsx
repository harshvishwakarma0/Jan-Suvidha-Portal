import { useState, useMemo } from 'react';
import { schemes, CATEGORIES } from '../data/masterDatabase.js';
import Sidebar from '../components/Sidebar';
import SchemeCard from '../components/SchemeCard';
import SchemeDetail from '../components/SchemeDetail';
import { Search, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Home({ searchQuery }) {
    const [activeCategory, setActiveCategory] = useState(null);
    const [selectedScheme, setSelectedScheme] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { isDark } = useTheme();

    // Filter schemes based on search + category
    const filtered = useMemo(() => {
        let result = schemes;

        if (activeCategory) {
            result = result.filter((s) => s.category === activeCategory);
        }

        if (searchQuery && searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(
                (s) =>
                    s.title.toLowerCase().includes(q) ||
                    s.category.toLowerCase().includes(q) ||
                    s.ministry.toLowerCase().includes(q) ||
                    s.benefits.toLowerCase().includes(q) ||
                    s.eligibility.some((e) => e.toLowerCase().includes(q))
            );
        }

        return result;
    }, [activeCategory, searchQuery]);

    const activeCatLabel = activeCategory
        ? CATEGORIES.find((c) => c.id === activeCategory)?.label
        : 'All Schemes';

    return (
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Page Header — always yellow bg, always black text */}
            <div className="bg-brutal-yellow border-2 border-black shadow-brutal p-4 sm:p-5 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-1">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-stone-900" />
                    <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-stone-900">
                        Government Schemes Directory
                    </h1>
                </div>
                <p className="text-[10px] sm:text-sm font-bold text-stone-900/60">
                    Browse {schemes.length} schemes across {CATEGORIES.length} categories. Click any card for full details.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                {/* Mobile sidebar toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="brutal-btn-yellow w-full justify-between text-xs"
                    >
                        <span>Filter: {activeCatLabel}</span>
                        {sidebarOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${sidebarOpen ? 'max-h-[600px] mt-2' : 'max-h-0'
                            }`}
                    >
                        <Sidebar
                            categories={CATEGORIES}
                            activeCategory={activeCategory}
                            setActiveCategory={(cat) => {
                                setActiveCategory(cat);
                                setSidebarOpen(false);
                            }}
                        />
                    </div>
                </div>

                {/* Desktop sidebar */}
                <div className="hidden lg:block">
                    <Sidebar
                        categories={CATEGORIES}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                </div>

                {/* Main Grid */}
                <div className="flex-1 min-w-0">
                    {/* Results header — text inherits from body dark mode */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4 border-b-2 border-current pb-2 sm:pb-3 opacity-90">
                        <h2 className="font-extrabold text-xs sm:text-sm uppercase tracking-widest">
                            {activeCatLabel}
                        </h2>
                        <span className="brutal-badge bg-brutal-yellow">
                            {filtered.length} {filtered.length === 1 ? 'scheme' : 'schemes'}
                        </span>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="brutal-card text-center py-8 sm:py-12">
                            <Search className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 opacity-40" />
                            <h3 className="font-extrabold text-base sm:text-lg mb-2">NO SCHEMES FOUND</h3>
                            <p className="text-xs sm:text-sm opacity-60">
                                Try a different search term or category filter.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
                            {filtered.map((scheme) => (
                                <SchemeCard
                                    key={scheme.id}
                                    scheme={scheme}
                                    onSelect={setSelectedScheme}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Detail Modal */}
            {selectedScheme && (
                <SchemeDetail
                    scheme={selectedScheme}
                    onClose={() => setSelectedScheme(null)}
                />
            )}
        </div>
    );
}
