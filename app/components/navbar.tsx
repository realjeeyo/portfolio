import React from 'react'

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

const navbar = () => {
  return (
    <nav>
        <ul className="flex space-x-6 p-4 bg-gray-100 dark:bg-gray-900">
            {navItems.map((item) => (
                <li key={item.name}>
                    <a href={item.href} className="text-gray-800 dark:text-gray-200 hover:underline">
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  );
}

export default navbar;