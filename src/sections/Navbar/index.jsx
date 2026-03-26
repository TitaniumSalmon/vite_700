import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';

const navItems = [
    { label: 'About', id: 'about-section', icon: faUser },
    { label: 'Experience', id: 'experience-section', icon: faBriefcase },
    { label: 'Project', id: 'project-section', icon: faCode },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about-section');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 120;
            for (const item of navItems) {
                const el = document.getElementById(item.id);
                if (el) {
                    const top = el.offsetTop;
                    const bottom = top + el.offsetHeight;
                    if (scrollY >= top && scrollY < bottom) {
                        setActiveSection(item.id);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className='flex flex-col gap-1'>
            {navItems.map(({ label, id, icon }) => {
                const isActive = activeSection === id;
                return (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className={`group flex items-center gap-3 text-left px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer w-full
                            ${isActive
                                ? 'text-primaryTitle font-semibold bg-blue-50 border-l-4 border-primaryTitle'
                                : 'text-gray-400 hover:text-primaryContent hover:bg-gray-100 border-l-4 border-transparent'
                            }`}
                    >
                        <FontAwesomeIcon
                            icon={icon}
                            className={`text-sm transition-all duration-300 ${isActive ? 'text-primaryTitle' : 'text-gray-300 group-hover:text-primarySubcontent'}`}
                        />
                        <span className={`text-sm tracking-wide transition-all duration-300 ${isActive ? '' : 'group-hover:translate-x-1'}`}>
                            {label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
};

export default Navbar;