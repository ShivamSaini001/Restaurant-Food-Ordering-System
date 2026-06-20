"use client"

import { Contact, Group, GroupIcon, Home, Info, Package, ShoppingCart } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import React from 'react'

const MobileBottomNav = () => {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", icon: <Home size={18} />, href: "/" },
    { label: "Categories", icon: <Group size={18} />, href: "/category" },
    { label: "My Orders", icon: <Package size={18} />, href: "/orders" },
    { label: "Cart", icon: <ShoppingCart size={18} />, href: "/cart" },
    { label: "Contact", icon: <Contact size={18} />, href: "/contact" },
  ];


  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:hidden" style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}>
      <div className="max-w-sm mx-auto primary rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center justify-around px-2 py-2 gap-1">
        {navLinks.map(({ label, icon, href }) => {
          const isActive = (href === pathname ? true : false);

          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className={`relative flex flex-col items-center justify-center gap-2 flex-1 min-h-[52px] rounded-2xl px-1 py-2 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                }`}
            >
              {/* Active pip */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    layoutId="pip"
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-1/2 warning rounded-b-sm"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ scaleX: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <motion.div
                className="relative flex items-center justify-center"
                animate={{ y: isActive ? -2 : 0, scale: isActive ? 1.12 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >

                {/* icon */}
                {icon && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.1 }}
                    className={`${isActive ? 'warning-text' : 'text-white'} min-w-[16px] h-4 mt-2 text-[9px] font-bold rounded-full flex items-center justify-center px-1 leading-none`}
                  >
                    {icon}
                  </motion.span>
                )}
              </motion.div>

              {/* Label */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                    className="text-[10px] font-bold warning-text tracking-wide capitalize leading-none"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </div>
    </nav>
  )
}

export default MobileBottomNav