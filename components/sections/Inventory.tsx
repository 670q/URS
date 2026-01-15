"use client";

import { motion } from "framer-motion";
import { Bell, Package, AlertCircle } from "lucide-react";

export const Inventory = () => {
    return (
        <section className="py-20 bg-urs-bg">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Visual */}
                <div className="relative flex justify-center">
                    {/* Medicine Card */}
                    <motion.div
                        className="bg-white p-6 rounded-2xl shadow-xl w-72 relative border-l-4 border-urs-alert"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                                <Package className="text-urs-navy" />
                                <div>
                                    <h3 className="font-bold text-lg">Actemra 200mg</h3>
                                    <p className="text-xs text-gray-500">Injectable Solution</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">الكمية الحالية:</span>
                                <span className="font-bold text-urs-alert">3 علب</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-urs-alert w-[15%] h-full rounded-full" />
                            </div>
                        </div>

                        {/* Shaking Alert Bell */}
                        <motion.div
                            className="absolute -top-4 -right-4 bg-urs-alert text-white p-3 rounded-full shadow-lg flex items-center gap-2"
                            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                        >
                            <Bell className="w-5 h-5 fill-current" />
                            <span className="text-xs font-bold whitespace-nowrap hidden md:inline">مطلوب إعادة التخزين</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Text */}
                <div className="text-right">
                    <h2 className="text-3xl font-bold text-urs-navy mb-4">إدارة مخزون ذكية</h2>
                    <p className="text-gray-600 text-lg mb-6">
                        لا تفقد مبيعاتك بسبب نفاذ المخزون. نظام التنبيه الذكي يخبرك بالأدوية التي قاربت على الانتهاء تلقائياً.
                    </p>
                    <ul className="space-y-4">
                        <KeyFeature text="تنبيهات انخفاض المخزون الفورية" />
                        <KeyFeature text="تتبع تواريخ الصلاحية" />
                        <KeyFeature text="اقتراحات الطلب الذكي" />
                    </ul>
                </div>

            </div>
        </section>
    );
};

const KeyFeature = ({ text }: { text: string }) => (
    <motion.li
        className="flex items-center gap-3 text-urs-navy font-medium"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    >
        <AlertCircle className="w-5 h-5 text-urs-green" />
        {text}
    </motion.li>
);
