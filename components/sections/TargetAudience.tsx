"use client";

import { motion } from "framer-motion";
import { Store, Building, Stethoscope } from "lucide-react";

export const TargetAudience = () => {
    const targets = [
        {
            title: "صيدليات فردية",
            icon: <Store className="w-12 h-12 mb-4" />,
            desc: "حلول مثالية للإدارة المستقلة بكفاءة عالية."
        },
        {
            title: "سلاسل صيدليات",
            icon: <Building className="w-12 h-12 mb-4" />,
            desc: "ربط فروع متعددة وإدارة مركزية موحدة."
        },
        {
            title: "صيدليات طبية متخصصة",
            icon: <Stethoscope className="w-12 h-12 mb-4" />,
            desc: "أدوات مخصصة للتركيبات والأدوية الخاصة."
        }
    ];

    return (
        <section className="py-20 bg-urs-navy text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">نظام صُمم خصيصاً لـ</h2>
                    <div className="w-24 h-1 bg-urs-green mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {targets.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl text-center hover:bg-white/10 transition-colors cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="flex justify-center text-urs-green">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-300 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
