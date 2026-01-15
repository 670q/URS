"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Activity, FileCheck, Shield, Zap, Database, BarChart3 } from "lucide-react";

export default function FeaturesPage() {
    const featuresList = [
        {
            icon: <Activity />,
            title: "نظام رصد (Rasad)",
            desc: "تتبع حركة الدواء من التوريد وحتى الصرف للمريض بدقة متناهية لضمان الامتثال لمتطلبات هيئة الغذاء والدواء."
        },
        {
            icon: <FileCheck />,
            title: "فاتورة إلكترونية (ZATCA)",
            desc: "إصدار فواتير ضريبية متوافقة تماماً مع هيئة الزكاة والضريبة والجمارك، مع دعم QR Code للمرحلة الثانية."
        },
        {
            icon: <Database />,
            title: "إدارة المخزون الذكية",
            desc: "تنبيهات تلقائية قبل نفاذ الكمية وقبل انتهاء صلاحية الأدوية، مما يقلل الهدر ويزيد الأرباح."
        },
        {
            icon: <Shield />,
            title: "أمان وموثوقية",
            desc: "نظام صلاحيات متقدم للموظفين، ونسخ احتياطي سحابي، وتشفير للبيانات الحساسة."
        },
        {
            icon: <BarChart3 />,
            title: "تقارير وتحليلات",
            desc: "لوحات بيانات تفاعلية تعرض المبيعات اليومية، الأدوية الأكثر مبيعاً، والراكد، لاتخاذ قرارات مدروسة."
        },
        {
            icon: <Zap />,
            title: "سهولة الاستخدام",
            desc: "واجهة عربية بالكامل، تدعم اختصارات الكيبورد، مصممة لتسريع عملية البيع وتقليل طوابير الانتظار."
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-12 bg-white text-center">
                <motion.h1
                    className="text-4xl font-bold text-urs-navy mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    مميزات النظام الشاملة
                </motion.h1>
            </section>

            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresList.map((feature, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-urs-navy hover:border-urs-green group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-urs-navy mb-6 group-hover:bg-urs-green group-hover:text-white transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
