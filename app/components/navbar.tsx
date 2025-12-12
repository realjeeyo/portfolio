import React from 'react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  return (
        <header className="sticky top-0 z-50 w-full flex justify-center">
            <div className="mx-auto flex max-w-4xl items-center justify-center rounded-4xl border border-white/25 bg-white/35 px-5 py-3 shadow-lg shadow-black/5 backdrop-blur-2xl">
                <nav className="flex flex-wrap items-center justify-center gap-3">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="rounded-full border border-white/40 bg-white/60 px-5 py-2 text-sm font-semibold text-gray-800 transition-colors duration-200 hover:bg-black hover:text-white"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
  );
}

export default Navbar;