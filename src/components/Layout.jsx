import { Outlet } from 'react-router-dom';
import DisclaimerBanner from './DisclaimerBanner';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

export default function Layout({ searchQuery, setSearchQuery }) {
    const { isDark } = useTheme();

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDark ? 'bg-dm-bg text-dm-text' : 'bg-cream text-stone-900'}`}>
            <DisclaimerBanner />
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
