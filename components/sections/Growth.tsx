"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export const Growth = () => {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-urs-navy">نمو أرباحك بالأرقام</h2>
                    <p className="text-gray-600 mt-2">لوحات بيانات تفاعلية لمتابعة أداء صيدليتك</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Chart Card */}
                    <div className="col-span-2 bg-white border border-gray-100 shadow-xl rounded-2xl p-8 relative overflow-hidden">
                        {/* Decorative Background Grid */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: 'linear-gradient(#0F2C59 1px, transparent 1px), linear-gradient(90deg, #0F2C59 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                        />

                        <div className="flex justify-between items-center mb-8 relative z-10">
                            <div>
                                <h3 className="font-bold text-gray-700 text-lg">تحليل المبيعات الشهرية</h3>
                                <p className="text-sm text-gray-400">آخر 7 أيام</p>
                            </div>
                            <div className="bg-green-50 p-2 rounded-full">
                                <TrendingUp className="text-urs-green w-6 h-6" />
                            </div>
                        </div>

                        <div className="flex items-end justify-between h-72 gap-4 px-2 relative z-10 mt-6">
                            {/* Y-Axis Guidelines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-xs text-gray-300 font-mono">
                                <div className="w-full border-t border-dashed border-gray-100" />
                                <div className="w-full border-t border-dashed border-gray-100" />
                                <div className="w-full border-t border-dashed border-gray-100" />
                                <div className="w-full border-t border-gray-100" />
                            </div>

                            {[35, 50, 45, 75, 60, 85, 95].map((height, i) => (
                                <div key={i} className="flex-1 flex flex-col justify-end gap-3 group relative h-full">
                                    {/* Floating Tooltip */}
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-12 left-1/2 -translate-x-1/2 bg-urs-navy text-white text-xs font-bold py-1.5 px-3 rounded shadow-lg transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20 whitespace-nowrap">
                                        {height * 100} ريال
                                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-urs-navy rotate-45" />
                                    </div>

                                    {/* The Bar */}
                                    <motion.div
                                        className="w-full rounded-t-lg relative overflow-hidden shadow-sm group-hover:shadow-md transition-shadow origin-bottom"
                                        initial={{ height: 0, opacity: 0 }}
                                        whileInView={{ height: `${height}%`, opacity: 1 }}
                                        transition={{
                                            duration: 1.2,
                                            delay: i * 0.15,
                                            type: "spring",
                                            bounce: 0.2
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        {/* Gradient Background */}
                                        <div className={`absolute inset-0 bg-gradient-to-t ${i === 6 ? 'from-urs-green to-emerald-400' : 'from-urs-navy to-blue-500'} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </motion.div>

                                    {/* Label */}
                                    <span className={`text-xs font-medium text-center transition-colors ${i == 6 ? 'text-urs-green font-bold' : 'text-gray-400 group-hover:text-urs-navy'}`}>
                                        {['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stat Card - Enhanced */}
                    <div className="bg-urs-navy text-white rounded-2xl p-8 flex flex-col justify-between gap-6 shadow-xl relative overflow-hidden group">
                        {/* Ambient Glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-700" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-urs-green/20 rounded-full blur-3xl group-hover:bg-urs-green/30 transition-colors duration-700" />

                        <div className="relative z-10 space-y-8">
                            <div>
                                <div className="flex items-center gap-2 text-blue-200 text-sm mb-1">
                                    <span>إجمالي المبيعات اليوم</span>
                                    <ArrowUpRight className="w-4 h-4 text-urs-green" />
                                </div>
                                <Counter value={6409} suffix=" ر.س" />
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                            <div>
                                <div className="flex items-center gap-2 text-blue-200 text-sm mb-1">
                                    <span>الدخل الشهري المتوقع</span>
                                </div>
                                <Counter value={125890} suffix=" ر.س" />
                            </div>
                        </div>

                        <div className="mt-auto relative z-10">
                            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/5 shadow-inner">
                                <p className="text-sm leading-relaxed">
                                    🚀 أداءك هذا الشهر أفضل بنسبة <span className="text-green-400 font-bold text-base">12%</span> مقارنة بالشهر الماضي.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const [count, setCount] = useState(0);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const end = value;
        if (value > 15000) {
            setCount(value);
            return;
        }

        const duration = 2000;
        const steps = 40;
        const increment = Math.ceil(end / steps);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <motion.h4
            className="text-5xl font-bold font-mono tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onViewportEnter={() => setInView(true)}
        >
            {count.toLocaleString('en-US')}<span className="text-2xl text-blue-300 ml-1">{suffix}</span>
        </motion.h4>
    )
}
