"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Logo = () => {
    const [showImage, setShowImage] = useState(false);

    // Animation sequence
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 1500); // Wait for arrow to perform partial draw
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-40 h-24 flex items-center justify-center">
            {/* Animated Arrow Path - Recreating the loop shape roughly */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M 20 80 L 20 40 Q 20 10 50 10 L 150 10 Q 180 10 180 40 L 180 60"
                    stroke="#4CAF50"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* Top white part of the arrow if we want to mimic the image exactly, 
            but for now one continuous green line is a good stylized start, 
            or we can do two paths. Use just one green path for the effect. */}
            </svg>

            {/* Actual Logo Image Fading In */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: showImage ? 1 : 0,
                    scale: showImage ? 1 : 0.8
                }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <Image
                    src="/logo.png"
                    alt="URS Logo"
                    width={120}
                    height={80}
                    className="object-contain"
                />
            </motion.div>

            {/* Pulse Effect for Pharmacy Icon (Centered generic spot) */}
            {showImage && (
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-urs-green/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )}
        </div>
    );
};
