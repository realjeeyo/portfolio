"use client";

import React from 'react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [hoveredIndex, setHoveredIndex] = React.useState(0);
    const itemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const isHovering = React.useRef(false);
    const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0, height: 0, opacity: 0 });

    const updateIndicator = React.useCallback((index: number) => {
        const node = itemRefs.current[index];
        if (node) {
            setIndicatorStyle({
                left: node.offsetLeft,
                width: node.offsetWidth,
                height: node.offsetHeight,
                opacity: 1,
            });
        } else {
            setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
        }
    }, []);

    React.useEffect(() => {
        updateIndicator(hoveredIndex);
    }, [hoveredIndex, updateIndicator]);

    React.useEffect(() => {
        const handleResize = () => updateIndicator(hoveredIndex);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [hoveredIndex, updateIndicator]);

    React.useEffect(() => {
        const handleScroll = () => {
            const offset = 120;
            let currentIndex = 0;

            for (let i = 0; i < navItems.length; i += 1) {
                const section = document.querySelector<HTMLElement>(navItems[i].href);
                if (section && section.offsetTop <= window.scrollY + offset) {
                    currentIndex = i;
                }
            }

            setActiveIndex(currentIndex);
            if (!isHovering.current) {
                setHoveredIndex(currentIndex);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 flex w-full justify-center scroll-mt-4 py-4">
            <div className="mx-auto flex max-w-4xl items-center justify-center rounded-4xl border border-white/25 bg-white/35 px-5 py-2 shadow-lg shadow-black/5 backdrop-blur-2xl">
                <nav
                    className="relative flex flex-wrap items-center justify-center gap-3"
                    onMouseLeave={() => {
                        isHovering.current = false;
                        setHoveredIndex(activeIndex);
                    }}
                >
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute rounded-full bg-black transition-all duration-300 ease-out"
                        style={{
                            left: `${indicatorStyle.left}px`,
                            width: `${indicatorStyle.width}px`,
                            height: `${indicatorStyle.height}px`,
                            opacity: indicatorStyle.opacity,
                        }}
                    />
                    {navItems.map((item, index) => (
                        <a
                            key={item.name}
                            href={item.href}
                            ref={(el) => {
                                itemRefs.current[index] = el;
                            }}
                            aria-current={index === activeIndex ? 'page' : undefined}
                            onMouseEnter={() => {
                                isHovering.current = true;
                                setHoveredIndex(index);
                            }}
                            onFocus={() => {
                                isHovering.current = true;
                                setHoveredIndex(index);
                            }}
                            onBlur={() => {
                                isHovering.current = false;
                                setHoveredIndex(activeIndex);
                            }}
                            className={`relative z-10 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                                hoveredIndex === index ? 'text-white' : 'text-black'
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;