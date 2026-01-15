"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Headphones, MousePointerClick, Lock, Users, Zap } from "lucide-react";

export const FeaturesDetail = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-10 h-10 text-emerald-500" />,
            title: "أمان وحماية البيانات",
            description: "تشفير كامل للبيانات مع نسخ احتياطي منتظم لضمان استمرارية العمل وصلاحيات وصول دقيقة للموظفين.",
            color: "bg-emerald-50"
        },
        {
            icon: <MousePointerClick className="w-10 h-10 text-blue-500" />,
            title: "سهولة الاستخدام",
            description: "واجهة مرنة وبديهية تتيح الوصول لجميع الوظائف بدون تعقيد، مع تدريب شامل للموظفين.",
            color: "bg-blue-50"
        },
        {
            icon: <Headphones className="w-10 h-10 text-purple-500" />,
            title: "الدعم الفني المتخصص",
            description: "فريق دعم فني مخصص لضمان استمرارية العمل وحل أي مشاكل تقنية بسرعة وكفاءة.",
            color: "bg-purple-50"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-urs-navy mb-4">لماذا يثق بنا عملاؤنا؟</h2>
                    <p className="text-gray-600">نقدم حلولاً تتجاوز مجرد إدارة المخزون، لنهتم بأدق تفاصيل الأمان وتجربة المستخدم.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow bg-white relative overflow-hidden group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-urs-navy mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                            {/* Decorative Circle */}
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gray-50 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
