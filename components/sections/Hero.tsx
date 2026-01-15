"use client";

import { motion } from "framer-motion";
import { Laptop } from "lucide-react";

export const Hero = () => {
    const text = "حلول تقنية متكاملة لإدارة الصيدليات";

    return (
        <section className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-12 py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white" />

            {/* Motion Background Icons */}
            <BackgroundFloatingIcons />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="text-right order-2 lg:order-1 space-y-6">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-urs-navy leading-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-600 max-w-lg mr-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        نظام متطور يربطك مباشرة مع رصد والزكاة، مع إدارة ذكية للمخزون والمبيعات.
                    </motion.p>

                    <motion.button
                        className="px-8 py-3 bg-urs-navy text-white rounded-lg font-bold shadow-lg hover:bg-blue-900 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ابدأ الآن
                    </motion.button>
                </div>

                {/* Hero Image / Illustration */}
                <div className="order-1 lg:order-2 flex justify-center perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, rotateX: 10, y: 50 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative"
                    >
                        {/* Laptop Frame Mockup */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full max-w-lg"
                        >
                            {/* Just a placeholder representation of the dashboard */}
                            <div className="bg-gray-800 rounded-xl p-2 shadow-2xl border-b-8 border-gray-700">
                                <div className="bg-urs-navy h-64 md:h-80 w-full rounded-lg flex items-center justify-center relative overflow-hidden group">
                                    <Laptop className="w-16 h-16 text-white/20" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10" />

                                    {/* Dashboard Dummy UI */}
                                    <div className="absolute top-4 right-4 w-1/4 h-20 bg-white/10 rounded backdrop-blur-sm" />
                                    <div className="absolute top-4 right-[30%] w-1/4 h-20 bg-white/10 rounded backdrop-blur-sm" />
                                    <div className="absolute top-32 right-4 w-3/5 h-32 bg-white/5 rounded border border-white/10" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const BackgroundFloatingIcons = () => {
    // Generate some random floating + icons
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" dir="ltr">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-urs-green/10 font-bold text-6xl"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        rotate: 0
                    }}
                    animate={{
                        y: [null, Math.random() * -100 + "%"],
                        rotate: 360
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    +
                </motion.div>
            ))}
        </div>
    );
}
