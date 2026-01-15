"use client";

import { Logo } from "../ui/Logo";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <Link href="/" className="scale-75 origin-right relative z-50">
                    <Logo />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center text-urs-navy font-semibold">
                    <NavLinks />
                    <button className="bg-urs-green text-white px-5 py-2 rounded-full hover:bg-green-600 transition-colors">
                        دخول
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-urs-navy p-2 relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-xl p-4 pt-24 md:hidden flex flex-col gap-4 text-center"
                        >
                            <NavLinks mobile />
                            <button className="bg-urs-green text-white px-5 py-3 rounded-xl hover:bg-green-600 transition-colors w-full">
                                دخول
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
    const baseClasses = "hover:text-urs-green transition-colors";
    const mobileClasses = "py-2 border-b border-gray-50 text-lg";

    return (
        <>
            <Link href="/" className={`${baseClasses} ${mobile ? mobileClasses : ''}`}>الرئيسية</Link>
            <Link href="/about" className={`${baseClasses} ${mobile ? mobileClasses : ''}`}>عن النظام</Link>
            <Link href="/features" className={`${baseClasses} ${mobile ? mobileClasses : ''}`}>المميزات</Link>
            <Link href="/contact" className={`${baseClasses} ${mobile ? mobileClasses : ''}`}>تواصل معنا</Link>
        </>
    );
};
