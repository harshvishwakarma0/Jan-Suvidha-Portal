import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, FileText, Users, Landmark, ListOrdered, ArrowRightCircle } from 'lucide-react';

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

export default function SchemeDetail({ scheme, onClose }) {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => document.body.classList.remove('modal-open');
    }, []);

    // Close on Escape
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    if (!scheme) return null;

    return (
        <>
            {/* Backdrop — uses CSS class for dark mode, very opaque */}
            <div className="modal-backdrop" onClick={onClose} />

            {/* Modal Container */}
            <div className="modal-container" onClick={onClose}>
                {/* Modal Panel — uses CSS class for solid dark background */}
                <div className="modal-panel" onClick={(e) => e.stopPropagation()}>

                    {/* Header — always yellow, always black text */}
                    <div className="bg-brutal-yellow border-b-4 border-black px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                            <span className={`brutal-badge ${categoryColors[scheme.category] || 'bg-gray-200'} mb-2`}>
                                {scheme.category}
                            </span>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold leading-tight mt-2 text-stone-900">
                                {scheme.title}
                            </h2>
                            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1 text-stone-900/60">
                                {scheme.ministry}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-black border-2 border-black shadow-brutal-sm cursor-pointer transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5 text-brutal-yellow" />
                        </button>
                    </div>

                    {/* Body — scrollable, uses modal-panel text color (dark mode: white) */}
                    <div className="px-4 sm:px-6 py-5 sm:py-6 space-y-5 sm:space-y-6 max-h-[65vh] overflow-y-auto">
                        {/* Benefits */}
                        <div>
                            <h3 className="modal-section-heading">
                                <Landmark className="w-4 h-4" />
                                Benefits
                            </h3>
                            <div className="modal-section-card text-xs sm:text-sm leading-relaxed p-3 sm:p-4">
                                {scheme.benefits}
                            </div>
                        </div>

                        {/* How to Apply — NEW SECTION */}
                        {scheme.howToApply && scheme.howToApply.length > 0 && (
                            <div>
                                <h3 className="modal-section-heading">
                                    <ListOrdered className="w-4 h-4" />
                                    How to Apply — Step by Step
                                </h3>
                                <ol className="space-y-2 list-none p-0">
                                    {scheme.howToApply.map((step, i) => (
                                        <li key={i} className="modal-section-card flex items-start gap-2 sm:gap-3 text-xs sm:text-sm p-2.5 sm:p-3">
                                            <span className="w-6 h-6 bg-brutal-yellow flex items-center justify-center font-extrabold text-[10px] text-stone-900 flex-shrink-0 border-2 border-black mt-0.5">
                                                {i + 1}
                                            </span>
                                            <span className="flex-1 leading-relaxed">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}

                        {/* Eligibility */}
                        <div>
                            <h3 className="modal-section-heading">
                                <Users className="w-4 h-4" />
                                Eligibility Criteria
                            </h3>
                            <ul className="space-y-2">
                                {scheme.eligibility.map((item, i) => (
                                    <li key={i} className="modal-section-card flex items-start gap-2 sm:gap-3 text-xs sm:text-sm p-2.5 sm:p-3">
                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Documents Required */}
                        <div>
                            <h3 className="modal-section-heading">
                                <FileText className="w-4 h-4" />
                                Documents Required
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {scheme.documentsRequired.map((doc, i) => (
                                    <div key={i} className="modal-section-card flex items-center gap-2 text-xs sm:text-sm p-2.5 sm:p-3">
                                        <span className="w-5 h-5 bg-brutal-orange flex items-center justify-center font-bold text-[10px] text-stone-900 flex-shrink-0 border border-black">
                                            {i + 1}
                                        </span>
                                        <span>{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Application Mode + Official Link */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="modal-section-card flex-1 p-3 sm:p-4">
                                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 opacity-50">
                                    Application Mode
                                </div>
                                <div className="text-base sm:text-lg font-extrabold">
                                    {scheme.applicationMode}
                                </div>
                            </div>
                            <a
                                href={scheme.officialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="brutal-btn-orange flex-1 text-center text-xs sm:text-sm py-3 sm:py-4"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Visit Official Portal
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
