"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

export const Growth = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-urs-navy">نمو أرباحك بالأرقام</h2>
                    <p className="text-gray-600 mt-2">لوحات بيانات تفاعلية لمتابعة أداء صيدليتك</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Chart Card */}
                    <div className="col-span-2 bg-white border border-gray-100 shadow-xl rounded-2xl p-8">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="font-bold text-gray-700">المبيعات الشهرية</h3>
                            <TrendingUp className="text-urs-green" />
                        </div>

                        <div className="flex items-end justify-between h-64 gap-4 px-4">
                            {[30, 45, 35, 60, 50, 75, 90].map((height, i) => (
                                <div key={i} className="flex-1 flex flex-col justify-end gap-2 group relative">
                                    {/* Tooltip */}
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded transition-opacity">
                                        {height * 100} ريال
                                    </div>

                                    <motion.div
                                        className="w-full bg-urs-navy/10 rounded-t-lg relative overflow-hidden"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${height}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-urs-navy to-blue-500 opacity-80 hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                    <span className="text-xs text-gray-400 text-center">{i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stat Card */}
                    <div className="bg-urs-navy text-white rounded-2xl p-8 flex flex-col justify-center gap-6 shadow-xl leading-relaxed">
                        <div>
                            <span className="text-blue-200 text-sm">إجمالي المبيعات اليوم</span>
                            <Counter value={6409} suffix=" ر.س" />
                        </div>
                        <div className="h-px bg-white/20" />
                        <div>
                            <span className="text-blue-200 text-sm">الدخل الشهري</span>
                            <Counter value={125890} suffix=" ر.س" />
                        </div>

                        <div className="mt-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                            <p className="text-sm">🚀 أداءك أفضل بنسبة <span className="text-green-400 font-bold">12%</span> من الشهر الماضي</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    // A simplified counter animation logic
    // In production I'd use 'framer-motion' layout effects or useMotionValue + useTransform
    // Creating a quick hookless version for this demo by just animating visual text?
    // Actually, let's use standard framer-motion approach for counting using state
    const [count, setCount] = useState(0);

    // We can simulate counting when in view
    return (
        <motion.h4
            className="text-4xl font-bold font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => {
                let start = 0;
                const end = value;
                const duration = 2000;
                const stepTime = Math.abs(Math.floor(duration / (end / 100))); // approximate

                // For big numbers, just jump visually or use a library, 
                // but let's do a simple interval here for the "6409"

                if (value > 10000) {
                    setCount(value); // Skip animation for very large numbers in this simple demo
                    return;
                }

                const timer = setInterval(() => {
                    start += Math.ceil(end / 50);
                    if (start >= end) {
                        setCount(end);
                        clearInterval(timer);
                    } else {
                        setCount(start);
                    }
                }, 30);
            }}
        >
            {count.toLocaleString('en-US')}{suffix}
        </motion.h4>
    )
}
