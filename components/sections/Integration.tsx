"use client";

import { motion } from "framer-motion";
import { Building2, FileCheck, Activity } from "lucide-react";

export const Integration = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-urs-navy mb-4">ربط حكومي فوري</h2>
                    <p className="text-gray-600">نقل بيانات تلقائي ومتوافق مع هيئة الغذاء والدواء والزكاة</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative">

                    {/* Pharmacy Node */}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-urs-navy rounded-full flex items-center justify-center shadow-xl">
                            <Building2 className="w-10 h-10 text-white" />
                        </div>
                        <span className="font-bold text-urs-navy">صيدليتك</span>
                    </div>

                    {/* Connection Lines & Data Packets */}
                    <div className="flex-1 w-full md:max-w-xl h-24 flex flex-col justify-center relative">
                        {/* Line to Top (Rasad) */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded overflow-hidden">
                            {/* Moving Packet 1 */}
                            <motion.div
                                className="absolute top-0 bottom-0 w-8 bg-urs-green rounded-full opacity-80"
                                animate={{ left: ["100%", "0%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            {/* Moving Packet 2 */}
                            <motion.div
                                className="absolute top-0 bottom-0 w-8 bg-urs-green rounded-full opacity-80"
                                animate={{ left: ["100%", "0%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                            />
                        </div>
                    </div>

                    {/* Government Nodes */}
                    <div className="relative z-10 flex flex-col gap-8">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-20 h-20 bg-emerald-50 border-2 border-emerald-200 rounded-full flex items-center justify-center shadow-sm"
                            >
                                <Activity className="w-8 h-8 text-emerald-600" />
                            </motion.div>
                            <div className="text-right">
                                <span className="font-bold text-gray-700 block text-lg">رصد (Rasad)</span>
                                <span className="text-xs text-gray-500">تتبع وتسجيل الأدوية</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-20 h-20 bg-blue-50 border-2 border-blue-200 rounded-full flex items-center justify-center shadow-sm"
                            >
                                <FileCheck className="w-8 h-8 text-blue-600" />
                            </motion.div>
                            <div className="text-right">
                                <span className="font-bold text-gray-700 block text-lg">الزكاة (ZATCA)</span>
                                <span className="text-xs text-gray-500">فوترة إلكترونية معتمدة</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
