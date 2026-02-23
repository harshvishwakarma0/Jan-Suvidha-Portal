import { ExternalLink, Flag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const officialLinks = [
    { label: 'India.gov.in', url: 'https://india.gov.in' },
    { label: 'UIDAI (Aadhar)', url: 'https://uidai.gov.in' },
    { label: 'Scholarships', url: 'https://scholarships.gov.in' },
    { label: 'E-Shram', url: 'https://eshram.gov.in' },
    { label: 'PM-JAY', url: 'https://pmjay.gov.in' },
    { label: 'PM-KISAN', url: 'https://pmkisan.gov.in' },
];

export default function Footer() {
    const { isDark } = useTheme();

    return (
        <footer className={`border-t-4 border-black mt-8 transition-colors duration-500 ${isDark ? 'bg-dm-bg text-dm-text-muted' : 'bg-black text-cream'}`}>
            <div className="max-w-[1400px] mx-auto px-3 sm:px-6 py-6 sm:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-brutal-yellow border-2 border-black flex items-center justify-center">
                                <Flag className="w-5 h-5 text-stone-900" />
                            </div>
                            <div>
                                <div className="font-extrabold text-base sm:text-lg uppercase tracking-wider text-brutal-yellow">Jan Suvidha</div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brutal-orange">Informational Portal</div>
                            </div>
                        </div>
                        <p className={`text-[10px] sm:text-xs leading-relaxed max-w-sm ${isDark ? 'text-dm-muted' : 'text-cream/70'}`}>
                            A citizen-friendly directory of government schemes, document procedures, and scholarships.
                            Not affiliated with the Government of India.
                        </p>
                    </div>

                    {/* Official Links */}
                    <div>
                        <h3 className="font-extrabold uppercase tracking-widest text-[10px] sm:text-xs mb-3 sm:mb-4 border-b-2 border-brutal-orange/30 pb-2 text-brutal-orange">
                            Official Portals
                        </h3>
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                            {officialLinks.map((link) => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold transition-colors duration-200 py-1 ${isDark ? 'text-dm-muted hover:text-brutal-yellow' : 'text-cream/80 hover:text-brutal-yellow'
                                        }`}
                                >
                                    <ExternalLink className="w-3 h-3 flex-shrink-0 text-brutal-orange" />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className={`border-t-2 py-2.5 sm:py-3 px-3 sm:px-4 ${isDark ? 'border-dm-card' : 'border-cream/10'}`}>
                <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
                    <p className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-dm-muted' : 'text-cream/50'}`}>
                        © 2026 Jan Suvidha Portal — Informational Resource Only
                    </p>
                    <span className="text-sm text-brutal-orange">🇮🇳 Jai Hind</span>
                </div>
            </div>
        </footer>
    );
}
