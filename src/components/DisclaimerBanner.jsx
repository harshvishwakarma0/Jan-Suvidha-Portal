import { AlertTriangle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function DisclaimerBanner() {
    const { isDark } = useTheme();

    return (
        <div
            className={`border-b-4 border-black py-1.5 sm:py-2 px-3 sm:px-4 transition-colors duration-500 ${isDark ? 'bg-dm-bg text-brutal-yellow' : 'bg-black text-brutal-yellow'
                }`}
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-2 text-center">
                <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-brutal-orange" />
                <p className="text-[10px] sm:text-xs font-mono font-bold leading-tight">
                    <span className="text-brutal-orange">DISCLAIMER:</span>{' '}
                    <span className="hidden sm:inline">This is an informational guide — NOT an official government website. Verify at official portals.</span>
                    <span className="sm:hidden">Not an official govt. website.</span>
                </p>
            </div>
        </div>
    );
}
