import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Flag, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ searchQuery, setSearchQuery }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    return (
        <header
            className={`border-b-4 border-black sticky top-0 z-50 transition-colors duration-500 ${isDark ? 'bg-dm-surface' : 'bg-brutal-yellow'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-3 sm:px-6">
                <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black border-2 border-black flex items-center justify-center shadow-brutal-sm">
                            <Flag className="w-4 h-4 sm:w-5 sm:h-5 text-brutal-yellow" />
                        </div>
                        <div className="leading-tight">
                            <span className="text-stone-900 dark:text-stone-50 font-extrabold text-base sm:text-lg block tracking-tight">
                                JAN SUVIDHA
                            </span>
                            <span className="text-brutal-orange font-bold text-[9px] sm:text-[10px] block uppercase tracking-[0.2em]">
                                Portal
                            </span>
                        </div>
                    </Link>

                    {/* Universal Search Bar — desktop */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-4">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-900/50 dark:text-stone-50/50" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search any scheme, document, or keyword..."
                                className="brutal-input pl-10 py-2.5 text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2">
                        {/* Theme Toggle — highly visible */}
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border-2 border-black bg-brutal-orange shadow-brutal-sm transition-transform duration-120 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
                            aria-label="Toggle theme"
                            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        >
                            {isDark
                                ? <Sun className="w-5 h-5 text-stone-900 dark:text-stone-50" />
                                : <Moon className="w-5 h-5 text-stone-900 dark:text-stone-50" />
                            }
                        </button>

                        {/* Hamburger — mobile only */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-black bg-black shadow-brutal-sm cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {menuOpen
                                ? <X className="w-5 h-5 text-brutal-yellow" />
                                : <Menu className="w-5 h-5 text-brutal-yellow" />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile Menu — search bar */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-24 pb-3 border-t-2 border-black' : 'max-h-0'
                        }`}
                >
                    <div className="relative pt-3">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 mt-1.5 w-4 h-4 text-stone-900/50 dark:text-stone-50/50" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search schemes..."
                            className="brutal-input pl-10 py-2.5 text-sm"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
